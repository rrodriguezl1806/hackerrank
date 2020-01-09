/**
 * You are in charge of the cake for your niece's birthday and have decided 
 * the cake will have one candle for each year of her total age. 
 * When she blows out the candles, she’ll only be able to blow out the tallest ones. 
 * Your task is to find out how many candles she can successfully blow out.
 *
 * @param {Array} ar an array of integers representing candle heights [4, 4, 1, 3]
 * @returns {Number} number of candles that can be blown out on a new line 
 */
function birthdayCakeCandles(ar) {
  const order = ar.sort((a, b) => a < b)
  let blownOut = 0
  for (let i = 0; i < order.length; i++) {
    const element = order[i];
    if (element === order[0]) {
      blownOut ++
    }
  }
  return blownOut
}
module.exports = birthdayCakeCandles