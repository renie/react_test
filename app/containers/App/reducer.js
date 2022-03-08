import produce from 'immer';
import {
  CHANGE_TICKER,
  LOAD_TICKER_SUCCESS,
  LOAD_TICKER,
  LOAD_TICKER_ERROR,
  LOAD_TICKER_LIST_SUCCESS,
  LOAD_TICKER_LIST,
  LOAD_TICKER_LIST_ERROR,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
  ticker: 'tBTCUSD',
  data: {},
  tickerList: [],
  loadingTickerList: false,
  errorTickerList: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_TICKER:
        draft.loading = true;
        draft.error = false;
        draft.data = {};
        break;

      case LOAD_TICKER_SUCCESS:
        draft.data = action.data;
        draft.loading = false;
        draft.currentTicker = action.ticker;
        break;

      case LOAD_TICKER_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case CHANGE_TICKER:
        draft.ticker = action.ticker;
        break;

      case LOAD_TICKER_LIST:
        draft.loadingTickerList = true;
        draft.errorTickerList = false;
        draft.tickerList = [];
        break;

      case LOAD_TICKER_LIST_SUCCESS:
        draft.tickerList = action.tickerList;
        draft.loadingTickerList = false;
        break;

      case LOAD_TICKER_LIST_ERROR:
        draft.errorTickerList = action.errorTickerList;
        draft.loadingTickerList = false;
        break;
    }
  });

export default appReducer;
