import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import classNames from 'classnames';
import Header from 'components/Header';
import TransferBox from 'components/TransferBox';
import dotenv from 'dotenv';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import themeStore, { ThemeType } from 'stores/theme-store';

import Delegator from './Delegator';

dotenv.config();

export type erc20TokenInfo = {
  chainId: number,
  address: string,
  name: string,
  symbol: string,
  decimals: number,
  logoURI: string
}

function App () {
  const [theme, setTheme] = useState<ThemeType>();

  useEffect(() => {
    const subscription = themeStore.currentTheme$.subscribe(setTheme);
    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className={classNames('App', theme)}>
      <Header/>
      <div className="container">
        <TransferBox />
      </div>
      <ToastContainer position="top-right" hideProgressBar={true} theme={theme} autoClose={false} />
    </div>
  );
}

export default App;
