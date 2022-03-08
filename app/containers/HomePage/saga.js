import { call, put, select, takeLatest, all } from 'redux-saga/effects';
import { LOAD_TICKER, LOAD_TICKER_LIST } from 'containers/App/constants';
import {
  tickerLoaded,
  tickerLoadingError,
  tickerListLoaded,
  tickerListLoadingError,
} from 'containers/App/actions';
import request from 'utils/request';
import { makeSelectTicker } from 'containers/App/selectors';
import { parseTickerData } from './parsers';

export function* getTicker() {
  const ticker = yield select(makeSelectTicker());
  const requestURL = `https://bitfinex-proxy.herokuapp.com/ticker/${ticker}`;

  try {
    const data = yield call(request, requestURL);
    yield put(tickerLoaded(parseTickerData(data, ticker), ticker));
  } catch (err) {
    yield put(tickerLoadingError(err));
  }
}

export function* getTickerList() {
  const requestURL = `https://bitfinex-proxy.herokuapp.com/conf/pub:list:pair:exchange`;

  try {
    const data = yield call(request, requestURL);
    yield put(tickerListLoaded(data[0]));
  } catch (err) {
    yield put(tickerListLoadingError(err));
  }
}

export default function* getData() {
  yield all([
    takeLatest(LOAD_TICKER, getTicker),
    takeLatest(LOAD_TICKER_LIST, getTickerList),
  ]);
}
