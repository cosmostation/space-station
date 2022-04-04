import './ConnectedWalletDialog.css';

import classNames from 'classnames';
import Box from 'components/Box';
import DialogContainer from 'components/DialogContainer';
import IconButton from 'components/IconButton';
import Button from 'components/Button';
import Text from 'components/Text';
import useTheme from 'hooks/use-theme';
import closeIcon from 'images/close-icon.png';
import React, { useCallback } from 'react';
import { ChainViewInfo, SupportedChain, WalletType, SupportedAccount } from 'types';
import walletHelper from 'services/util/wallet-helper';
import chainHelper from 'services/util/chain-helper';

type ConnectedWalletDialogProps = {
  className?: string;
  chainInfo: ChainViewInfo;
  wallet: WalletType;
  account: SupportedAccount;
  disconnect: (chain: SupportedChain) => void;
  close: () => void;
}

const ConnectedWalletDialog: React.FC<ConnectedWalletDialogProps> = ({ className, chainInfo, wallet, account, disconnect, close }) => {
  const theme = useTheme();
  const accountLink = chainHelper.getAccountLink(chainInfo.chain);

  const onDisconnect = useCallback(() => {
    disconnect(chainInfo.chain);
  }, []);

  return (
    <DialogContainer open={true} close={close}>
      <Box className={classNames(className, 'ConnectedWalletDialog')}>
        <div className="connected-wallet-heading">
          <Text size="medium" bold>
            Connected Wallet
          </Text>
          <IconButton onClick={close}>
            <img src={closeIcon} alt="close"/>
          </IconButton>
        </div>
        <div className="connected-wallet-container">
          <div className="connected-wallet-info">
            <img
              src={walletHelper.getWalletIcon(wallet, theme)}
              className="connected-wallet-icon"
              alt={`${walletHelper.getWalletName(wallet)} logo`}
            />
            <Text className="connected-wallet-name" size="small">
              Connected with {walletHelper.getWalletName(wallet)}
            </Text>
          </div>
          <div>
            <Text className="connected-wallet-address-label" muted>Address</Text>
            <div className="connected-wallet-address">
              <Text >{walletHelper.shortenAddress(account.address, 15, 15)}</Text>
              <a
                href={`${accountLink}/${account.address}`}
                target="_blank"
                className="connected-wallet-account-link"
                rel="noreferrer">
              </a>
            </div>
            <Button className="disconnect-button" onClick={onDisconnect}>
              Disconnect
            </Button>
          </div>
        </div>
      </Box>
    </DialogContainer>
  );
};

export default ConnectedWalletDialog;
