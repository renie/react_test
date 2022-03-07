import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;
const selectRouter = state => state.router;

const makeSelectTicker = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.ticker,
  );

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error,
  );

const makeSelectData = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.data,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

export {
  selectGlobal,
  makeSelectTicker,
  makeSelectLoading,
  makeSelectError,
  makeSelectData,
  makeSelectLocation,
};
