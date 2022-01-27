import './TokenSearchDialog.css';

import { TokenInfo } from '@uniswap/token-lists';
import classNames from 'classnames';
import Box from 'components/Box';
import DialogContainer from 'components/DialogContainer';
import IconButton from 'components/IconButton';
import Text from 'components/Text';
import useEthTokenList from 'hooks/use-eth-token-list';
import useGravityBridgeTokenList from 'hooks/use-gravity-bridge-token-list';
import useOnScreen from 'hooks/use-on-screen';
import closeIcon from 'images/close-icon.png';
import defaultTokenIcon from 'images/default-token-icon.png';
import { ReactComponent as WarnIcon } from 'images/warn-icon.svg';
import _ from 'lodash';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import ethWalletManager from 'services/eth-wallet-manager';
import loggerFactory from 'services/logger-factory';
import { SupportedNetwork } from 'types';

const logger = loggerFactory.getLogger('[TokenSearcherDialog]');

type TokenSearchDialogProps = {
  open: boolean;
  fromNetwork: SupportedNetwork;
  ethChainId: string;
  gravityBridgeAccount?: string;
  className?: string;
  select: (tokenInfo: TokenInfo) => void;
  close: () => void;
}

const PER_PAGE = 20;

const TokenSearcherDialog: React.FC<TokenSearchDialogProps> = ({ open, fromNetwork, ethChainId, gravityBridgeAccount, className, select, close }) => {
  const [searchText, setSearchText] = useState<string>('');
  const [searchedTokens, setSearchedTokens] = useState<TokenInfo[]>([]);
  const [candidates, setCandidate] = useState<TokenInfo[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasMore, ethTokenList] = useEthTokenList(ethChainId, page, PER_PAGE, searchedTokens);
  const gravityBridgeTokenList = useGravityBridgeTokenList(gravityBridgeAccount, searchedTokens);

  useEffect(() => {
    setCandidateByNetwork(fromNetwork, setCandidate, ethTokenList, gravityBridgeTokenList);
  }, [fromNetwork, ethTokenList, gravityBridgeTokenList, searchText]);

  const onSearchTextChange = useCallback((event) => {
    const searchText = _.get(event, 'target.value', '');
    setSearchText(searchText);

    const tokenList = getCandidateByNetwork(fromNetwork, ethTokenList, gravityBridgeTokenList);
    if (_.isEmpty(searchText)) {
      setCandidateByNetwork(fromNetwork, setCandidate, ethTokenList, gravityBridgeTokenList);
    } else if (isEthAddress(searchText)) {
      findTokenInfo(tokenList, searchText)
        .then((tokenInfo) => {
          logger.info('[onSearchTextChange]', 'tokenInfo', tokenInfo);
          tokenInfo ? setCandidate([tokenInfo]) : setCandidate([]);
          if (tokenInfo) {
            setSearchedTokens([...searchedTokens, tokenInfo]);
          }
        }).catch(() => { setCandidate([]); });
    } else {
      const _candidates = filterTokenList(tokenList, searchText);
      setCandidate(_candidates);
    }
  }, [fromNetwork, ethTokenList, gravityBridgeTokenList]);

  const onTokenSelect = useCallback((tokenInfo: TokenInfo) => {
    setSearchText('');
    setPage(1);
    select(tokenInfo);
    close();
  }, [select, close]);

  const onClose = useCallback(() => {
    setSearchText('');
    setPage(1);
    close();
  }, [close]);

  const onLoadTokenList = useCallback(() => {
    if (hasMore && fromNetwork === SupportedNetwork.Eth) {
      setPage(page + 1);
    }
  }, [hasMore, fromNetwork, page, setPage]);

  return (
    <DialogContainer open={open} close={onClose}>
      <Box className={classNames(className, 'TokenSearchDialog')}>
        <div className="token-searcher-heading">
          <Text size="medium">Select a Token</Text>
          <IconButton onClick={onClose}>
            <img src={closeIcon} alt="close"/>
          </IconButton>
        </div>
        <div className="token-search-input-container">
          <input
            className="token-search-input"
            autoComplete="false"
            placeholder="Search name or paste contract address"
            value={searchText}
            onChange={onSearchTextChange}
          />
        </div>
        {_.isEmpty(candidates)
          ? (<div className="no-token-candidate">
              <WarnIcon />
              &nbsp;&nbsp;
              <Text muted size="tiny">No result found</Text>
            </div>)
          : (<ul className="token-candidate-list">
            {_.map(candidates, (token, i) => (
              <li className="token-list-item" key={`${token.symbol}-${i}`} onClick={onTokenSelect.bind(null, token)}>
                <img src={token.logoURI ? token.logoURI : defaultTokenIcon} className="token-list-item-icon" alt={`${token.symbol} logo`}/>
                <div>
                  <Text size="small">{token.symbol}</Text>
                  <Text size="tiny" muted className="token-list-token-name">{token.name}</Text>
                </div>
              </li>
            ))}
            <TokenLoader loader={onLoadTokenList}/>
          </ul>)}
      </Box>
    </DialogContainer>
  );
};

type TokenLoaderProps = {
  loader: () => unknown;
}

const TokenLoader: React.FC<TokenLoaderProps> = ({ loader }) => {
  const ref = useRef(null);
  const visible = useOnScreen(ref);

  useEffect(() => {
    if (visible) {
      loader();
    }
  }, [visible]);
  return (
    <span ref={ref}>&nbsp;</span>
  );
};

function isEthAddress (searchText: string): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(searchText);
}

async function findTokenInfo (tokenList: TokenInfo[], address: string): Promise<TokenInfo | undefined | null> {
  const tokenInfo = _.find(tokenList, (tokenInfo: TokenInfo) => tokenInfo.address === address);
  return tokenInfo || ethWalletManager.getERC20Info(address);
}

function filterTokenList (tokenList: TokenInfo[], searchText: string): TokenInfo[] {
  return _.filter(tokenList, (tokenInfo) => {
    const lowerValue = _.toLower(searchText);
    return _.includes(_.toLower(tokenInfo.name), lowerValue) ||
      _.includes(_.toLower(tokenInfo.symbol), lowerValue);
  });
}

function setCandidateByNetwork (
  network: SupportedNetwork,
  candidateSetter: (tokenInfos: TokenInfo[]) => void,
  ethTokenList: TokenInfo[],
  gravityBridgeTokenList: TokenInfo[]
): void {
  if (network === SupportedNetwork.Eth) {
    candidateSetter(ethTokenList);
  } else if (network === SupportedNetwork.GravityBridge) {
    candidateSetter(gravityBridgeTokenList);
  } else {
    candidateSetter([]);
  }
}

function getCandidateByNetwork (network: SupportedNetwork, ethTokenList: TokenInfo[], gravityBridgeTokenList: TokenInfo[]): TokenInfo[] {
  if (network === SupportedNetwork.Eth) {
    return ethTokenList;
  } else if (network === SupportedNetwork.GravityBridge) {
    return gravityBridgeTokenList;
  } else {
    return [];
  }
}

export default TokenSearcherDialog;
