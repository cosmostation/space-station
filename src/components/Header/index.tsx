import './Header.css';

import IconButton from 'components/IconButton';
import useEthAccount from 'hooks/use-eth-account';
import useGravityBridgeAccount from 'hooks/use-gravity-bridge-account';
import DarkLogo from 'images/dark-logo.png';
import { ReactComponent as DarkThemeIcon } from 'images/dark-theme-icon.svg';
import keplrIcon from 'images/keplr-icon.png';
import LightLogo from 'images/light-logo.png';
import { ReactComponent as LightThemeIcon } from 'images/light-theme-icon.svg';
import metaMaskIcon from 'images/meta-mask-icon.png';
import _ from 'lodash';
import React, { useCallback } from 'react';
import Blockies from 'react-blockies';
import ethWalletManager from 'services/eth-wallet-manager';
import gravityBridgeWalletManager from 'services/gravity-bridge-wallet-manager';
import balanceService from 'services/number-service';
import toastService from 'services/toast-service';
import themeStore, { ThemeType } from 'stores/theme-store';
import { Account, MetaMaskPendingRequestError, NoEthWalletError } from 'types';

const Header: React.FC<any> = () => {
  const changeTheme = useCallback(() => {
    const currentTheme = themeStore.getCurrentTheme();
    const nextTheme = currentTheme === ThemeType.Dark ? ThemeType.Light : ThemeType.Dark;
    themeStore.changeTheme(nextTheme);
  }, []);

  const currentTheme = themeStore.getCurrentTheme();
  const gravityBridgeAccount = useGravityBridgeAccount();
  const ethAccount = useEthAccount();

  return (
    <div className="header">
      <div className="logo-container">
        <>
          { currentTheme === ThemeType.Dark
            ? <img src={DarkLogo} className="logo" alt="Gravity bridge logo"/>
            : <img src={LightLogo} className="logo" alt="Gravity bridge logo"/>
          }
        </>
      </div>
      <div className="buttons-container">
        <KelprConnectButton gravityBridgeAccount={gravityBridgeAccount} />
        <EthConnectButton ethAccount={ethAccount} />
        <IconButton onClick={changeTheme} size="big">
          { currentTheme === ThemeType.Dark
            ? <LightThemeIcon />
            : <DarkThemeIcon />
          }
        </IconButton>
      </div>
    </div>
  );
};

interface KeplrConnectionButtonProps {
  gravityBridgeAccount?: Account
}

const KelprConnectButton: React.FC<KeplrConnectionButtonProps> = (keplrConnectionButtonProps) => {
  const connect = useCallback(() => {
    gravityBridgeWalletManager.connect();
  }, []);

  const { gravityBridgeAccount } = keplrConnectionButtonProps;
  return (
    <>
      { gravityBridgeAccount
        ? (<button className="button connected-button">
            <div className="balance-container">
              <span>{balanceService.convertWithDecimal(gravityBridgeAccount.balance, 6)}GRAVITON</span>
            </div>
            <span className="connected-icon"></span>
            { shortenAddress(gravityBridgeAccount.address, 8, 8) }
          </button>)
        : (<button className="button connect-button" onClick={connect}>
            <img className="wallet-icon" src={keplrIcon} alt="kelpr icon" />
            Connect Keplr
          </button>)}
    </>
  );
};

interface EthConnectionButtonProps {
  ethAccount?: Account
}

const EthConnectButton: React.FC<EthConnectionButtonProps> = (ethConnectionButtonProps) => {
  const connect = useCallback(async () => {
    try {
      await ethWalletManager.connect();
    } catch (error) {
      if (error instanceof MetaMaskPendingRequestError) {
        toastService.showPendingMetaMaskRequestToast();
      } else if (error instanceof NoEthWalletError) {
        toastService.showNoEthWalletToast();
      }
    }
  }, []);

  const { ethAccount } = ethConnectionButtonProps;
  return (
    <>
      { ethAccount
        ? (<button className="button connected-button">
            <div className="balance-container">
              <span>{balanceService.convertWithDecimal(ethAccount.balance, 18)}ETH</span>
            </div>
            <Blockies className="blockies" seed={ethAccount.address} size={8} scale={2}/>
            { shortenAddress(ethAccount.address, 8, 8) }
          </button>)
        : (<button className="button connect-button" onClick={connect}>
            <img className="wallet-icon" src={metaMaskIcon} alt="meta mask icon" />
            Connect Meta Mask
          </button>)
      }
    </>
  );
};

function shortenAddress (str: string, head: number, tail: number): string {
  if (_.size(str) <= head + tail) {
    return str;
  } else {
    const result = /^(\w{8})\w+(\w{8})$/g.exec(str);
    if (result !== null && result[1] && result[2]) {
      return `${result[1]}...${result[2]}`;
    } else {
      return str;
    }
  }
}

export default Header;
