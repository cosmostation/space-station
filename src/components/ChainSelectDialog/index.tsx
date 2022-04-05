import './ChainSelectDialog.css';

import classNames from 'classnames';
import Box from 'components/Box';
import DialogContainer from 'components/DialogContainer';
import IconButton from 'components/IconButton';
import Text from 'components/Text';
import closeIcon from 'images/close-icon.png';
import _ from 'lodash';
import React, { useCallback } from 'react';
import { ChainViewInfo, SupportedChain } from 'types';

type ChainSelectDialogProps = {
  className?: string;
  chains: ChainViewInfo[];
  select: (chain: SupportedChain) => void;
  close: () => void;
}

const ChainSelectDialog: React.FC<ChainSelectDialogProps> = ({ chains, className, select, close }) => {
  const onChainSelect = useCallback((chainInfo: ChainViewInfo) => {
    select(chainInfo.chain);
    close();
  }, [select, close]);

  return (
    <DialogContainer open={true} close={close}>
      <Box className={classNames(className, 'ChainSelectDialog')}>
        <div className="chain-select-heading">
          <Text size="medium" bold>Select a Chain</Text>
          <IconButton onClick={close}>
            <img src={closeIcon} alt="close"/>
          </IconButton>
        </div>
        <ul className="chain-select-list">
          {_.map(chains, (chain, i) => (
            <li className="chain-list-item" key={i} onClick={onChainSelect.bind(null, chain)}>
              <img src={chain.image} className="chain-list-item-icon" alt={`${chain.name} logo`}/>
              <div>
                <Text size="small">{chain.name}</Text>
                <Text size="tiny" muted className="token-list-token-name">{chain.name}</Text>
              </div>
            </li>
          ))}
        </ul>
      </Box>
    </DialogContainer>
  );
};

export default ChainSelectDialog;
