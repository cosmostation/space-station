import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
// import keplrService from 'services/keplr-service';
import metaMaskService from 'services/meta-mask-service';
import dotenv from 'dotenv';

dotenv.config();

const ETH_CHAIN_ID = process.env.REACT_APP_ETH_CHAIN_ID;

function App () {
  useEffect(() => {
    console.log(ETH_CHAIN_ID);
    if (typeof ETH_CHAIN_ID === 'string') {
      metaMaskService.connect(ETH_CHAIN_ID)
        .then(() => metaMaskService.getAccountInfo())
        .then((address) => {
          if (typeof address === 'string') {
            return metaMaskService.getEthBalance(address);
          }
        })
        .then(console.log);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
