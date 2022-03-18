import { DirectSignResponse } from '@cosmjs/proto-signing';
import { cosmos, google } from 'constants/cosmos-v0.44.5';
import Long from 'long';

function createTxBody (messages: google.protobuf.IAny[], memo = ''): cosmos.tx.v1beta1.TxBody {
  return new cosmos.tx.v1beta1.TxBody({ messages, memo });
}

function getAuthInfo (
  publicKey: Uint8Array,
  sequence: Long,
  feeDenom: string,
  feeAmount: string,
  gasLimit: Long,
  mode: cosmos.tx.signing.v1beta1.SignMode
): cosmos.tx.v1beta1.AuthInfo {
  const publicKeyProto = new cosmos.crypto.secp256k1.PubKey({ key: publicKey });

  const signerInfo = new cosmos.tx.v1beta1.SignerInfo({
    public_key: new google.protobuf.Any({
      type_url: '/cosmos.crypto.secp256k1.PubKey',
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

export default {
  createTxBody,
  getAuthInfo,
  createTxRawBytes,
  getSignDoc
};
