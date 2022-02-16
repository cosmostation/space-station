import Big from 'big.js';
import ethTokens from 'constants/eth-tokens.json';
import goerliTokens from 'constants/goerli-tokens.json';
import _ from 'lodash';
import lcdService from 'services/cosmos-tx/cosmos-sdk-lcd-service';
import ethWalletManager from 'services/eth-wallet/eth-wallet-manager';
import loggerFactory from 'services/util/logger-factory';
import typeHelper from 'services/util/type-helper';
import { IERC20Token, IToken, SupportedChain, SupportedCosmosChain, SupportedEthChain } from 'types';

const GRAVITY_BRIDGE_PREFIX = 'gravity';
const GRAVITY_BRIDGE_ERC20_PREFIX = 'gravity0x';
const logger = loggerFactory.getLogger('[tokenListService]');

async function getTokens (fromChain: SupportedChain, toChain: SupportedChain, address?: string): Promise<IToken[]> {
  logger.info('[getTokens] Getting tokens...', 'from:', fromChain, 'to:', toChain, 'address:', address);
  if (fromChain === SupportedChain.GravityBridge && typeHelper.isSupportedEthChain(toChain)) {
    return getErc20TokensOnGravityBridge(toChain, address);
  } else if (typeHelper.isSupportedEthChain(fromChain)) {
    return getErc20TokensOnChain(fromChain);
  } else {
    return [];
  }
}

async function getTokenBalance (chain: SupportedChain, token: IToken, address: string, rounds: number): Promise<string> {
  logger.info('[getTokens] Getting token balance...', 'chain:', chain, 'token:', token, 'address:', address);
  if (token.erc20) {
    if (typeHelper.isSupportedEthChain(chain)) {
      return getErc20TokenBalance(chain, token.erc20, address, rounds);
    } else if (chain === SupportedChain.GravityBridge) {
      return getErc20TokenBalanceOnGravityBridge(address, token.erc20, rounds);
    }
  }
  return '0';
}

async function getErc20TokensOnChain (chain: SupportedChain): Promise<IToken[]> {
  switch (chain) {
    case SupportedChain.Eth: {
      return _.map(ethTokens, (token) => typeHelper.convertErc20ToToken(token));
    } case SupportedChain.Goerli: {
      return _.map(goerliTokens, (token) => typeHelper.convertErc20ToToken(token));
    } default: {
      return [];
    }
  }
}

async function getErc20TokensOnGravityBridge (toChain: SupportedChain, address?: string): Promise<IToken[]> {
  try {
    if (!address) {
      logger.info('[getErc20TokensOnGravityBridge] No address for gravity bridge ERC20 tokens.');
      return [];
    }

    const tokens = await lcdService.getBalance(SupportedCosmosChain.GravityBridge, address);
    const erc20Tokens = _.filter(tokens, (token) => _.startsWith(token.denom, GRAVITY_BRIDGE_ERC20_PREFIX));
    const requests = _.map(erc20Tokens, async (balance): Promise<IToken | null> => {
      const address = _.last(_.split(balance.denom, GRAVITY_BRIDGE_PREFIX));
      if (address) {
        const token = getTokenFromConstants(toChain, address);
        if (token) {
          return typeHelper.convertErc20ToToken(token);
        } else if (typeHelper.isSupportedEthChain(toChain)) {
          const erc20Token = await ethWalletManager.getERC20Info(toChain as SupportedEthChain, address);
          if (erc20Token) {
            return typeHelper.convertErc20ToToken(erc20Token);
          }
          return null;
        }
      }
      return null;
    });
    const tokenInfos = await Promise.all(requests);
    return _.compact(tokenInfos);
  } catch (error) {
    logger.error('[getErc20TokensOnGravityBridge]', error);
    return [];
  }
}

function getTokenFromConstants (toChain: SupportedChain, address: string): IERC20Token | undefined {
  switch (toChain) {
    case SupportedChain.Eth: return _.find(ethTokens, { address });
    case SupportedChain.Goerli: return _.find(goerliTokens, { address });
    default: return undefined;
  }
}

async function getErc20TokenBalance (chain: SupportedEthChain, token: IERC20Token, address: string, rounds: number): Promise<string> {
  try {
    logger.info(`[getErc20TokenBalance] Getting ERC20 balance on ${chain}...`);
    const decimals = token.decimals;
    const response = await ethWalletManager.getERC20Balance(chain, token.address, address);
    logger.info('ERC20 balance:', response);
    const _balance = new Big(response)
      .div(10 ** decimals)
      .round(rounds, Big.roundDown);
    return _balance.toString();
  } catch (error) {
    logger.error(error);
    return '0';
  }
}

async function getErc20TokenBalanceOnGravityBridge (address: string, token: IERC20Token, rounds: number): Promise<string> {
  try {
    logger.info('[getErc20TokenBalanceOnGravityBridge] Getting ERC20 balance on Gravity Bridge...');
    const decimals = token.decimals;
    const balances = await lcdService.getBalance(SupportedCosmosChain.GravityBridge, address);
    const erc20Balances = _.find(balances, (balance) => balance.denom === `gravity${token.address}`);
    if (erc20Balances?.amount) {
      const _balance = new Big(erc20Balances.amount)
        .div(10 ** decimals)
        .round(rounds, Big.roundDown);
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
