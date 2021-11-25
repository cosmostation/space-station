import { cosmos, google } from 'constants/cosmos-v0.44.2';

export interface IERC20Token {
  contract?: (string | null);
  amount?: (string | null);
}

function createTxBody (messages: google.protobuf.IAny[], memo: string = '') {
  return new cosmos.tx.v1beta1.TxBody({ messages, memo });
}

function getAuthInfo (publicKey: Uint8Array, sequence: Long, feeAmount: string, gasLimit: Long, mode: cosmos.tx.signing.v1beta1.SignMode) {
  const publicKeyProto = new cosmos.crypto.secp256k1.PubKey({ key: publicKey });

  const signerInfo = new cosmos.tx.v1beta1.SignerInfo({
    public_key: new google.protobuf.Any({
      type_url: '/cosmos.crypto.secp256k1.PubKey',
      value: cosmos.crypto.secp256k1.PubKey.encode(publicKeyProto).finish(),
    }),
    mode_info: { single: { mode } },
    sequence,
  });

  const fee = new cosmos.tx.v1beta1.Fee({
    amount: [{ denom: 'ugraviton', amount: feeAmount }],
    gas_limit: gasLimit,
  });

  return new cosmos.tx.v1beta1.AuthInfo({ signer_infos: [signerInfo], fee });
}

function createTxRawBytes (txBody: cosmos.tx.v1beta1.ITxBody, authInfo: cosmos.tx.v1beta1.IAuthInfo, signature: Uint8Array): Uint8Array {
  const txBodyBytes = cosmos.tx.v1beta1.TxBody.encode(txBody).finish();
  const authInfoBytes = cosmos.tx.v1beta1.AuthInfo.encode(authInfo).finish();
  const txRaw = new cosmos.tx.v1beta1.TxRaw({
    body_bytes: txBodyBytes,
    auth_info_bytes: authInfoBytes,
    signatures: [signature],
  });
  return cosmos.tx.v1beta1.TxRaw.encode(txRaw).finish();
}

export default {
  createTxBody,
  getAuthInfo,
  createTxRawBytes,
};
