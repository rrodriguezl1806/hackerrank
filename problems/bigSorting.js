/**
 * Consider an array of numeric strings where each string is a positive number
 * with anywhere from  to  digits. 
 * Sort the array's elements in non-decreasing, or ascending order of their integer values
 * and print each element of the sorted array on a new line.
 *
 * @param {Array} unsorted [4, 234, 6, 584949]
 * @returns {Array} sorted [4, 6, 234, 584949]
 */
function bigSorting(unsorted) {
  const sorted = unsorted.sort((a, b) => {
    if (a > b) {
      return 1;
    }
    if (b > a) {
      return -1;
    }
    return 0;
  })
  return sorted
}
module.exports = bigSorting