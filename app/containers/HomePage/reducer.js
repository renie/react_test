import produce from 'immer';
import { CHANGE_TICKER } from './constants';

export const initialState = {
  ticker: 'tBTCUSD',
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_TICKER:
        draft.ticker = action.ticker;
        break;
    }
  });

export default homeReducer;
