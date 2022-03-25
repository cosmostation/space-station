import './TransferBox.css';

import Big from 'big.js';
import classNames from 'classnames';
import Box from 'components/Box';
import Button from 'components/Button';
import ChainSelector from 'components/ChainSelector';
import FeeSelector from 'components/FeeSelector';
import IconButton from 'components/IconButton';
import Row from 'components/Row';
import Text from 'components/Text';
import TokenSearchDialog from 'components/TokenSearchDialog';
import TxBroadcastingDialog from 'components/TxBroadcastingDialog';
import TxConfirmDialog from 'components/TxConfirmDialog';
import dotenv from 'dotenv';
import useAccount from 'hooks/use-account';
import useTokenBalance from 'hooks/use-token-balance';
import { ReactComponent as ArrowNoTailIcon } from 'images/arrow-no-tail.svg';
import { ReactComponent as DarkThemeIcon } from 'images/dark-theme-icon.svg';
import defaultTokenIcon from 'images/default-token-icon.png';
import { ReactComponent as LightThemeIcon } from 'images/light-theme-icon.svg';
import _ from 'lodash';
import React, { useCallback, useState } from 'react';
import transferer from 'services/transfer/transferer';
import loggerFactory from 'services/util/logger-factory';
import toastService from 'services/util/toast-service';
import themeStore from 'stores/theme-store';
import { BridgeFee, IToken, ITransfer, SupportedChain, ThemeType } from 'types';

const logger = loggerFactory.getLogger('[TransferBox]');
const ROUND = 6;
type TransferBoxProps = {
  theme: ThemeType,
}

dotenv.config();

