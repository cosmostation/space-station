import './TokenSearchDialog.css';

import { TokenInfo } from '@uniswap/token-lists';
import classNames from 'classnames';
import Box from 'components/Box';
import DialogContainer from 'components/DialogContainer';
import IconButton from 'components/IconButton';
import Text from 'components/Text';
import closeIcon from 'images/close-icon.png';
import defaultTokenIcon from 'images/default-token-icon.png';
import { ReactComponent as WarnIcon } from 'images/warn-icon.svg';
import _ from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import web3Service from 'services/web3-service';
import { erc20ContractMethods } from 'types';
import { Contract } from 'web3-eth-contract';

import _tokenList from './goerli.json';

// import _tokenList from './coin-gecko.json';

const tokenList = _tokenList.tokens;

type TokenSearchDialogProps = {
  open: boolean;
  className?: string;
  select: (tokenInfo: TokenInfo) => void;
  close: () => void;
}

function isEthAddress (searchText: string): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(searchText);
}

function findTokenInfo (tokenList: TokenInfo[], address: string): TokenInfo | undefined {
  return _.find(tokenList, (tokenInfo: TokenInfo) => tokenInfo.address === address);
}

function filterTokenList (tokenList: TokenInfo[], searchText: string): TokenInfo[] {
  return _.filter(tokenList, (tokenInfo) => {
    const lowerValue = _.toLower(searchText);
    return _.includes(_.toLower(tokenInfo.name), lowerValue) ||
      _.includes(_.toLower(tokenInfo.symbol), lowerValue)
  })
}

async function convertERC20Info (address: string, contract: Contract): Promise<TokenInfo> {
  const name = await (contract.methods as erc20ContractMethods).name().call();
  const symbol = await (contract.methods as erc20ContractMethods).symbol().call();
  const decimals = await (contract.methods as erc20ContractMethods).decimals().call();
  // TODO: support multiple chain ID
  return { chainId: 1, name, symbol, decimals, address };
}

const TokenSearcher: React.FC<TokenSearchDialogProps> = ({ open, className, select, close }) => {
  const [searchText, setSearchText] = useState<string>('');
  const [candidates, setCandidate] = useState<TokenInfo[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setCandidate(tokenList);
    }, 100);
  }, []);

  const onSearchTextChange = useCallback((event) => {
    const value = _.get(event, 'target.value', '');
    setSearchText(value);
    if (_.isEmpty(value)) {
      setCandidate(tokenList);
    } else if (isEthAddress(value)) {
      const tokenInfo = findTokenInfo(tokenList, value);
      if (tokenInfo) {
        setCandidate([tokenInfo]);
      } else {
        web3Service.getERC20Info(value)
          .then((contract) => convertERC20Info(value, contract))
          .then((tokenInfo) => setCandidate([tokenInfo]))
          .catch((error) => {
            console.error(error);
            setCandidate([]);
          });
      }
    } else {
      const _candidates = filterTokenList(tokenList, value);
      setCandidate(_candidates)
    }
  }, [setSearchText, setCandidate]);

  const onTokenSelect = useCallback((tokenInfo: TokenInfo) => {
    select(tokenInfo);
    close();
  }, [select, close]);

  const onClose = useCallback(() => {
    setSearchText('');
    close();
  }, [close, setSearchText])

  return (
    <DialogContainer open={open} close={onClose}>
      <Box className={classNames(className, "TokenSearchDialog")}>
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
            placeholder="Search name or paste address"
            value={searchText}
            onChange={onSearchTextChange}
          />
        </div>
        {_.isEmpty(candidates) ? (
          <div className="no-token-candidate">
            <WarnIcon />
            &nbsp;&nbsp;
            <Text muted size="tiny">No result found</Text>
          </div>
        ) : (
          <ul className="token-candidate-list">
            {_.map(candidates, (token, i) => (
              <li className="token-list-item" key={`${token.symbol}-${i}`} onClick={onTokenSelect.bind(null, token)}>
                <img src={token.logoURI ? token.logoURI : defaultTokenIcon} className="token-list-item-icon" alt={`${token.symbol} logo`}/>
                <div>
                  <Text size="small">{token.symbol}</Text>
                  <Text size="tiny" muted className="token-list-token-name">{token.name}</Text>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Box>
    </DialogContainer>
  );
}

export default TokenSearcher;
