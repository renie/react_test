export const parseTickerData = (ticker, tickerName) => ({
  symbol: tickerName.substring(1),
  bid: ticker[0],
  bid_size: ticker[1],
  ask: ticker[2],
  ask_size: ticker[3],
  daily_change: ticker[4],
  daily_change_relative: ticker[5],
  last_price: ticker[6],
  volume: ticker[7],
  high: ticker[8],
  low: ticker[9],
});
