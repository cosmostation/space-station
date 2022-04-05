import './WalletSelectDialog.css';

import classNames from 'classnames';
import Box from 'components/Box';
import DialogContainer from 'components/DialogContainer';
import IconButton from 'components/IconButton';
import Text from 'components/Text';
import useTheme from 'hooks/use-theme';
import closeIcon from 'images/close-icon.png';
import _ from 'lodash';
import React, { useCallback } from 'react';
import walletHelper from 'services/util/wallet-helper';
import { WalletType } from 'types';

type WalletSelectDialogProps = {
  className?: string;
  wallets: Array<WalletType>;
  select: (wallet: WalletType) => void;
  close: () => void;
}

const WalletSelectDialog: React.FC<WalletSelectDialogProps> = ({ wallets, className, select, close }) => {
  const theme = useTheme();

  const onWalletSelect = useCallback((wallet: WalletType) => {
    select(wallet);
    close();
  }, [select, close]);

  return (
    <DialogContainer open={true} close={close}>
      <Box className={classNames(className, 'WalletSelectDialog')}>
        <div className="wallet-select-heading">
          <Text size="medium" bold>
            Connect Wallet
          </Text>
          <IconButton onClick={close}>
            <img src={closeIcon} alt="close"/>
          </IconButton>
        </div>
        <ul className="wallet-select-list">
          {_.map(wallets, (wallet, i) => (
            <li className="wallet-list-item" key={i} onClick={onWalletSelect.bind(null, wallet)}>
              <img
                src={walletHelper.getWalletIcon(wallet, theme)}
                className="wallet-list-item-icon"
                alt={`${walletHelper.getWalletName(wallet)} logo`}
              />
              <Text size="small">{walletHelper.getWalletName(wallet)}</Text>
            </li>
          ))}
        </ul>
      </Box>
    </DialogContainer>
  );
};

export default WalletSelectDialog;
