/**
 * John works at a clothing store. He has a large pile of socks 
 * that he must pair by color for sale. 
 * Given an array of integers representing the color of each sock, 
 * determine how many pairs of socks with matching colors there are.
 *
 * @param {Number} n the number of socks in the pile ej: 7
 * @param {Array<Number>} ar the colors of each sock ej: [1,2,1,2,1,3,2]
 * @returns {Number} how many pairs of socks with matching colors there are ej: 2
 */
function sockMerchant(n, ar) {
  const long = ar.length
  let pairsOfSocks = 0
  let newArr = [...ar]
  for (let i = 0; i < long; i++) {
    const element = newArr[i];
    const socks = ar.filter((value) => element == value)
    ar = deleteElement(ar, element)
    pairsOfSocks += Math.trunc(socks.length / 2)
  }
  return pairsOfSocks
}
function deleteElement(ar, element) {
  for (let i = 0; i < ar.length;) {
    const element1 = ar[i];
    if(element1 === element) {
      ar.splice(i, 1)
    } else {
      i++
    }
  }
  return ar
}

module.exports = sockMerchant