import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import React, { useEffect } from 'react';

import Footer from 'components/Footer';
import Header from 'components/Header';
import { SupportedEthChain } from 'types';
import { ToastContainer } from 'react-toastify';
import TransferBox from 'components/TransferBox';
import classNames from 'classnames';
import cosmosWalletManager from 'services/cosmos-wallet/cosmos-wallet-manager';
import dotenv from 'dotenv';
import ethWalletManager from 'services/eth-wallet/eth-wallet-manager';
import { initGA } from 'services/ga';
import useTheme from 'hooks/use-theme';

dotenv.config();

const App: React.FC = () => {
  const theme = useTheme();
  useEffect(() => {
    cosmosWalletManager.init();
    ethWalletManager.init(SupportedEthChain.Eth);
  }, []);

  useEffect(() => {
    initGA();
    window.location.href = 'https://bridge.blockscape.network';
  }, []);

  return (
    <div className={classNames('App', theme)}>
      <Header theme={theme}/>
      <div className="container">
        <TransferBox theme={theme}/>
        <p className="mobile-guide-container">
          spacestation.zone is currently optimized<br/>
          for web view only - please access<br/>
          through a <span className="mobile-guide-accent">desktop/laptop.</span><br/>
        </p>
      </div>
      <Footer/>
      <ToastContainer position="top-right" hideProgressBar={true} theme={theme} />
    </div>
  );
};

export default App;
