import { AminoMsg, AminoSignResponse, StdFee, StdSignDoc, makeSignDoc } from '@cosmjs/amino';
import { cosmos, google } from 'constants/cosmos-v0.44.5';

import { DirectSignResponse } from '@cosmjs/proto-signing';
import Long from 'long';
import { SupportedCosmosChain } from 'types';
import _ from 'lodash';

function createTxBody (messages: google.protobuf.IAny[], memo: string): cosmos.tx.v1beta1.TxBody {
  return new cosmos.tx.v1beta1.TxBody({ messages, memo });
}

function getAuthInfo (
  publicKey: Uint8Array,
  sequence: Long,
  feeDenom: string,
  feeAmount: string,
  gasLimit: Long,
  mode: cosmos.tx.signing.v1beta1.SignMode,
  chain: SupportedCosmosChain
): cosmos.tx.v1beta1.AuthInfo {
  const publicKeyProto = new cosmos.crypto.secp256k1.PubKey({ key: publicKey });
  let typeUrl = '/cosmos.crypto.secp256k1.PubKey';
  if (chain === SupportedCosmosChain.Evmos) {
    typeUrl = '/ethermint.crypto.v1.ethsecp256k1.PubKey';
  }
  const signerInfo = new cosmos.tx.v1beta1.SignerInfo({
    public_key: new google.protobuf.Any({
      type_url: typeUrl,
      value: cosmos.crypto.secp256k1.PubKey.encode(publicKeyProto).finish()
    }),
    mode_info: { single: { mode } },
    sequence
  });

  const fee = new cosmos.tx.v1beta1.Fee({
    amount: [{
      denom: feeDenom,
      amount: feeAmount
    }],
    gas_limit: gasLimit
  });

  return new cosmos.tx.v1beta1.AuthInfo({ signer_infos: [signerInfo], fee });
}

function getSignDoc (
  chainId: string,
  txBody: cosmos.tx.v1beta1.ITxBody,
  authInfo: cosmos.tx.v1beta1.IAuthInfo,
  accountNumber: Long
): cosmos.tx.v1beta1.SignDoc {
  const bodyBytes = cosmos.tx.v1beta1.TxBody.encode(txBody).finish();
  const authInfoBytes = cosmos.tx.v1beta1.AuthInfo.encode(authInfo).finish();
  const signDoc = new cosmos.tx.v1beta1.SignDoc({
    chain_id: chainId,
    body_bytes: bodyBytes,
    auth_info_bytes: authInfoBytes,
    account_number: accountNumber
  });
  return signDoc;
}

function createTxRawBytes (directSignResponse: DirectSignResponse): Uint8Array {
  const _signature = Buffer.from(directSignResponse.signature.signature, 'base64');
  const txRaw = new cosmos.tx.v1beta1.TxRaw({
    body_bytes: directSignResponse.signed.bodyBytes,
    auth_info_bytes: directSignResponse.signed.authInfoBytes,
    signatures: [_signature]
  });
  return cosmos.tx.v1beta1.TxRaw.encode(txRaw).finish();
}

function getAminoSignDoc (
  chainId: string,
  accountNumber: string,
  sequence: string,
  feeDenom: string,
  feeAmount: string,
  gas: string,
  messages: AminoMsg[],
  memo: string
): StdSignDoc {
  const fee: StdFee = {
    amount: [
      { amount: feeAmount, denom: feeDenom }
    ],
    gas
  };
  return makeSignDoc(messages, fee, chainId, memo, accountNumber, sequence);
}

function createAminoTxRawBytes (aminoSignResponse: AminoSignResponse, protoMessages: google.protobuf.IAny[]): Uint8Array {
  const _signature = Buffer.from(aminoSignResponse.signature.signature, 'base64');
  const memo = aminoSignResponse.signed.memo;
  const txBody = createTxBody(protoMessages, memo);
  const txBodyBytes = cosmos.tx.v1beta1.TxBody.encode(txBody).finish();
  const authInfoBytes = getAminoAuthInfo(aminoSignResponse);
  const txRaw = new cosmos.tx.v1beta1.TxRaw({
    body_bytes: txBodyBytes,
    auth_info_bytes: authInfoBytes,
    signatures: [_signature]
  });
  return cosmos.tx.v1beta1.TxRaw.encode(txRaw).finish();
}

function getAminoAuthInfo (aminoSignResponse: AminoSignResponse): Uint8Array {
  const signerInfo = getAminoSignerInfo(aminoSignResponse);
  const signedFee = aminoSignResponse.signed.fee;
  const _amount = _.map(signedFee.amount, (coin) => new cosmos.base.v1beta1.Coin({ amount: coin.amount, denom: coin.denom }));

  const fee = new cosmos.tx.v1beta1.Fee({
    amount: _amount,
    gas_limit: new Long(_.toNumber(signedFee.gas))
  });

  const authInfo = new cosmos.tx.v1beta1.AuthInfo({ signer_infos: [signerInfo], fee });
  return cosmos.tx.v1beta1.AuthInfo.encode(authInfo).finish();
}

function getAminoSignerInfo (aminoSignResponse: AminoSignResponse): cosmos.tx.v1beta1.SignerInfo {
  const publicKey = getAminoPubKey(aminoSignResponse);

  return new cosmos.tx.v1beta1.SignerInfo({
    public_key: new google.protobuf.Any({
      type_url: '/cosmos.crypto.secp256k1.PubKey',
      value: publicKey
    }),
    mode_info: {
      single: {
        mode: cosmos.tx.signing.v1beta1.SignMode.SIGN_MODE_LEGACY_AMINO_JSON
      }
    },
    sequence: new Long(_.toNumber(aminoSignResponse.signed.sequence))
  });
}

function getAminoPubKey (aminoSignResponse: AminoSignResponse): Uint8Array {
  const _key = Buffer.from(aminoSignResponse.signature.pub_key.value, 'base64');
  const publicKey = new cosmos.crypto.secp256k1.PubKey({ key: _key });
  return cosmos.crypto.secp256k1.PubKey.encode(publicKey).finish();
}

export default {
  createTxBody,
  getSignDoc,
  createTxRawBytes,
  getAminoSignDoc,
  getAuthInfo,
  createAminoTxRawBytes
};
