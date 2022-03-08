import { defineMessages } from 'react-intl';

export const scope = 'reactTest.containers.HomePage';

export default defineMessages({
  change_language: {
    id: `${scope}.change_language`,
    defaultMessage: 'Change language',
  },
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Ticker Tracker',
  },
  symbol: {
    id: `${scope}.symbol`,
    defaultMessage: 'symbol',
  },
  bid: {
    id: `${scope}.bid`,
    defaultMessage: 'last bid',
  },
  bid_size: {
    id: `${scope}.bid_size`,
    defaultMessage: 'last 25 bids (s)',
  },
  ask: {
    id: `${scope}.ask`,
    defaultMessage: 'last ask',
  },
  ask_size: {
    id: `${scope}.ask_size`,
    defaultMessage: 'last 25 asks (s)',
  },
  daily_change: {
    id: `${scope}.daily_change`,
    defaultMessage: 'daily change',
  },
  daily_change_relative: {
    id: `${scope}.daily_change_relative`,
    defaultMessage: 'daily change relative',
  },
  last_price: {
    id: `${scope}.last_price`,
    defaultMessage: 'last price',
  },
  volume: {
    id: `${scope}.volume`,
    defaultMessage: 'volume',
  },
  high: {
    id: `${scope}.high`,
    defaultMessage: 'high',
  },
  low: {
    id: `${scope}.low`,
    defaultMessage: 'low',
  },
});
