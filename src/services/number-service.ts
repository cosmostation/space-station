import Big from 'big.js';

function convertWithDecimal (value: number | string, decimal: number, round: number = 4): string {
  let number = new Big(value);
  const _decimal = new Big(10).pow(decimal);
  return number.div(_decimal).round(round).toString();
}

function convertWithoutDecimal (value: number | string, decimal: number): string {
  let number = new Big(value);
  const _decimal = new Big(10).pow(decimal);
  return number.times(_decimal).toString();
}

export default {
  convertWithDecimal,
  convertWithoutDecimal
}
