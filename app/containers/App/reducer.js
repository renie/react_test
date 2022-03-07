import produce from 'immer';
import {
  CHANGE_TICKER,
  LOAD_TICKER_SUCCESS,
  LOAD_TICKER,
  LOAD_TICKER_ERROR,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
  ticker: 'tBTCUSD',
  data: [],
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_TICKER:
        draft.loading = true;
        draft.error = false;
        draft.data = [];
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
    }
  });

export default appReducer;
