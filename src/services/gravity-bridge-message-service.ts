import { google, gravity } from 'constants/gravity-bridge-main';

export interface IERC20Token {
  contract?: (string | null);
  amount?: (string | null);
}

function createSendToEthereumMessage (sender: string, ethAddress: string, erc20Token: IERC20Token, erc20Fee: IERC20Token) {
  const sendMessage = new gravity.v1.SendToEthereum({
    sender,
    ethereum_recipient: ethAddress,
    erc20_token: erc20Token,
    erc20_fee: erc20Fee
  });

  return new google.protobuf.Any({
		type_url: '/gravity.v1.SendToEthereum',
    value: gravity.v1.SendToEthereum.encode(sendMessage).finish()
	});
}

export default {
  createSendToEthereumMessage,
};
