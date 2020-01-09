
/**
 * Given an array of integers, calculate the fractions of its elements that are positive, negative, 
 and are zeros. Print the decimal value of each fraction on a new line.
 *
 * @param {Array} arr
 */
function plusMinus(arr) {
  // -4 3 -9 0 4 1
  const countElement = arr.length
  let countPositiveElement = 0
  let countNegativeElement = 0
  let countZeroElement = 0
  for(let i = 0; i < countElement; i++) {

  }
  for (const key in arr) {
    const element = arr[key];
    if(Math.sign(element) == 1) {
      countPositiveElement ++
    } else if(Math.sign(element) == -1) {
      countNegativeElement ++
    } else {
      countZeroElement ++
    }
  }
  console.log(countPositiveElement, countNegativeElement, countZeroElement);
  return [countPositiveElement/countElement, countNegativeElement/countElement, countZeroElement/countElement]

}
console.log(plusMinus([-4, 3, -9, 0, 4, 1]))
