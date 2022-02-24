import FailToast from 'components/Toast/FailToast';
import TxFailToast from 'components/Toast/TxFailToast';
import TxSuccessToast from 'components/Toast/TxSuccessToast';
import FailIcon from 'images/fail-icon.png';
import SuccessIcon from 'images/success-icon.png';
import React from 'react';
import { toast } from 'react-toastify';
import { IToken, SupportedChain } from 'types';

function showTxSuccessToast (token: IToken, amount: string, txHash: string, fromChain: SupportedChain, toChain: SupportedChain): void {
  toast(
    <TxSuccessToast token={token} amount={amount} txHash={txHash} fromChain={fromChain} toChain={toChain}/>,
    { icon: () => <img src={SuccessIcon} alt="success" className="toast-icon"/> }
  );
}

function showTxFailToast (token: IToken, amount: string, toChain: SupportedChain, errorMessage?: string): void {
  toast(
    <TxFailToast token={token} amount={amount} toChain={toChain} errorMessage={errorMessage}/>,
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
