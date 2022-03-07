import {
  LOAD_TICKER,
  CHANGE_TICKER,
  LOAD_TICKER_SUCCESS,
  LOAD_TICKER_ERROR,
} from './constants';

export function loadTicker() {
  return {
    type: LOAD_TICKER,
  };
}

export function changeTicker(ticker) {
  return {
    type: CHANGE_TICKER,
    ticker,
  };
}

export function tickerLoaded(data, ticker) {
  return {
    type: LOAD_TICKER_SUCCESS,
    data,
    ticker,
  };
}

export function tickerLoadingError(error) {
  return {
    type: LOAD_TICKER_ERROR,
    error,
  };
}
