/**
 * Monica wants to buy a keyboard and a USB drive from her favorite electronics store. 
 * The store has several models of each. 
 * Monica wants to spend as much as possible for the  items, given her budget.
 * Given the price lists for the store's keyboards and USB drives, and Monica's budget, 
 * find and print the amount of money Monica will spend. 
 * If she doesn't have enough money to both a keyboard and a USB drive, print -1 instead. 
 * She will buy only the two required items.
 *
 * @param {Array<Number>} keyboards an array of integers representing keyboard prices
 * @param {Array<Number>} drives an array of integers representing drive prices
 * @param {Number} b the units of currency in Monica's budget
 * @returns {Number} the maximum total price for the two items within Monica's budget, or -1 if she cannot afford both items.
 */
function getMoneySpent(keyboards, drives, b) {
  const keyboardsOrdered = order(keyboards)
  const drivesOrdered = order(drives)

  for (const keyboard of keyboardsOrdered) {
    for (const drive of drivesOrdered) {
      if (keyboard + drive <= b) {
        return keyboard + drive
      }
    }
  }
  return -1
}
// function getMoneySpent(keyboards, drives, s){
//   let max = -1;
//   for(let i = 0; i < keyboards.length; i++){
//       var temp = 0;
//       for(let j = 0; j < drives.length; j++){
//           if(keyboards[i] + drives[j] <= s){
//               temp = keyboards[i] + drives[j];
//               max = temp > max ? temp : max;
//           }
//       }
//   }
//   return max;
//  }

/**
 *
 *
 * @param {Array} ar
 */
function order(ar) {
  return ar.sort((a, b) => a < b)
}

module.exports = getMoneySpent