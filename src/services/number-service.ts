import Big from 'big.js';

function convertWithDecimal (value: number | string, decimal: number, round = 4): string {
  const number = new Big(value);
  const _decimal = new Big(10).pow(decimal);
  return number.div(_decimal).round(round).toString();
}

function convertWithoutDecimal (value: number | string, decimal: number): string {
  const number = new Big(value);
  const _decimal = new Big(10).pow(decimal);
  return number.times(_decimal).toString();
}

export default {
  convertWithDecimal,
  convertWithoutDecimal
};
