import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_TICKER } from 'containers/App/constants';
import { tickerLoaded, tickerLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectTicker } from 'containers/App/selectors';

export function* getTicker() {
  const ticker = yield select(makeSelectTicker());
  const requestURL = `https://bitfinex-proxy.herokuapp.com/ticker/${ticker}`;

  try {
    const data = yield call(request, requestURL);
    yield put(tickerLoaded(data, ticker));
  } catch (err) {
    yield put(tickerLoadingError(err));
  }
}

export default function* tickerData() {
  yield takeLatest(LOAD_TICKER, getTicker);
}
