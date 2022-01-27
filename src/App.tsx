import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import classNames from 'classnames';
import Header from 'components/Header';
import Footer from 'components/Footer';
import TransferBox from 'components/TransferBox';
import dotenv from 'dotenv';
import useTheme from 'hooks/use-theme';
import React from 'react';
import { ToastContainer } from 'react-toastify';

dotenv.config();

export type erc20TokenInfo = {
  chainId: number,
  address: string,
  name: string,
  symbol: string,
  decimals: number,
  logoURI: string
}

const App: React.FC = () => {
  const theme = useTheme();

  return (
    <div className={classNames('App', theme)}>
      <Header/>
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
