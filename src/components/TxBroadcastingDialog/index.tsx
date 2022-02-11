import './TxBroadcastingDialog.css';

import CircularProgress from '@mui/material/CircularProgress';
import classNames from 'classnames';
import Box from 'components/Box';
import DialogContainer from 'components/DialogContainer';
import Row from 'components/Row';
import Text from 'components/Text';
import _ from 'lodash';
import React from 'react';
import chainHelper from 'services/util/chain-helper';
import { IToken, SupportedChain } from 'types';

type TxBroadcastDialogProps = {
  open: boolean;
  className?: string;
  toChain: SupportedChain;
  token?: IToken;
  amount: string;
}

const TxConfirmDialog: React.FC<TxBroadcastDialogProps> = ({ open, className, toChain, token, amount }) => {
  return (
    <DialogContainer open={open} close={_.identity}>
      <Box className={classNames(className, 'TxBroadcasting')}>
        <Row className="tx-broadcasting-content">
          <CircularProgress size={80} thickness={2} className="tx-broadcasting-progress" color="inherit"/>
          <Text className="tx-broadcasting-message">
            {`Sending ${amount} ${token?.erc20?.symbol} to ${chainHelper.getChainName(toChain)}...`}
          </Text>
        </Row>
      </Box>
    </DialogContainer>
  );
};

export default TxConfirmDialog;
