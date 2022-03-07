import { CHANGE_TICKER } from './constants';

export function changeTicker(ticker) {
  return {
    type: CHANGE_TICKER,
    ticker,
  };
}
