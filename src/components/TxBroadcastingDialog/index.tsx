import './TxBroadcastingDialog.css';

import CircularProgress from '@mui/material/CircularProgress';
import { TokenInfo } from '@uniswap/token-lists';
import classNames from 'classnames';
import Box from 'components/Box';
import Button from 'components/Button';
import DialogContainer from 'components/DialogContainer';
import IconButton from 'components/IconButton';
import Row from 'components/Row';
import Text from 'components/Text';
import closeIcon from 'images/close-icon.png';
import { ReactComponent as SuccessIcon } from 'images/success-icon.svg';
import { ReactComponent as FailIcon } from 'images/warn-icon.svg';
import _ from 'lodash';
import React, { useCallback, useState } from 'react';
import { SupportedNetwork } from 'types';

type TxBroadcastDialogProps = {
  open: boolean;
  className?: string;
  toNetwork: SupportedNetwork;
  token?: TokenInfo;
  amount: string;
}

const TxConfirmDialog: React.FC<TxBroadcastDialogProps> = ({ open, className, toNetwork, token, amount }) => {
  return (
    <DialogContainer open={open} close={_.identity}>
      <Box className={classNames(className, "TxBroadcasting")}>
        <Row className="tx-broadcasting-content">
          <CircularProgress size={80} thickness={2} className="tx-broadcasting-progress" color="inherit"/>
          <Text className="tx-broadcasting-message">
            {`Sending ${amount} ${token?.symbol} to ${toNetwork === SupportedNetwork.Eth ? 'Ethereum' : 'Gravity Bridge'}...`}
          </Text>
        </Row>
      </Box>
    </DialogContainer>
  );
}

export default TxConfirmDialog;
