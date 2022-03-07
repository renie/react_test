import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectTicker = () =>
  createSelector(
    selectHome,
    homeState => homeState.ticker,
  );

export { selectHome, makeSelectTicker };
