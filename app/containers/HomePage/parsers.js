export const parseTickerData = (ticker, tickerName) => ({
  SYMBOL: tickerName.substring(1),
  BID: ticker[0],
  BID_SIZE: ticker[1],
  ASK: ticker[2],
  ASK_SIZE: ticker[3],
  DAILY_CHANGE: ticker[4],
  DAILY_CHANGE_RELATIVE: ticker[5],
  LAST_PRICE: ticker[6],
  VOLUME: ticker[7],
  HIGH: ticker[8],
  LOW: ticker[9],
});
