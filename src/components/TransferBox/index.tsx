import './TransferBox.css';

import Big from 'big.js';
import classNames from 'classnames';
import Box from 'components/Box';
import Button from 'components/Button';
import IconButton from 'components/IconButton';
import Row from 'components/Row';
import Text from 'components/Text';
import TokenSearchDialog from 'components/TokenSearchDialog';
import TxBroadcastingDialog from 'components/TxBroadcastingDialog';
import TxConfirmDialog from 'components/TxConfirmDialog';
import UnsupportedWarning from 'components/UnsupportedWarning';
import dotenv from 'dotenv';
import useAccount from 'hooks/use-account';
import useEthErc20TokenBalance from 'hooks/use-eth-erc20-token-balance';
import useGravityBridgeErc20TokenBalance from 'hooks/use-gravity-bridge-erc20-token-balance';
import arrowIcon from 'images/arrow-icon.png';
import { ReactComponent as ArrowNoTailIcon } from 'images/arrow-no-tail.svg';
import defaultTokenIcon from 'images/default-token-icon.png';
import ethDarkIcon from 'images/eth-icon-dark.png';
import ethLightIcon from 'images/eth-icon-light.png';
import gravityBridgeDarkIcon from 'images/gravity-bridge-icon-dark.png';
import gravityBridgeLightIcon from 'images/gravity-bridge-icon-light.png';
import _ from 'lodash';
import React, { useCallback, useState } from 'react';
import transferer from 'services/transfer/transferer';
import chainHelper from 'services/util/chain-helper';
import loggerFactory from 'services/util/logger-factory';
import toastService from 'services/util/toast-service';
import { IToken, SupportedChain, ThemeType } from 'types';

const logger = loggerFactory.getLogger('[TransferBox]');

dotenv.config();

type TransferBoxProps = {
  theme: ThemeType,
  ethChain: SupportedChain
}

