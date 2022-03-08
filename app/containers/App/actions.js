import {
  CHANGE_TICKER,
  LOAD_TICKER,
  LOAD_TICKER_SUCCESS,
  LOAD_TICKER_ERROR,
  LOAD_TICKER_LIST,
  LOAD_TICKER_LIST_SUCCESS,
  LOAD_TICKER_LIST_ERROR,
} from './constants';

export function changeTicker(ticker) {
  return {
    type: CHANGE_TICKER,
    ticker,
  };
}

export function loadTicker() {
  return {
    type: LOAD_TICKER,
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

export function loadTickerList() {
  return {
    type: LOAD_TICKER_LIST,
  };
}

export function tickerListLoaded(tickerList) {
  return {
    type: LOAD_TICKER_LIST_SUCCESS,
    tickerList,
  };
}

export function tickerListLoadingError(error) {
  return {
    type: LOAD_TICKER_LIST_ERROR,
    error,
  };
}
