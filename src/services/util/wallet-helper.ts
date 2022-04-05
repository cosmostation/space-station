import KeplrIcon from 'images/keplr-icon.png';
import LedgerDarkIcon from 'images/ledger-dark-icon.png';
import LedgerLightIcon from 'images/ledger-light-icon.png';
import MetaMaskIcon from 'images/meta-mask-icon.png';
import { CosmosWalletType, EthWalletType, ThemeType, WalletType } from 'types';
import _ from 'lodash';

const nameMap: Record<WalletType, string> = {
  [CosmosWalletType.Keplr]: 'Keplr',
  [CosmosWalletType.Ledger]: 'Ledger',
  [EthWalletType.MetaMask]: 'MetaMask'
};

const walletIconMap: Record<WalletType, string> = {
  [CosmosWalletType.Keplr]: KeplrIcon,
  [CosmosWalletType.Ledger]: LedgerLightIcon,
  [EthWalletType.MetaMask]: MetaMaskIcon
};

function getWalletName (wallet: WalletType): string {
  if (nameMap[wallet]) {
    return nameMap[wallet];
  } else {
    return 'Unknown Wallet';
  }
}

function getWalletIcon (walletType: WalletType, theme: ThemeType): string {
  if (walletType === CosmosWalletType.Ledger) {
    return theme === ThemeType.Dark ? LedgerDarkIcon : LedgerLightIcon;
  } else {
    return walletIconMap[walletType];
  }
}

function shortenAddress (str: string, head: number, tail: number): string {
  if (_.size(str) <= head + tail) {
    return str;
  } else {
    const pattern = new RegExp(`^(\\w{${head}})\\w+(\\w{${tail}})$`, 'g');
    const result = pattern.exec(str);
    if (result !== null && result[1] && result[2]) {
      return `${result[1]}...${result[2]}`;
    } else {
      return str;
    }
  }
}

export default {
  getWalletName,
  getWalletIcon,
  shortenAddress
};
