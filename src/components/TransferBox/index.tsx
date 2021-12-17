import './TransferBox.css';

import { TokenInfo } from '@uniswap/token-lists';
import Big from 'big.js';
import classNames from 'classnames';
import Box from 'components/Box';
import Button from 'components/Button';
import IconButton from 'components/IconButton';
import Row from 'components/Row';
import Text from 'components/Text';
import Toast from 'components/Toast';
import TokenSearchDialog from 'components/TokenSearchDialog';
import TxBroadcastingDialog from 'components/TxBroadcastingDialog';
import TxConfirmDialog from 'components/TxConfirmDialog';
import useEthAccount from 'hooks/use-eth-account';
import useGravityBridgeAccount from 'hooks/use-gravity-bridge-account';
import useTokenBalance from 'hooks/use-token-balance';
import arrowIcon from 'images/arrow-icon.png';
import defaultTokenIcon from 'images/default-token-icon.png';
import ethIcon from 'images/ethereum-icon.png';
import gravityBridgeIcon from 'images/gravity-bridge-icon.png';
import selectArrowIcon from 'images/select-arrow-icon.png';
import SuccessIcon from 'images/success-icon.png';
import _ from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import numberService from 'services/number-service';
import transferService from 'services/transfer-service';
import { SupportedNetwork } from 'types';


const TransferBox: React.FC = () => {
  const [fromNetwork, setFromNetwork] = useState<SupportedNetwork>(SupportedNetwork.Eth);
  const [toNetwork, setToNetwork] = useState<SupportedNetwork>(SupportedNetwork.GravityBridge);
  const [selectedToken, setSelectedToken] = useState<TokenInfo>();
  const [amount, setAmount] = useState<string>('');
  const [tokenSearcherOpened, setTokenSearcherOpened] = useState<boolean>(false);
  const [txConfirmOpened, setTxConfirmOpened] = useState<boolean>(false);
  const [txBroadcastingOpened, setTxBroadcastingOpened] = useState<boolean>(false);

  const gravityBridgeAccount = useGravityBridgeAccount();
  const ethAccount = useEthAccount();
  const tokenBalance = useTokenBalance(
    fromNetwork,
    fromNetwork === SupportedNetwork.Eth ? ethAccount?.address : gravityBridgeAccount?.address,
    selectedToken,
    18
  );

  const walletConnected: boolean = gravityBridgeAccount !== undefined && ethAccount !== undefined;
  const hasAmount: boolean = !_.isEmpty(amount) && new Big(amount).gt('0');

  const toggleDirection = useCallback(() => {
    if (fromNetwork === SupportedNetwork.Eth) {
      setToNetwork(SupportedNetwork.Eth);
      setFromNetwork(SupportedNetwork.GravityBridge);
    } else {
      setToNetwork(SupportedNetwork.GravityBridge);
      setFromNetwork(SupportedNetwork.Eth);
    }
  }, [fromNetwork, setFromNetwork, toNetwork, setToNetwork]);

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
    setTokenSearcherOpened(true);
  }, [setTokenSearcherOpened]);

  const onSelectToken = useCallback((token: TokenInfo) => {
    setSelectedToken(token);
  }, [setSelectedToken])

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
      transferService.transferToCosmos(
        ethAccount.address,
        selectedToken,
        numberService.convertWithoutDecimal(amount, selectedToken.decimals)
      ).then((txHash) => {
          console.log(txHash);
          Toast.showTxSuccessToast(selectedToken, amount, txHash, toNetwork);
        }).catch((error) => {
          console.error(error);
          Toast.showTxFailToast(selectedToken, amount, toNetwork, error.toString());
        }).finally(() => setTxBroadcastingOpened(false))
    }
  }, [ethAccount, selectedToken, amount, toNetwork, setTxBroadcastingOpened]);

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
            <div className="token-selector" onClick={onOpenTokenSearcher}>
              <img
                className="token-selector-token-icon"
                src={selectedToken?.logoURI ? selectedToken.logoURI : defaultTokenIcon}
                alt="selected token icon"
              />
              <Text className="token-selector-token-name" size="small">
                {selectedToken?.symbol ? selectedToken.symbol : 'Select Token'}
              </Text>
              <IconButton size="small">
                <img src={selectArrowIcon} alt="select button icon" />
              </IconButton>
            </div>
            {selectedToken !== undefined ? (
              <div className="token-selector-max-button" onClick={onClickMax}>
                <Text size="tiny">Max</Text>
              </div>
            ): (<></>)}
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
              disabled={selectedToken === undefined}
            />
          </Row>
          <Row depth={1}>
            {selectedToken !== undefined ? (
              <>
                <Text muted size="tiny">Balance:&nbsp;</Text>
                <Text size="tiny">{`${tokenBalance} ${selectedToken.symbol}`}</Text>
              </>
            ): (<></>)}
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
  )
}

export default TransferBox;
