import './ChainSelector.css';

import classNames from 'classnames';
import Box from 'components/Box';
import ChainSelectDialog from 'components/ChainSelectDialog';
import IconButton from 'components/IconButton';
import Text from 'components/Text';
import useAccount from 'hooks/use-account';
import useConnectedWallet from 'hooks/use-connected-wallet';
import arrowIcon from 'images/arrow-icon.png';
import { ReactComponent as ArrowNoTailIcon } from 'images/arrow-no-tail.svg';
import CosmosChainLogo from 'images/cosmos-chain-logo.png';
import EthChainLogo from 'images/eth-chain-logo.png';
import GbChainLogo from 'images/gb-chain-logo.png';
import IrisChainLogo from 'images/iris-chain-logo.png';
import OsmosisChainLogo from 'images/osmosis-chain-logo.png';
import StargazeChainLogo from 'images/stargaze-chain-logo.png';
import _ from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import cosmosWalletManager from 'services/cosmos-wallet/cosmos-wallet-manager';
import ethWalletManager from 'services/eth-wallet/eth-wallet-manager';
import loggerFactory from 'services/util/logger-factory';
import toastService from 'services/util/toast-service';
import typeHelper from 'services/util/type-helper';
import {
  ChainViewInfo,
  CosmosWalletType,
  EthWalletType,
  MetaMaskPendingRequestError,
  NoKeplrWalletError,
  NoMetaMaskWalletError,
  SupportedAccount,
  SupportedChain,
} from 'types';

const logger = loggerFactory.getLogger('[ChainSelector]');

type ChainSelectorProps = {
  fromChain: SupportedChain,
  toChain: SupportedChain,
  selectFromChain: (chain: SupportedChain) => void,
  selectToChain: (chain: SupportedChain) => void,
  toggle: (fromChain: SupportedChain, toChain: SupportedChain) => void
}

const SUPPORTED_CHAIN_MAP: Record<SupportedChain, ChainViewInfo> = {
  [SupportedChain.Eth]: {
    chain: SupportedChain.Eth,
    name: 'Ethereum',
    image: EthChainLogo,
    supportedWallets: [EthWalletType.MetaMask],
    toChains: [SupportedChain.GravityBridge],
    head: 8,
    tail: 8
  },
  [SupportedChain.GravityBridge]: {
    chain: SupportedChain.GravityBridge,
    name: 'Gravity Bridge',
    image: GbChainLogo,
    supportedWallets: [CosmosWalletType.Keplr],
    toChains: [
      SupportedChain.Eth,
      SupportedChain.Osmosis,
      SupportedChain.Stargaze,
      SupportedChain.Iris
    ],
    head: 8,
    tail: 8
  },
  [SupportedChain.Osmosis]: {
    chain: SupportedChain.Osmosis,
    name: 'Osmosis',
    image: OsmosisChainLogo,
    supportedWallets: [CosmosWalletType.Keplr],
    toChains: [SupportedChain.GravityBridge],
    head: 8,
    tail: 8
  },
  [SupportedChain.Cosmos]: {
    chain: SupportedChain.Cosmos,
    name: 'Cosmos',
    image: CosmosChainLogo,
    supportedWallets: [CosmosWalletType.Keplr],
    toChains: [SupportedChain.GravityBridge],
    head: 8,
    tail: 8
  },
  [SupportedChain.Stargaze]: {
    chain: SupportedChain.Stargaze,
    name: 'Stargaze',
    image: StargazeChainLogo,
    supportedWallets: [CosmosWalletType.Keplr],
    toChains: [SupportedChain.GravityBridge],
    head: 8,
    tail: 8
  },
  [SupportedChain.Iris]: {
    chain: SupportedChain.Iris,
    name: 'Iris',
    image: IrisChainLogo,
    supportedWallets: [CosmosWalletType.Keplr],
    toChains: [SupportedChain.GravityBridge],
    head: 8,
    tail: 8
  }
};

