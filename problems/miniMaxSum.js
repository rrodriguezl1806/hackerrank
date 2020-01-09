/**
 *Given five positive integers, find the minimum and maximum values
  that can be calculated by summing exactly four of the five integers. 
  Then print the respective minimum and maximum values as a single line 
  of two space-separated long integers.
 *
 * @param {Array} arr ([1,2,3,4,5])
 */
function miniMaxSum(arr) {   XXX
  let minimumSum = 0
  let maximumSum = 0
  for (let i = 0; i < arr.length; i++) {
    const element1 = arr[i];
    if (element1 !== arr[i]) {
      minimumSum += element1
    }
    // const maximum = arr[i + 1];
    // // if (i < arr.length - 1) {
    //   maximumSum += maximum
    // // }
  }
  console.log(`${minimumSum} ${maximumSum}`);
}
miniMaxSum([1,2,3,4,5])

