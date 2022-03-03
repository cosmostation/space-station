import './FeeSelector.css';

import Big from 'big.js';
import classNames from 'classnames';
import Box from 'components/Box';
import Row from 'components/Row';
import Text from 'components/Text';
import usePrice from 'hooks/use-price';
import _ from 'lodash';
import React, { useCallback, useEffect } from 'react';
import transferer from 'services/transfer/transferer';
import loggerFactory from 'services/util/logger-factory';
import { Fee, IToken, SupportedChain } from 'types';

const logger = loggerFactory.getLogger('[FeeSelector]');

type FeeSelectorProps = {
  fromChain: SupportedChain,
  toChain: SupportedChain,
  selectedToken: IToken,
  currency: string,
  balance: string,
  amount: string,
  select: (fee: Fee) => void,
  selectedFee?: Fee
}

function getPriceDenom (selectedToken: IToken): string {
  if (selectedToken.erc20) {
    return selectedToken.erc20.priceDenom || selectedToken.erc20.symbol;
  } else if (selectedToken.cosmos) {
    return selectedToken.cosmos.priceDenom || selectedToken.cosmos.denom;
  }
  return '';
}

const FeeSelector: React.FC<FeeSelectorProps> = ({ fromChain, toChain, selectedToken, currency, amount, balance, select, selectedFee }) => {
  const priceDenom = getPriceDenom(selectedToken);
  const tokenPrice = usePrice(currency, priceDenom);
  const _tokenPrice = new Big(tokenPrice?.current_price || '1').toString();
  const fees = transferer.getFees(fromChain, toChain, selectedToken, _tokenPrice);
  logger.info('denom:', priceDenom, 'Fees:', fees);

  useEffect(() => {
    if (selectedFee) {
      const fee = _.find(fees, { id: selectedFee.id });
      if (fee && !isSameFee(fee, selectedFee)) {
        select(fee);
      }
    } else if (!_.isEmpty(fees)) {
      select(fees[0]);
    }
  }, [fromChain, selectedToken, selectedFee, fees]);

  const onClickFee = useCallback((fee) => {
    logger.info('Selected Fee:', fee);
    select(fee);
  }, [select]);

  const disableds: boolean[] = _.map(fees, (fee) => {
    try {
      return Big(fee.amount).add(amount || '0').gt(balance);
    } catch (error) {
      logger.error(error, fee);
      return true;
    }
  });

  return (
    <Box className="fee-selector-container" density={1} depth={1}>
      <Row depth={1}>
        <div className="fee-selector-heading-container">
          <Text size="small" muted>Bridge Fee</Text>
        </div>
      </Row>
      <Row depth={1}>
        <div className="fee-selector-button-container">
          {_.map(fees, (fee, i) => (
            <button
              key={fee.id}
              className={classNames('fee-selector-fee-button', { selected: fee.id === selectedFee?.id })}
              onClick={onClickFee.bind(null, fee)}
              disabled={disableds[i]}
            >
              <Text size="tiny" className="fee-button-text" muted={disableds[i]}>
                {fee.label}
              </Text>
              <Text size="tiny" className="fee-button-text" muted={disableds[i]}>
                {fee.amount} {_.upperCase(fee.denom)}
              </Text>
              <Text size="tiny" className="fee-button-text" muted>
                ${fee.amountInCurrency}
              </Text>
          </button>
          ))}
        </div>
      </Row>
    </Box>
  );
};

function isSameFee (feeA: Fee, feeB: Fee): boolean {
  return _.join(_.values(feeA), ':') === _.join(_.values(feeB), ':');
}

export default FeeSelector;
