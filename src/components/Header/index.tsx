import './Header.css';

import IconButton from 'components/IconButton';
import useAccount from 'hooks/use-account';
import { ReactComponent as DarkThemeIcon } from 'images/dark-theme-icon.svg';
import keplrIcon from 'images/keplr-icon.png';
import { ReactComponent as LightThemeIcon } from 'images/light-theme-icon.svg';
import { ReactComponent as BlackLogo } from 'images/logo-black.svg';
import { ReactComponent as WhiteLogo } from 'images/logo-white.svg';
import metaMaskIcon from 'images/meta-mask-icon.png';
import _ from 'lodash';
import React, { useCallback } from 'react';
import Blockies from 'react-blockies';
import cosmosWalletManager from 'services/cosmos-wallet/cosmos-wallet-manager';
import ethWalletManager from 'services/eth-wallet/eth-wallet-manager';
import balanceService from 'services/util/number-service';
import toastService from 'services/util/toast-service';
import typeHelper from 'services/util/type-helper';
import themeStore from 'stores/theme-store';
import {
  CosmosWalletType,
  EthWalletType,
  IAccount,
  MetaMaskPendingRequestError,
  NoKeplrWalletError,
  NoMetaMaskWalletError,
  SupportedChain,
  SupportedCosmosChain,
  ThemeType,
} from 'types';

type HeaderProps = {
  theme: ThemeType,
  ethChain: SupportedChain
}

const Header: React.FC<HeaderProps> = ({ theme, ethChain }) => {
  const changeTheme = useCallback(() => {
    const currentTheme = themeStore.getCurrentTheme();
    const nextTheme = currentTheme === ThemeType.Dark ? ThemeType.Light : ThemeType.Dark;
    themeStore.changeTheme(nextTheme);
  }, []);

  const gravityBridgeAccount = useAccount(SupportedChain.GravityBridge);
  const ethAccount = useAccount(ethChain);

  return (
    <div className="header">
      <div className="logo-container">
        <>
          { theme === ThemeType.Dark
            ? <WhiteLogo className="logo"/>
            : <BlackLogo className="logo"/>
          }
        </>
        <div className="logo-title-container">
          spacestation.zone currently only supports transfers to&nbsp;<span className="logo-title-gravity-bridge">Gravity Bridge Chain</span>.
        </div>
      </div>
      <div className="buttons-container">
        <GravityBridgeConnectButton gravityBridgeAccount={gravityBridgeAccount} />
        <EthConnectButton ethAccount={ethAccount} ethChain={ethChain} />
        <IconButton onClick={changeTheme} size="big" className="theme-change-button">
          { theme === ThemeType.Dark
            ? <LightThemeIcon />
            : <DarkThemeIcon />
          }
        </IconButton>
      </div>
    </div>
  );
};

interface GravityBridgeConnectionButtonProps {
  gravityBridgeAccount?: IAccount
}

const GravityBridgeConnectButton: React.FC<GravityBridgeConnectionButtonProps> = (gravityBridgeConnectionButtonProps) => {
  const connect = useCallback(async () => {
    try {
      await cosmosWalletManager.connect(SupportedCosmosChain.GravityBridge, CosmosWalletType.Keplr);
    } catch (error) {
      if (error instanceof NoKeplrWalletError) {
        toastService.showFailToast('Kepler extension required',
          <>
            Please install Keplr - <a href="https://chrome.google.com/webstore/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap" target="_blank" rel="noopener noreferrer">HERE</a>
          </>
        );
      } else {
        toastService.showFailToast("Can't connect to Keplr", 'Please try again');
      }
    }
  }, []);

  const { gravityBridgeAccount } = gravityBridgeConnectionButtonProps;
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
  ethChain: SupportedChain,
  ethAccount?: IAccount
}

const EthConnectButton: React.FC<EthConnectionButtonProps> = ({ ethChain, ethAccount }) => {
  const connect = useCallback(async () => {
    try {
      if (typeHelper.isSupportedEthChain(ethChain)) {
        await ethWalletManager.connect(ethChain, EthWalletType.MetaMask);
      }
    } catch (error) {
      if (error instanceof MetaMaskPendingRequestError) {
        toastService.showFailToast('Please check Metamask', 'Some requests are pending!');
      } else if (error instanceof NoMetaMaskWalletError) {
        toastService.showFailToast("Can't find Meta Mask",
          <>
            Please install Metamask - <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn" target="_blank" rel="noopener noreferrer">HERE</a>
          </>
        );
      } else {
        toastService.showFailToast('Metamask required', 'Please try again');
      }
    }
  }, []);

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
            Connect Metamask
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
