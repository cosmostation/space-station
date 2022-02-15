import './FeeSelector.css';

import Big from 'big.js';
import classNames from 'classnames';
import Box from 'components/Box';
import Row from 'components/Row';
import Text from 'components/Text';
import usePrice from 'hooks/use-price';
import _ from 'lodash';
import React, { useCallback } from 'react';
import transferer from 'services/transfer/transferer';
import { Fee, IToken, SupportedChain } from 'types';

type FeeSelectorProps = {
  fromChain: SupportedChain,
  toChain: SupportedChain,
  selectedToken: IToken,
  currency: string,
  balance: string,
  amount: string,
  select: (fee: Fee) => void,
  selectedFee?: Fee,
  subtractFee: (fee: Fee) => void
}

const FeeSelector: React.FC<FeeSelectorProps> = ({ fromChain, toChain, selectedToken, currency, select, selectedFee, subtractFee }) => {
  const denom = selectedToken?.isErc20
    ? selectedToken.erc20?.symbol
    : selectedToken?.cosmos?.denom;
  const tokenPrice = usePrice(currency, denom);
  const _tokenPrice = new Big(tokenPrice?.current_price || '1').toString();
  const fees = transferer.getFees(fromChain, toChain, selectedToken, _tokenPrice);

  const onClickFee = useCallback((fee) => {
    select(fee);
  }, []);

  const onSubtractFee = useCallback(() => {
    if (selectedFee) {
      subtractFee(selectedFee);
    }
  }, [selectedToken, selectedFee, subtractFee]);

  return (
    <Box className="fee-selector-container" density={1} depth={1}>
      <Row depth={1}>
        <div className="fee-selector-heading-container">
          <Text size="small" muted>Transaction Fee</Text>
          <button className={classNames('fee-selector-minus-fee-button', { disabled: _.isNil(selectedFee) })} onClick={onSubtractFee}>
            <Text size="tiny">-Fee</Text>
          </button>
        </div>
      </Row>
      <Row depth={1}>
        <div className="fee-selector-button-container">
          {_.map(fees, (fee) => (
            <button key={fee.id} className={classNames('fee-selector-fee-button', { selected: fee.id === selectedFee?.id })} onClick={onClickFee.bind(null, fee)}>
              <Text size="tiny" className="fee-button-text">{fee.label}</Text>
              <Text size="tiny" className="fee-button-text">{fee.amount} {_.upperCase(fee.denom)}</Text>
              <Text size="tiny" className="fee-button-text" muted>${fee.amountInCurrency}</Text>
          </button>
          ))}
        </div>
      </Row>
    </Box>
  );
};

export default FeeSelector;
