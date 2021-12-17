import { cosmos } from 'constants/gravity-main';
import chainInfo from 'constants/keplr-chain-info';
import _ from 'lodash';
import Long from 'long';
import React, { useCallback, useState } from 'react';
import cosmosTxService from 'services/cosmos-tx-service';
import gravityBridgeLcdService from 'services/gravity-bridge-lcd-service';
import gravityBridgeMessageService from 'services/gravity-bridge-message-service';
import keplrService from 'services/keplr-wallet';

async function delegate (amount: number): Promise<void> {
  await keplrService.suggestExperimentalChain(chainInfo.gravityBridge);
  const account = await keplrService.getAccount(chainInfo.gravityBridge.chainId);
  const accountInfo = await gravityBridgeLcdService.getAccountInfo(account.address);
  const message = gravityBridgeMessageService.createDelegateMessage(
    account.address,
    'gravityvaloper18ytfr4s8lfccy048zl00y3akujxqvq75pzczg5',
    amount
  );
  const txBody = cosmosTxService.createTxBody([message]);

  const chainId = chainInfo.gravityBridge.chainId;
  const accountNumber = _.get(accountInfo, 'base_vesting_account.base_account.account_number');
  const sequence = new Long(_.get(accountInfo, 'base_vesting_account.base_account.sequence'));
  const fee = '0';
  const gasLimit = new Long(200000);
  const mode = cosmos.tx.signing.v1beta1.SignMode.SIGN_MODE_DIRECT;

  const authInfo = cosmosTxService.getAuthInfo(
    account.pubKey,
    sequence,
    fee,
    gasLimit,
    mode,
  );

  const signDoc = cosmosTxService.getSignDoc(
    chainId,
    txBody,
    authInfo,
    new Long(_.toNumber(accountNumber))
  );

  const signature = await keplrService.sign(chainId, account.address, signDoc);
  const txBytes = cosmosTxService.createTxRawBytes(signature);
  gravityBridgeLcdService.broadcastProtoTx(txBytes, cosmos.tx.v1beta1.BroadcastMode.BROADCAST_MODE_SYNC);
}

async function withdrawReward () {
  await keplrService.suggestExperimentalChain(chainInfo.gravityBridge);
  const account = await keplrService.getAccount(chainInfo.gravityBridge.chainId);
  const accountInfo = await gravityBridgeLcdService.getAccountInfo(account.address);
  const message = gravityBridgeMessageService.createWithdrawDelegatorRewardMessage(
    account.address,
    'gravityvaloper18ytfr4s8lfccy048zl00y3akujxqvq75pzczg5',
  );
  const txBody = cosmosTxService.createTxBody([message]);

  const chainId = chainInfo.gravityBridge.chainId;
  const accountNumber = _.get(accountInfo, 'base_vesting_account.base_account.account_number');
  const sequence = new Long(_.get(accountInfo, 'base_vesting_account.base_account.sequence'));
  const fee = '0';
  const gasLimit = new Long(200000);
  const mode = cosmos.tx.signing.v1beta1.SignMode.SIGN_MODE_DIRECT;

  const authInfo = cosmosTxService.getAuthInfo(
    account.pubKey,
    sequence,
    fee,
    gasLimit,
    mode,
  );

  const signDoc = cosmosTxService.getSignDoc(
    chainId,
    txBody,
    authInfo,
    new Long(_.toNumber(accountNumber))
  );

  const signature = await keplrService.sign(chainId, account.address, signDoc);
  const txBytes = cosmosTxService.createTxRawBytes(signature);
  gravityBridgeLcdService.broadcastProtoTx(txBytes, cosmos.tx.v1beta1.BroadcastMode.BROADCAST_MODE_SYNC);
}

const Delegator: React.FC<any> = () => {
  const [amount, setAmount] = useState<number>(0);
  const onChangeAmount = useCallback((event: any) => {
    const value = _.get(event, 'target.value');
    if (value) {
      setAmount(_.toNumber(value));
    } else {
      setAmount(0);
    }
  }, [setAmount]);

  const onDelegate = useCallback(() => {
    delegate(amount);
  }, [amount]);

  const onWithdraw = useCallback(() => {
    withdrawReward();
  }, []);

  return (
    <div>
      <label>Delegation Amount:</label>
      <input type="text" onChange={onChangeAmount} />
      <button onClick={onDelegate}>Delegate</button>
      <br/>
      <label>Withdraw Reward:</label>
      <button onClick={onWithdraw}>Withdraw</button>
    </div>
  );
}

export default Delegator;

