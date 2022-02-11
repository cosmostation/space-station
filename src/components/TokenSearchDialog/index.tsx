import './TokenSearchDialog.css';

import classNames from 'classnames';
import Box from 'components/Box';
import DialogContainer from 'components/DialogContainer';
import IconButton from 'components/IconButton';
import Text from 'components/Text';
import useTokenList from 'hooks/use-token-list';
import closeIcon from 'images/close-icon.png';
import defaultTokenIcon from 'images/default-token-icon.png';
import { ReactComponent as WarnIcon } from 'images/warn-icon.svg';
import _ from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import ethWalletManager from 'services/eth-wallet/eth-wallet-manager';
import loggerFactory from 'services/util/logger-factory';
import typeHelper from 'services/util/type-helper';
import { IToken, SupportedChain, SupportedEthChain } from 'types';

const logger = loggerFactory.getLogger('[TokenSearcherDialog]');

type TokenSearchDialogProps = {
  open: boolean;
  fromChain: SupportedChain;
  toChain: SupportedChain;
  fromAddress?: string;
  className?: string;
  select: (token: IToken) => void;
  close: () => void;
}

const TokenSearcherDialog: React.FC<TokenSearchDialogProps> = ({ open, fromChain, toChain, fromAddress, className, select, close }) => {
  const [searchText, setSearchText] = useState<string>('');
  const [searchedTokens, setSearchedTokens] = useState<IToken[]>([]);
  const [candidates, setCandidates] = useState<IToken[]>([]);
  const tokens = useTokenList(fromChain, toChain, searchedTokens, fromAddress);

  useEffect(() => {
    setCandidates(tokens);
  }, [tokens]);

  const onSearchTextChange = useCallback((event) => {
    const searchText = _.get(event, 'target.value', '');
    setSearchText(searchText);

    if (_.isEmpty(searchText)) {
      setCandidates(tokens);
    } else if (isEthAddress(searchText)) {
      findTokenInfo(fromChain, tokens, searchText)
        .then((token) => {
          logger.info('[onSearchTextChange]', 'token:', token);
          token ? setCandidates([token]) : setCandidates([]);
          if (token) {
            setSearchedTokens([...searchedTokens, token]);
          }
        }).catch(() => { setCandidates([]); });
    } else {
      const _candidates = filterTokenList(tokens, searchText);
      setCandidates(_candidates);
    }
  }, [fromChain, tokens, setCandidates]);

  const onTokenSelect = useCallback((token: IToken) => {
    setSearchText('');
    select(token);
    close();
  }, [select, close]);

  const onClose = useCallback(() => {
    setSearchText('');
    close();
  }, [close]);

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
              token.isErc20 === true
                ? (<li className="token-list-item" key={`${token.erc20?.symbol}-${i}`} onClick={onTokenSelect.bind(null, token)}>
                    <img src={token.erc20?.logoURI ? token.erc20.logoURI : defaultTokenIcon} className="token-list-item-icon" alt={`${token.erc20?.symbol} logo`}/>
                    <div>
                      <Text size="small">{token.erc20?.symbol}</Text>
                      <Text size="tiny" muted className="token-list-token-name">{token.erc20?.name}</Text>
                    </div>
                  </li>)
                : ''
            ))}
          </ul>)}
      </Box>
    </DialogContainer>
  );
};

function isEthAddress (searchText: string): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(searchText);
}

async function findTokenInfo (fromChain: SupportedChain, tokens: IToken[], address: string): Promise<IToken | undefined | null> {
  const token = _.find(tokens, (tokenInfo: IToken) => tokenInfo.erc20?.address === address);
  if (token) {
    return token;
  } else {
    if (typeHelper.isSupportedEthChain(fromChain)) {
      const ercToken = await ethWalletManager.getERC20Info(fromChain as SupportedEthChain, address);
      if (ercToken) {
        return typeHelper.convertErc20ToToken(ercToken);
      }
    }
    return null;
  }
}

function filterTokenList (tokens: IToken[], searchText: string): IToken[] {
  const lowerValue = _.toLower(searchText);
  return _.filter(tokens, (token) => {
    return _.includes(_.toLower(token.erc20?.name), lowerValue) ||
      _.includes(_.toLower(token.erc20?.symbol), lowerValue) ||
      _.includes(_.toLower(token.cosmos?.name), lowerValue);
  });
}

export default TokenSearcherDialog;
