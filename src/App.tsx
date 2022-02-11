import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import classNames from 'classnames';
import Footer from 'components/Footer';
import Header from 'components/Header';
import TransferBox from 'components/TransferBox';
import dotenv from 'dotenv';
import useTheme from 'hooks/use-theme';
import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import cosmosWalletManager from 'services/cosmos-wallet/cosmos-wallet-manager';
import ethWalletManager from 'services/eth-wallet/eth-wallet-manager';
import { SupportedChain } from 'types';

dotenv.config();

const App: React.FC = () => {
  const theme = useTheme();
  useEffect(() => {
    cosmosWalletManager.init();
    ethWalletManager.init();
  }, []);
  const ethChain = SupportedChain.Goerli;

  return (
    <div className={classNames('App', theme)}>
      <Header theme={theme} ethChain={ethChain} />
      <div className="container">
        <TransferBox theme={theme} ethChain={ethChain} />
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
