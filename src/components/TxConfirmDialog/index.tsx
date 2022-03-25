import './TxConfirmDialog.css';

import classNames from 'classnames';
import Box from 'components/Box';
import Button from 'components/Button';
import DialogContainer from 'components/DialogContainer';
import IconButton from 'components/IconButton';
import Row from 'components/Row';
import Text from 'components/Text';
import arrowIcon from 'images/arrow-icon.png';
import closeIcon from 'images/close-icon.png';
import defaultTokenIcon from 'images/default-token-icon.png';
import _ from 'lodash';
import React, { useCallback } from 'react';
import chainHelper from 'services/util/chain-helper';
import { BridgeFee, IToken, SupportedChain } from 'types';

type TxSenderProps = {
  open: boolean;
  className?: string;
  fromChain: SupportedChain;
  toChain: SupportedChain;
  token?: IToken;
  amount: string;
  bridgeFee?: BridgeFee;
  close: () => void;
  confirm: () => void;
}

const TxConfirmDialog: React.FC<TxSenderProps> = ({ open, className, fromChain, toChain, token, amount, bridgeFee, close, confirm }) => {
  const logoURI = token?.erc20?.logoURI || token?.cosmos?.logoURI || defaultTokenIcon;
  const tokenSymbol = token?.erc20?.symbol || token?.cosmos?.symbol || 'Unknown Token';

  const onClose = useCallback(() => {
    close();
  }, [close]);

  const onConfirm = useCallback(() => {
    confirm();
  }, [confirm]);

  return (
    <DialogContainer open={open} close={onClose}>
      <Box className={classNames(className, 'TxConfirm')}>
        <Row className="space-between">
          <Text size="medium">Confirm Transfer</Text>
          <IconButton onClick={onClose}>
            <img src={closeIcon} alt="close"/>
          </IconButton>
        </Row>
        <Row>
          <Box density={1} depth={1}>
            <Row>
              <Text muted size="small">From</Text>
            </Row>
            <Row>
              <Text>{chainHelper.getChainName(fromChain)}</Text>
            </Row>
          </Box>
          <IconButton disabled>
            <img src={arrowIcon} alt="arrow icon"/>
          </IconButton>

          <Box density={1} depth={1}>
            <Row>
              <Text muted size="small">To</Text>
            </Row>
            <Row>
              <Text>{chainHelper.getChainName(toChain)}</Text>
            </Row>
          </Box>
        </Row>
        <Row>
          <Box density={1} depth={1}>
            <Row>
              <Text muted size="small">Transfer Details</Text>
            </Row>
            <Row className="space-between">
              <Text>Token</Text>
              <div className="tx-confirm-token-info">
                <img
                  className="token-confirm-token-icon"
                  src={logoURI}
                  alt="selected token icon"
                />
                <Text className="token-confirm-token-name" size="small">
                  {tokenSymbol}
                </Text>
              </div>
            </Row>
            <Row className="space-between">
              <Text>Amount</Text>
              <Text>{amount}</Text>
            </Row>
            {!_.isNil(bridgeFee)
              ? <Row className="space-between">
                  <Text>Bridge Fee</Text>
                  <Text>{bridgeFee.amount}</Text>
                </Row>
              : <></>
            }
          </Box>
        </Row>
        <Row>
          <Button className={classNames('tx-confirm-transfer-button')} onClick={onConfirm} type="primary">
            Transfer
          </Button>
        </Row>
      </Box>
    </DialogContainer>
  );
};

export default TxConfirmDialog;