const ChainSelector: React.FC<ChainSelectorProps> = ({ fromChain, toChain, selectFromChain, selectToChain, toggle }) => {
  const [fromChainDialogOpened, setFromChainDialogOpened] = useState<boolean>(false);
  const [toChainDialogOpened, setToChainDialogOpened] = useState<boolean>(false);
  const fromChainInfo = SUPPORTED_CHAIN_MAP[fromChain];
  const toChainInfo = SUPPORTED_CHAIN_MAP[toChain];
  const disableToChainSelector = _.size(fromChainInfo.toChains) === 1;
  const fromAccount = useAccount(fromChain);
  const fromConnectedWallet = useConnectedWallet(fromChain);
  const fromAddress = getAddress(fromAccount, fromChainInfo);
  const toAccount = useAccount(toChain);
  const toConnectedWallet = useConnectedWallet(toChain);
  const toAddress = getAddress(toAccount, toChainInfo);

  useEffect(() => {
    if (!_.includes(fromChainInfo.toChains, toChain)) {
      selectToChain(fromChainInfo.toChains[0]);
    }
  }, [fromChain, toChain]);

  const onOpenFromChainSelector = useCallback(() => {
    setFromChainDialogOpened(true);
  }, []);

  const onCloseFromChainSelector = useCallback(() => {
    setFromChainDialogOpened(false);
  }, []);

  const onOpenToChainSelector = useCallback(() => {
    setToChainDialogOpened(true);
  }, []);

  const onCloseToChainSelector = useCallback(() => {
    setToChainDialogOpened(false);
  }, []);

  const onConnectFromChainWallet = useCallback((walletType: EthWalletType | CosmosWalletType) => {
    connectChain(fromChain, walletType);
  }, [fromChain]);

  const onConnectToChainWallet = useCallback((walletType: EthWalletType | CosmosWalletType) => {
    connectChain(toChain, walletType);
  }, [toChain]);

  const toggleDirection = useCallback(() => {
    toggle(toChain, fromChain);
  }, [fromChain, toChain, toggle]);

  return (
    <Box className="chain-selector-container" density={1} depth={1}>
      <div className="chain-selector-source">
        <Text className="chain-selector-heading" size="small" muted>Source</Text>
        <div className={classNames('chain-selector')} onClick={onOpenFromChainSelector}>
          <img
            className="chain-selector-chain-icon"
            src={fromChainInfo.image}
            alt="From Chain"
          />
          <Text className="chain-selector-chain-name" size="small">
            {fromChainInfo.name}
          </Text>
          <IconButton size="small">
            <ArrowNoTailIcon/>
          </IconButton>
        </div>
        {fromAccount === undefined
          ? <button className="chain-selector-wallet-connect-button" onClick={onConnectFromChainWallet.bind(null, fromChainInfo.supportedWallets[0])}>
              {_.map(fromChainInfo.supportedWallets, (wallet, i) => (
                <span key={i} className={classNames('chain-selector-wallet-icon', wallet)}></span>
              ))}
              Connect
            </button>
          : <button className="chain-selector-wallet-connect-button disabled">
              <span className={classNames('chain-selector-wallet-icon', fromConnectedWallet)}></span>
              <span className="chain-selector-connected-address">{ fromAddress }</span>
            </button>
        }
      </div>
      <button className="chain-selector-toggle-button" onClick={toggleDirection}>
        <img className="chain-selector-toggle-image" src={arrowIcon} alt="toggle"/>
      </button>
      <div className="chain-selector-dest">
        <Text className="chain-selector-heading" size="small" muted>Destination</Text>
        <div className={classNames('chain-selector', { disabled: disableToChainSelector })} onClick={onOpenToChainSelector}>
          <img
            className="chain-selector-chain-icon"
            src={toChainInfo.image}
            alt="To Chain"
          />
          <Text className="chain-selector-chain-name" size="small">
            {toChainInfo.name}
          </Text>
          { !disableToChainSelector
            ? <IconButton size="small">
                <ArrowNoTailIcon/>
              </IconButton>
            : ''
          }
        </div>
        { toAccount === undefined
          ? <button className="chain-selector-wallet-connect-button" onClick={onConnectToChainWallet.bind(null, toChainInfo.supportedWallets[0])}>
              {_.map(toChainInfo.supportedWallets, (wallet, i) => (
                <span key={i} className={classNames('chain-selector-wallet-icon', wallet)}></span>
              ))}
              Connect
            </button>
          : <button className="chain-selector-wallet-connect-button disabled">
              <span className={classNames('chain-selector-wallet-icon', toConnectedWallet)}></span>
              <span className="chain-selector-connected-address">{ toAddress }</span>
            </button>
          }
      </div>
      {fromChainDialogOpened
        ? <ChainSelectDialog
            chains={_.values(SUPPORTED_CHAIN_MAP)}
            select={selectFromChain}
            close={onCloseFromChainSelector}/>
        : <></>
      }
      {!disableToChainSelector && toChainDialogOpened
        ? <ChainSelectDialog
            chains={getToChains(fromChain)}
            select={selectToChain}
            close={onCloseToChainSelector}/>
        : <></>
      }
    </Box>
  );
};

async function connectChain (chain: SupportedChain, walletType: EthWalletType | CosmosWalletType): Promise<void> {
  if (typeHelper.isSupportedEthChain(chain) && walletType === EthWalletType.MetaMask) {
    try {
      if (typeHelper.isSupportedEthChain(chain)) {
        await ethWalletManager.connect(chain, walletType);
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
  } else if (typeHelper.isSupportedCosmosChain(chain) && walletType === CosmosWalletType.Keplr) {
    try {
      await cosmosWalletManager.connect(chain, walletType);
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
  }
}

function getAddress (account: SupportedAccount | undefined, chainInfo: ChainViewInfo): string {
  if (account === undefined) {
    return '';
  }

  if (_.startsWith(account.address, '0x')) {
    return shortenAddress(account.address, chainInfo.head, chainInfo.tail);
  } else {
    return shortenAddress(account.address, chainInfo.head, chainInfo.tail);
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

function getToChains (chain: SupportedChain): ChainViewInfo[] {
  const chainInfo = SUPPORTED_CHAIN_MAP[chain];
  return _.map(chainInfo.toChains, (chain) => SUPPORTED_CHAIN_MAP[chain]);
}

export default ChainSelector;