const TransferBox: React.FC<TransferBoxProps> = ({ theme }) => {
  const [fromChain, setFromChain] = useState<SupportedChain>(SupportedChain.Eth);
  const [toChain, setToChain] = useState<SupportedChain>(SupportedChain.GravityBridge);
  const [selectedToken, setSelectedToken] = useState<IToken>();
  const [amount, setAmount] = useState<string>('');
  const [tokenSearcherOpened, setTokenSearcherOpened] = useState<boolean>(false);
  const [txConfirmOpened, setTxConfirmOpened] = useState<boolean>(false);
  const [txBroadcastingOpened, setTxBroadcastingOpened] = useState<boolean>(false);
  const [balanceUpdateCounter, setBalanceUpdateCounter] = useState<number>(0);
  const [bridgeFee, setBridgeFee] = useState<BridgeFee>();

  const fromAccount = useAccount(fromChain);
  const toAccount = useAccount(toChain);
  const tokenBalance = useTokenBalance(fromChain, fromAccount?.address, selectedToken, balanceUpdateCounter);

  const needBridgeFee = selectedToken ? transferer.needBridgeFee(fromChain, toChain) : false;
  const noBridgeFee = needBridgeFee && _.isNil(bridgeFee);

  const walletConnected: boolean = fromAccount !== undefined && toAccount !== undefined;
  const hasAmount: boolean = Big(amount || '0').gt('0');
  const tokenSelected: boolean = selectedToken !== undefined;
  const hasTokenBalance: boolean = Big(tokenBalance || '0').round(ROUND, Big.roundDown).gt('0');
  const isEnough: boolean = needBridgeFee
    ? Big(tokenBalance || '0').gte(Big(amount || '0').add(bridgeFee?.amount || '0'))
    : Big(tokenBalance || '0').gte(Big(amount || '0'));
  const selectedTokenIcon: string = selectedToken !== undefined
    ? selectedToken.erc20?.logoURI || selectedToken.cosmos?.logoURI || defaultTokenIcon
    : defaultTokenIcon;
  const selectedTokenSymbol: string = selectedToken !== undefined
    ? selectedToken.erc20?.symbol || selectedToken.cosmos?.symbol || ''
    : '';

  const changeTheme = useCallback(() => {
    const currentTheme = themeStore.getCurrentTheme();
    const nextTheme = currentTheme === ThemeType.Dark ? ThemeType.Light : ThemeType.Dark;
    themeStore.changeTheme(nextTheme);
  }, []);

  const selectFromChain = useCallback((chain: SupportedChain) => {
    setFromChain(chain);
    setSelectedToken(undefined);
    setAmount('0');
  }, []);

  const selectToChain = useCallback((chain: SupportedChain) => {
    setToChain(chain);
    setSelectedToken(undefined);
    setAmount('0');
  }, []);

  const toggle = useCallback((fromChain: SupportedChain, toChain: SupportedChain) => {
    setFromChain(fromChain);
    setToChain(toChain);
    setSelectedToken(undefined);
    setAmount('0');
  }, []);

  const onClickMax = useCallback(() => {
    const _tokenBalance = Big(tokenBalance).round(ROUND, Big.roundDown);
    if (needBridgeFee && bridgeFee) {
      const _amount = _tokenBalance.sub(bridgeFee.amount).round(ROUND, Big.roundDown);
      _amount.gte(0)
        ? setAmount(_amount.toString())
        : setAmount('0');
    } else {
      setAmount(_tokenBalance.toString());
    }
  }, [needBridgeFee, bridgeFee, amount, tokenBalance]);

  const onUpdateAmount = useCallback((event) => {
    const amount = _.get(event, 'target.value', '');
    if (/^[0-9]+[.]?[0-9]*$/.test(amount)) {
      const [, decimals] = _.split(amount, '.');
      if (_.size(decimals) <= ROUND) {
        setAmount(amount);
      }
    }
  }, []);

  const onOpenTokenSearcher = useCallback(() => {
    if (walletConnected) {
      setTokenSearcherOpened(true);
    }
  }, [walletConnected]);

  const onSelectToken = useCallback((token: IToken) => {
    logger.info('Selected Token:', token);
    setSelectedToken(token);
    setBridgeFee(undefined);
    setAmount('');
  }, []);

  const onCloseTokenSearcher = useCallback(() => {
    setTokenSearcherOpened(false);
  }, []);

  const onSelectExtraFee = useCallback((fee: BridgeFee) => {
    logger.info('Extra Fee:', fee);
    setBridgeFee(fee);
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
    if (fromAccount && toAccount && selectedToken) {
      const transfer: ITransfer = {
        fromChain,
        toChain,
        fromAddress: fromAccount.address,
        toAddress: toAccount.address,
        token: selectedToken,
        amount,
        bridgeFee
      };
      transferer.transfer(transfer)
        .then((txHash) => {
          toastService.showTxSuccessToast(selectedToken, amount, txHash, fromChain, toChain);
          setSelectedToken(undefined);
          setAmount('0');
          setBalanceUpdateCounter(balanceUpdateCounter + 1);
        }).catch((error) => {
          toastService.showTxFailToast(selectedToken, amount, toChain, _.get(error, 'message'));
        }).finally(() => {
          setTxBroadcastingOpened(false);
        });
    }
  }, [fromChain, toChain, fromAccount, toAccount, selectedToken, amount, balanceUpdateCounter, bridgeFee]);

  return (
    <Box className="TransferBox">
      <Row className="space-between transfer-box-heading">
        <Text size="big">Transfer</Text>
        <IconButton onClick={changeTheme} size="big" className="theme-change-button">
          { theme === ThemeType.Dark
            ? <LightThemeIcon />
            : <DarkThemeIcon />
          }
        </IconButton>
      </Row>

      <Row className="space-between">
        <ChainSelector
          fromChain={fromChain}
          toChain={toChain}
          selectFromChain={selectFromChain}
          selectToChain={selectToChain}
          toggle={toggle}
        />
      </Row>
      <Row>
        <Box className="token-selector-container" density={1} depth={1}>
          <Row depth={1}>
            <div className={classNames('token-selector', { disabled: !walletConnected })} onClick={onOpenTokenSearcher}>
              <img
                className="token-selector-token-icon"
                src={selectedTokenIcon}
                alt="selected token icon"
              />
              <Text className="token-selector-token-name" size="small">
                {selectedTokenSymbol || 'Select Token'}
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
              pattern="^[0-9]+[.]?[0-9]*$"
              disabled={selectedToken === undefined || !hasTokenBalance}
            />
          </Row>
          <Row depth={1}>
            {selectedToken !== undefined
              ? (
              <>
                <Text muted size="tiny">Balance:&nbsp;</Text>
                <Text size="tiny">{`${Big(tokenBalance).round(ROUND, Big.roundDown)} ${selectedTokenSymbol}`}</Text>
              </>
                )
              : (<></>)}
          </Row>
        </Box>
      </Row>
      <Row>
        {needBridgeFee && selectedToken
          ? (<FeeSelector
              fromChain={fromChain}
              toChain={toChain}
              selectedToken={selectedToken}
              currency="usd"
              balance={tokenBalance}
              amount={amount}
              select={onSelectExtraFee}
              selectedFee={bridgeFee}
            />)
          : ''
        }
      </Row>
      <Row>
        <Button
          className={classNames('transfer-button')}
          type="primary"
          disabled={walletConnected === false || hasAmount === false || isEnough === false || noBridgeFee === true}
          onClick={onOpenTxConfirm}
        >
          {getButtonText(walletConnected, hasAmount, tokenSelected, isEnough, noBridgeFee)}
        </Button>
      </Row>
      { tokenSearcherOpened
        ? <TokenSearchDialog
            fromChain={fromChain}
            toChain={toChain}
            fromAddress={fromAccount?.address}
            close={onCloseTokenSearcher}
            select={onSelectToken}
          />
        : <></>
      }
      <TxConfirmDialog
        open={txConfirmOpened}
        fromChain={fromChain}
        toChain={toChain}
        token={selectedToken}
        amount={amount}
        bridgeFee={bridgeFee}
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

function getButtonText (
  walletConnected: boolean,
  hasAmount: boolean,
  tokenSelected: boolean,
  isEnough: boolean,
  needBridgeFee: boolean
): string {
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

  if (needBridgeFee === true) {
    return 'Please Select Fee!';
  }

  return 'Transfer';
}

export default TransferBox;
