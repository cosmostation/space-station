import './TransferBox.css';

import { TokenInfo } from '@uniswap/token-lists';
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
import dotenv from 'dotenv';
import useEthAccount from 'hooks/use-eth-account';
import useEthErc20TokenBalance from 'hooks/use-eth-erc20-token-balance';
import useGravityBridgeAccount from 'hooks/use-gravity-bridge-account';
import useGravityBridgeErc20TokenBalance from 'hooks/use-gravity-bridge-erc20-token-balance';
import arrowIcon from 'images/arrow-icon.png';
import { ReactComponent as ArrowNoTailIcon } from 'images/arrow-no-tail.svg';
import defaultTokenIcon from 'images/default-token-icon.png';
import ethIcon from 'images/ethereum-icon.png';
import gravityBridgeIcon from 'images/gravity-bridge-icon.png';
import _ from 'lodash';
import React, { useCallback, useState } from 'react';
import ethWalletManager from 'services/eth-wallet-manager';
import numberService from 'services/number-service';
import toastService from 'services/toast-service';
import { SupportedNetwork } from 'types';

dotenv.config();

const ETH_CHAIN_ID = process.env.REACT_APP_ETH_CHAIN_ID ? process.env.REACT_APP_ETH_CHAIN_ID : '0x1';

const TransferBox: React.FC = () => {
  const [fromNetwork, setFromNetwork] = useState<SupportedNetwork>(SupportedNetwork.Eth);
  const [toNetwork, setToNetwork] = useState<SupportedNetwork>(SupportedNetwork.GravityBridge);
  const [selectedToken, setSelectedToken] = useState<TokenInfo>();
  const [amount, setAmount] = useState<string>('');
  const [tokenSearcherOpened, setTokenSearcherOpened] = useState<boolean>(false);
  const [txConfirmOpened, setTxConfirmOpened] = useState<boolean>(false);
  const [txBroadcastingOpened, setTxBroadcastingOpened] = useState<boolean>(false);
  const [erc20BalanceUpdateCounter, setErc20BalanceUpdateCounter] = useState<number>(0);

  const gravityBridgeAccount = useGravityBridgeAccount();
  const ethAccount = useEthAccount();
  const ethErc20TokenBalance = useEthErc20TokenBalance(ethAccount?.address, selectedToken);
  const gravityBridgeErc20TokenBalance = useGravityBridgeErc20TokenBalance(gravityBridgeAccount?.address, selectedToken);
  const tokenBalance = SupportedNetwork.Eth ? ethErc20TokenBalance : gravityBridgeErc20TokenBalance;

  const gravityBridgeWalletConnected: boolean = gravityBridgeAccount !== undefined;
  const ethWalletConnected: boolean = ethAccount !== undefined;
  const walletConnected: boolean = gravityBridgeWalletConnected && ethWalletConnected;
  const hasAmount: boolean = !_.isEmpty(amount) && new Big(amount).gt('0');
  const hasTokenBalance: boolean = !_.isEmpty(tokenBalance) && new Big(tokenBalance).gt('0');

  const toggleDirection = useCallback(() => {
    if (fromNetwork === SupportedNetwork.Eth) {
      setToNetwork(SupportedNetwork.Eth);
      setFromNetwork(SupportedNetwork.GravityBridge);
    } else {
      setToNetwork(SupportedNetwork.GravityBridge);
      setFromNetwork(SupportedNetwork.Eth);
    }
  }, [fromNetwork, setFromNetwork, setToNetwork]);

  const onClickMax = useCallback(() => {
    setAmount(tokenBalance);
  }, [tokenBalance, setAmount]);

  const onUpdateAmount = useCallback((event) => {
    const value = _.get(event, 'target.value', '');
    if (/^[0-9]*[.,]?[0-9]*$/.test(value)) {
      setAmount(value);
    }
  }, [setAmount]);

  const onOpenTokenSearcher = useCallback(() => {
    if (walletConnected) {
      setTokenSearcherOpened(true);
    }
  }, [setTokenSearcherOpened, walletConnected]);

  const onSelectToken = useCallback((token: TokenInfo) => {
    setSelectedToken(token);
  }, [setSelectedToken]);

  const onCloseTokenSearcher = useCallback(() => {
    setTokenSearcherOpened(false);
  }, [setTokenSearcherOpened]);

  const onOpenTxConfirm = useCallback(() => {
    setTxConfirmOpened(true);
  }, [setTxConfirmOpened]);

  const onCloseTxConfirm = useCallback(() => {
    setTxConfirmOpened(false);
  }, [setTxConfirmOpened]);

  const onConfirm = useCallback(() => {
    setTxConfirmOpened(false);
    setTxBroadcastingOpened(true);
    if (toNetwork === SupportedNetwork.GravityBridge && ethAccount && selectedToken) {
      ethWalletManager.sendToCosmos(
        ethAccount.address,
        selectedToken,
        numberService.convertWithoutDecimal(amount, selectedToken.decimals)
      ).then((txHash) => {
        toastService.showTxSuccessToast(selectedToken, amount, txHash, toNetwork);
        setErc20BalanceUpdateCounter(erc20BalanceUpdateCounter + 1);
      }).catch((error) => {
        toastService.showTxFailToast(selectedToken, amount, toNetwork, _.get(error, 'message'));
      }).finally(() => setTxBroadcastingOpened(false));
    }
  }, [ethAccount, selectedToken, amount, toNetwork, setTxBroadcastingOpened, erc20BalanceUpdateCounter]);

  return (
    <Box className="TransferBox">
      <Text className="transfer-box-heading" size="big">Transfer</Text>
      <Row className="space-between">
        <Box className={classNames(fromNetwork, 'network-container')} density={1} depth={1}>
          <div className="network-container-left">
            <Text className="network-container-muted" muted size="small">From</Text>
            <Text className="network-container-name">
              {fromNetwork === SupportedNetwork.Eth ? 'Ethereum' : 'Gravity Bridge'}
            </Text>
          </div>
          <div className="network-container-right">
            <img
              className={classNames(fromNetwork, 'network-container-icon')}
              src={fromNetwork === 'eth' ? ethIcon : gravityBridgeIcon}
              alt="from network"
            />
          </div>
        </Box>
        <IconButton onClick={toggleDirection} type="primary">
          <img src={arrowIcon} alt="toggle"/>
        </IconButton>
        <Box className={classNames(toNetwork, 'network-container')} density={1} depth={1}>
          <div className="network-container-left">
            <Text className="network-container-muted" muted size="small">To</Text>
            <Text className="network-container-name">
              {toNetwork === SupportedNetwork.Eth ? 'Ethereum' : 'Gravity Bridge'}
            </Text>
          </div>
          <div className="network-container-right">
            <img
              className={classNames(toNetwork, 'network-container-icon')}
              src={toNetwork === SupportedNetwork.Eth ? ethIcon : gravityBridgeIcon}
              alt="to network"
            />
          </div>
        </Box>
      </Row>
      <Row>
        <Box className="token-selector-container" density={1} depth={1}>
          <Row depth={1}>
            <div className={classNames('token-selector', { disabled: !walletConnected })} onClick={onOpenTokenSearcher}>
              <img
                className="token-selector-token-icon"
                src={selectedToken?.logoURI ? selectedToken.logoURI : defaultTokenIcon}
                alt="selected token icon"
              />
              <Text className="token-selector-token-name" size="small">
                {selectedToken?.symbol ? selectedToken.symbol : 'Select Token'}
              </Text>
              <IconButton size="small" disabled={!walletConnected}>
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
                <Text size="tiny">{`${tokenBalance} ${selectedToken.symbol}`}</Text>
              </>
                )
              : (<></>)}
          </Row>
        </Box>
      </Row>
      <Row>
        <Button
          className={classNames('transfer-button')}
          type="primary"
          disabled={walletConnected === false || hasAmount === false}
          onClick={onOpenTxConfirm}
        >
          {walletConnected === false ? 'Connect Wallet' : 'Transfer'}
        </Button>
      </Row>
      <TokenSearchDialog
        open={tokenSearcherOpened}
        fromNetwork={fromNetwork}
        gravityBridgeAccount={gravityBridgeAccount?.address}
        ethChainId={ETH_CHAIN_ID}
        close={onCloseTokenSearcher}
        select={onSelectToken}
      />
      <TxConfirmDialog
        open={txConfirmOpened}
        fromNetwork={fromNetwork}
        toNetwork={toNetwork}
        token={selectedToken}
        amount={amount}
        close={onCloseTxConfirm}
        confirm={onConfirm}
      />
      <TxBroadcastingDialog
        open={txBroadcastingOpened}
        toNetwork={toNetwork}
        token={selectedToken}
        amount={amount}
      />
    </Box>
  );
};

export default TransferBox;
