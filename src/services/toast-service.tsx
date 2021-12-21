import { TokenInfo } from '@uniswap/token-lists';
import FailToast from 'components/Toast/FailToast';
import TxFailToast from 'components/Toast/TxFailToast';
import TxSuccessToast from 'components/Toast/TxSuccessToast';
import FailIcon from 'images/fail-icon.png';
import SuccessIcon from 'images/success-icon.png';
import React from 'react';
import { toast } from 'react-toastify';
import { SupportedNetwork } from 'types';

function showTxSuccessToast (tokenInfo: TokenInfo, amount: string, txHash: string, toNetwork: SupportedNetwork): void {
  toast(
    <TxSuccessToast tokenInfo={tokenInfo} amount={amount} txHash={txHash} toNetwork={toNetwork}/>,
    { icon: () => <img src={SuccessIcon} alt="success" className="toast-icon"/> }
  );
}

function showTxFailToast (tokenInfo: TokenInfo, amount: string, toNetwork: SupportedNetwork, errorMessage?: string): void {
  toast(
    <TxFailToast tokenInfo={tokenInfo} amount={amount} toNetwork={toNetwork} errorMessage={errorMessage}/>,
    { icon: () => <img src={FailIcon} alt="fail" className="toast-icon"/> }
  );
}

function showFailToast (heading: JSX.Element | JSX.Element[] | string, message?: JSX.Element | JSX.Element[] | string): void {
  toast(<FailToast heading={heading} message={message}/>, { icon: () => <img src={FailIcon} alt="fail" className="toast-icon"/> });
}

export default {
  showTxSuccessToast,
  showTxFailToast,
  showFailToast
};
