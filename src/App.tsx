import './App.css';

import chainInfo from 'constants/keplr-chain-info';
import dotenv from 'dotenv';
import React, { useCallback, useEffect, useState } from 'react';
import cosmosTxService from 'services/cosmos-tx-service';
import gravityBridgeMessageService from 'services/gravity-bridge-message-service';
import keplrService from 'services/keplr-service';

import logo from './logo.svg';

dotenv.config();

const GRAVITY_BRIDGE_ADDRESS = 'cosmos1ncefgrzdd7c35ca3y44lv2j6xrm2e43ufxtqsk';
const ETH_ADDRESS = '0x9a0a46467819B562753933a75e5DF61133448836';
const TOKEN_CONTACT_ADDRESS = {
  MAX: '0xD7600ae27C99988A6CD360234062b540F88ECA43',
  E2H: '0x7580bFE88Dd3d07947908FAE12d95872a260F2D8',
  BYE: '0xD50c0953a99325d01cca655E57070F1be4983b6b',
  WEENUS: '0xaFF4481D10270F50f203E0763e2597776068CBc5'
};

// const ETH_CHAIN_ID = process.env.REACT_APP_ETH_CHAIN_ID;

async function sendMessage (): Promise<void> {
  await keplrService.suggestExperimentalChain(chainInfo.gravityBridge);
  const account = await keplrService.getPublicKey(chainInfo.gravityBridge.chainId);
  const message = gravityBridgeMessageService.createSendToEthereumMessage(
    GRAVITY_BRIDGE_ADDRESS,
    ETH_ADDRESS,
    { contract: TOKEN_CONTACT_ADDRESS.WEENUS, amount: '10000000000' },
    { contract: TOKEN_CONTACT_ADDRESS.WEENUS, amount: '10000000000' }
  );

  const txBody = cosmosTxService.createTxBody([message]);
  console.log(txBody);
}

function App () {
  useEffect(() => {
    sendMessage();
  }, []);

  // const sendCallback = useCallback(() => {
  //   if (connectedAddress) {
  //     // web3Service.deployERC20(connectedAddress, 'weenus', 'WEENUS', 'WNS', 18).then(console.log);
  //     web3Service.sendToCosmos(connectedAddress, TOKEN_CONTACT_ADDRESS.WEENUS, GRAVITY_BRIDGE_ADDRESS, '10')
  //       .then(console.log);
  //   }
  // }, [connectedAddress]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {/* <button onClick={sendCallback}>
          Send!
        </button> */}
      </header>
    </div>
  );
}

export default App;
