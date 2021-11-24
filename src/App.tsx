import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import keplrService from 'services/keplr-service';
import chainInfo from 'constants/keplr-chain-info';

function App () {
  useEffect(() => {
    keplrService.connect('cosmoshub-4')
      .then((connected) => {
        keplrService.suggestExperimentalChain(chainInfo.gravityBridge);
      });
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