const TransferBox: React.FC<TransferBoxProps> = ({ theme, ethChain }) => {
  const [fromChain, setFromChain] = useState<SupportedChain>(ethChain);
  const [toChain, setToChain] = useState<SupportedChain>(SupportedChain.GravityBridge);
  const [selectedToken, setSelectedToken] = useState<IToken>();
  const [amount, setAmount] = useState<string>('');
  const [tokenSearcherOpened, setTokenSearcherOpened] = useState<boolean>(false);
  const [txConfirmOpened, setTxConfirmOpened] = useState<boolean>(false);
  const [txBroadcastingOpened, setTxBroadcastingOpened] = useState<boolean>(false);
  const [erc20BalanceUpdateCounter, setErc20BalanceUpdateCounter] = useState<number>(0);

  const gravityBridgeAccount = useAccount(SupportedChain.GravityBridge);
  const ethAccount = useAccount(ethChain);
  const ethErc20TokenBalance = useEthErc20TokenBalance(fromChain, ethAccount?.address, selectedToken, erc20BalanceUpdateCounter, 6);
  const gravityBridgeErc20TokenBalance = useGravityBridgeErc20TokenBalance(gravityBridgeAccount?.address, selectedToken, erc20BalanceUpdateCounter, 6);
  const tokenBalance = fromChain === ethChain ? ethErc20TokenBalance : gravityBridgeErc20TokenBalance;

  const gravityBridgeWalletConnected: boolean = gravityBridgeAccount !== undefined;
  const ethWalletConnected: boolean = ethAccount !== undefined;
  const walletConnected: boolean = gravityBridgeWalletConnected && ethWalletConnected;
  const hasAmount: boolean = !_.isEmpty(amount) && new Big(amount).gt('0');
  const tokenSelected: boolean = selectedToken !== undefined;
  const hasTokenBalance: boolean = !_.isEmpty(tokenBalance) && new Big(tokenBalance).gt('0');
  const isEnough: boolean = Big(tokenBalance || '0').gte(Big(amount || '0'));

  const notSupportedYet = fromChain === SupportedChain.GravityBridge;

  const toggleDirection = useCallback(() => {
    if (fromChain === ethChain) {
      setToChain(ethChain);
      setFromChain(SupportedChain.GravityBridge);
      setAmount('0');
    } else {
      setToChain(SupportedChain.GravityBridge);
      setFromChain(ethChain);
      setAmount('0');
    }
  }, [fromChain]);

  const onClickMax = useCallback(() => {
    setAmount(tokenBalance);
  }, [tokenBalance]);

  const onUpdateAmount = useCallback((event) => {
    const value = _.get(event, 'target.value', '');
    if (/^[0-9]*[.,]?[0-9]*$/.test(value)) {
      setAmount(value);
    }
  }, []);

  const onOpenTokenSearcher = useCallback(() => {
    if (walletConnected && !notSupportedYet) {
      setTokenSearcherOpened(true);
    }
  }, [walletConnected, notSupportedYet]);

  const onSelectToken = useCallback((token: IToken) => {
    setSelectedToken(token);
  }, []);

  const onCloseTokenSearcher = useCallback(() => {
    setTokenSearcherOpened(false);
  }, []);

  const onOpenTxConfirm = useCallback(() => {
    setTxConfirmOpened(true);
  }, []);

  const onCloseTxConfirm = useCallback(() => {
    setTxConfirmOpened(false);
  }, []);

  const onConfirm = useCallback(() => {
    setTxConfirmOpened(false);
    setTxBroadcastingOpened(true);
    if (ethAccount && gravityBridgeAccount && selectedToken?.erc20) {
      const fromAddress = fromChain === ethChain ? ethAccount.address : gravityBridgeAccount.address;
      const toAddress = toChain === ethChain ? ethAccount.address : gravityBridgeAccount.address;
      transferer.transfer(fromChain, toChain, fromAddress, toAddress, selectedToken.erc20, amount, '0')
        .then((txHash) => {
          toastService.showTxSuccessToast(selectedToken, amount, txHash, toChain);
          setErc20BalanceUpdateCounter(erc20BalanceUpdateCounter + 1);
        }).catch((error) => {
          toastService.showTxFailToast(selectedToken, amount, toChain, _.get(error, 'message'));
        }).finally(() => {
          setTxBroadcastingOpened(false);
        });
    }
  }, [fromChain, toChain, ethAccount, gravityBridgeAccount, selectedToken, amount, erc20BalanceUpdateCounter]);

  return (
    <Box className="TransferBox">
      <Text className="transfer-box-heading" size="big">Transfer</Text>
      <Row className="space-between">
        <Box className={classNames(fromChain, 'network-container')} density={1} depth={1}>
          <div className="network-container-left">
            <Text className="network-container-muted" muted size="small">From</Text>
            <Text className="network-container-name">
              {chainHelper.getChainName(fromChain)}
            </Text>
          </div>
          <div className="network-container-right">
            <img
              className={classNames(fromChain, 'network-container-icon')}
              src={getIconSource(fromChain, theme)}
              alt="from network"
            />
          </div>
        </Box>
        <IconButton onClick={toggleDirection} type="secondary" className="toggle-button">
          <img src={arrowIcon} alt="toggle"/>
        </IconButton>
        <Box className={classNames(toChain, 'network-container')} density={1} depth={1}>
          <div className="network-container-left">
            <Text className="network-container-muted" muted size="small">To</Text>
            <Text className="network-container-name">
              {chainHelper.getChainName(toChain)}
            </Text>
          </div>
          <div className="network-container-right">
            <img
              className={classNames(toChain, 'network-container-icon')}
              src={getIconSource(toChain, theme)}
              alt="to network"
            />
          </div>
        </Box>
      </Row>
      <Row>
        <Box className="token-selector-container" density={1} depth={1}>
          <Row depth={1}>
            <div className={classNames('token-selector', { disabled: !walletConnected || notSupportedYet })} onClick={onOpenTokenSearcher}>
              <img
                className="token-selector-token-icon"
                src={selectedToken?.erc20?.logoURI ? selectedToken.erc20.logoURI : defaultTokenIcon}
                alt="selected token icon"
              />
              <Text className="token-selector-token-name" size="small">
                {selectedToken?.erc20?.symbol ? selectedToken.erc20.symbol : 'Select Token'}
              </Text>
              <IconButton size="small" disabled={!walletConnected || notSupportedYet }>
                <ArrowNoTailIcon/>
              </IconButton>
            </div>
            {selectedToken !== undefined
              ? (
              <div className="token-selector-max-button" onClick={onClickMax}>
                <Text size="tiny">Max</Text>
              </div>
                )
              : (<></>)}
            <input
              className="token-selector-token-amount-input"
              value={amount}
              onChange={onUpdateAmount}
              inputMode="decimal"
              autoComplete="off"
              autoCorrect="off"
              placeholder="0.0"
              min="0"
              minLength={1}
              maxLength={79}
              pattern="^[0-9]*[.,]?[0-9]*$"
              disabled={selectedToken === undefined || !hasTokenBalance}
            />
          </Row>
          <Row depth={1}>
            {selectedToken !== undefined
              ? (
              <>
                <Text muted size="tiny">Balance:&nbsp;</Text>
                <Text size="tiny">{`${tokenBalance} ${selectedToken.erc20?.symbol}`}</Text>
              </>
                )
              : (<></>)}
          </Row>
        </Box>
      </Row>
      <Row>
        <UnsupportedWarning />
      </Row>
      <Row>
        <Button
          className={classNames('transfer-button')}
          type="primary"
          disabled={walletConnected === false || hasAmount === false || isEnough === false}
          onClick={onOpenTxConfirm}
        >
          {getButtonText(walletConnected, hasAmount, tokenSelected, isEnough, notSupportedYet)}
        </Button>
      </Row>
      <TokenSearchDialog
        open={tokenSearcherOpened}
        fromChain={fromChain}
        toChain={toChain}
        fromAddress={gravityBridgeAccount?.address}
        close={onCloseTokenSearcher}
        select={onSelectToken}
      />
      <TxConfirmDialog
        open={txConfirmOpened}
        fromChain={fromChain}
        toChain={toChain}
        token={selectedToken}
        amount={amount}
        close={onCloseTxConfirm}
        confirm={onConfirm}
      />
      <TxBroadcastingDialog
        open={txBroadcastingOpened}
        toChain={toChain}
        token={selectedToken}
        amount={amount}
      />
    </Box>
  );
};

function getIconSource (network: SupportedChain, theme: ThemeType): string {
  return network === SupportedChain.Eth || network === SupportedChain.Goerli
    ? theme === ThemeType.Dark
      ? ethLightIcon
      : ethDarkIcon
    : theme === ThemeType.Dark
      ? gravityBridgeDarkIcon
      : gravityBridgeLightIcon;
}

function getButtonText (walletConnected: boolean, hasAmount: boolean, tokenSelected: boolean, isEnough: boolean, notSupportedYet: boolean): string {
  if (notSupportedYet === true) {
    return 'Support Soon!';
  }

  if (walletConnected === false) {
    return 'Connect Wallet';
  }

  if (tokenSelected === false) {
    return 'Please Select Token';
  }

  if (hasAmount === false) {
    return 'Please Input Transfer Amount';
  }

  if (isEnough === false) {
    return 'Insufficient Balance';
  }

  return 'Transfer';
}

export default TransferBox;
