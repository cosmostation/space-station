import Big from 'big.js';
import cosmosChains from 'constants/cosmos-chains';
import { CosmosTokenWithoutChainId, ibcTokenFromToMap } from 'constants/tokens';
import ethToGravityBridgeTokens from 'constants/tokens/eth-gb-tokens';
import _ from 'lodash';
import lcdService from 'services/cosmos-tx/cosmos-sdk-lcd-service';
import ethWalletManager from 'services/eth-wallet/eth-wallet-manager';
import gravityBridgeTransferer from 'services/transfer/gravity-bridge-transferer';
import ibcTransferer from 'services/transfer/ibc-transferer';
import loggerFactory from 'services/util/logger-factory';
import typeHelper from 'services/util/type-helper';
import { ICosmosToken, IERC20Token, IToken, SupportedChain, SupportedCosmosChain, SupportedEthChain } from 'types';

const logger = loggerFactory.getLogger('[tokenService]');

async function getTokens (fromChain: SupportedChain, toChain: SupportedChain, address: string): Promise<IToken[]> {
  logger.info('[getTokens] Getting tokens...', 'from:', fromChain, 'to:', toChain, 'address:', address);

  if (gravityBridgeTransferer.isGravityBridgeTransfer(fromChain, toChain)) {
    logger.info('[getTokens] Getting tokens for Gravity Bridge transfer...');
    if (fromChain === SupportedChain.GravityBridge) {
      const tokens = _.get(ibcTokenFromToMap, [fromChain, toChain], {});
      return getTokensOnCosmosChain(SupportedCosmosChain.GravityBridge, address, tokens);
    } else {
      return getErc20TokensOnChain(fromChain, address);
    }
  } else if (ibcTransferer.isIbcTransfer(fromChain, toChain)) {
    logger.info('[getTokens] Getting tokens for IBC transfer...');
    if (typeHelper.isSupportedCosmosChain(fromChain) && address) {
      const tokens = ibcTokenFromToMap[fromChain][toChain] || {};
      return getTokensOnCosmosChain(fromChain, address, tokens);
    } else {
      return [];
    }
  } else {
    return [];
  }
}

async function getTokenBalance (chain: SupportedChain, token: IToken, address: string): Promise<string> {
  logger.info('[getTokens] Getting token balance...', 'chain:', chain, 'token:', token, 'address:', address);
  if (token.erc20) {
    if (typeHelper.isSupportedEthChain(chain)) {
      return getErc20TokenBalance(chain, address, token.erc20);
    } else if (chain === SupportedChain.GravityBridge) {
      return getErc20TokenBalanceOnGravityBridge(address, token.erc20);
    }
  } else if (token.cosmos) {
    if (typeHelper.isSupportedCosmosChain(chain)) {
      return getTokenBalanceOnCosmosChain(chain, address, token.cosmos);
    }
  }
  return '0';
}

async function getErc20TokensOnChain (chain: SupportedChain, address: string): Promise<IToken[]> {
  switch (chain) {
    case SupportedChain.Eth: {
      const tokens = [];
      for (const token of ethToGravityBridgeTokens) {
        const balance = await getErc20TokenBalance(SupportedEthChain.Eth, address, token);
        const _token = typeHelper.convertErc20ToToken(token);
        if (_token.erc20 !== undefined) {
          _token.erc20.balance = balance;
        }
        tokens.push(_token);
      }
      return tokens;
    } default: {
      return [];
    }
  }
}

async function getTokensOnCosmosChain (chain: SupportedCosmosChain, address: string, tokens: Record<string, CosmosTokenWithoutChainId>): Promise<IToken[]> {
  try {
    const balances = await lcdService.getBalance(chain, address);
    logger.info('[getTokensOnCosmosChain] balances:', balances);
    const chainInfo = cosmosChains[chain];
    const _tokens = _.map(tokens, (token) => {
      const _balance = _.find(balances, { denom: token.denom });
      const balance = _balance?.amount
        ? new Big(_balance.amount).div(10 ** token.decimals).toString()
        : '0';

      return {
        isCosmos: true,
        isErc20: false,
        cosmos: {
          chainId: chainInfo.chainId,
          denom: token.denom,
          decimals: token.decimals,
          name: token.name,
          logoURI: token.logoURI,
          symbol: token.symbol,
          balance,
          priceDenom: token.priceDenom
        }
      };
    });
    return _.compact(_tokens);
  } catch (error) {
    logger.error('[getTokensOnCosmosChain]', error);
    return [];
  }
}

async function getErc20TokenBalance (chain: SupportedEthChain, address: string, token: IERC20Token): Promise<string> {
  try {
    logger.info(`[getErc20TokenBalance] Getting ERC20 balance on ${chain}...`);
    const decimals = token.decimals;
    const response = await ethWalletManager.getERC20Balance(chain, token.address, address);
    logger.info('ERC20 balance:', response);
    const _balance = new Big(response)
      .div(10 ** decimals)
      .round(token.decimals, Big.roundDown);
    return _balance.toString();
  } catch (error) {
    logger.error(error);
    return '0';
  }
}

async function getErc20TokenBalanceOnGravityBridge (address: string, token: IERC20Token): Promise<string> {
  try {
    logger.info('[getErc20TokenBalanceOnGravityBridge] Getting ERC20 balance on Gravity Bridge...');
    const decimals = token.decimals;
    const balances = await lcdService.getBalance(SupportedCosmosChain.GravityBridge, address);
    const erc20Balances = _.find(balances, (balance) => balance.denom === `gravity${token.address}`);
    if (erc20Balances?.amount) {
      const _balance = new Big(erc20Balances.amount)
        .div(10 ** decimals);
      return _balance.toString();
    }
    return '0';
  } catch (error) {
    logger.error(error);
    return '0';
  }
}

async function getTokenBalanceOnCosmosChain (chain: SupportedCosmosChain, address: string, token: ICosmosToken): Promise<string> {
  try {
    logger.info(`[getTokenBalanceOnCosmosChain] Getting token balance on ${chain}...`, 'address:', address, 'token:', token);
    const decimals = token.decimals;
    const balances = await lcdService.getBalance(chain, address);
    logger.info('[getTokenBalanceOnCosmosChain] balances:', balances);
    const balance = _.find(balances, { denom: token.denom });
    if (balance?.amount) {
      const _balance = new Big(balance.amount)
        .div(10 ** decimals);
      return _balance.toString();
    }
    return '0';
  } catch (error) {
    logger.error(error);
    return '0';
  }
}

export default {
  getTokens,
  getTokenBalance
};
