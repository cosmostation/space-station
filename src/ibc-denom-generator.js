const crypto = require('crypto');
const readline = require('readline');
const _ = require('lodash');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question (question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

function getIbcDenom (channel, fromDenom) {
  let toDenom = crypto.createHash('sha256').update(`transfer/${channel}/${fromDenom}`).digest('hex');
  toDenom = _.toUpper(toDenom);
  console.log(`IBC Denom for denom ${fromDenom} and channel ${channel}: ${toDenom}`);
}

const denoms = [
  ['channel-29', 'gravity0x6B175474E89094C44Da98b954EedeAC495271d0F'], // DAI
  ['channel-29', 'gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'], // WETH
  ['channel-29', 'gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'], // USDC
  ['channel-29', 'ugraviton']
];

_.map(denoms, ([channel, denom]) => getIbcDenom(channel, denom));
