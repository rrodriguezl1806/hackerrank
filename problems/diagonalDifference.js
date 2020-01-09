
function diagonalDifference(arr) {
  // Write your code here
  const dimensions = arr.length;
  let sumLeftToRight = 0
  let sumRightToLeft = 0

  for(let i = 0; i < dimensions; i++) {
    sumLeftToRight = sumLeftToRight + arr[i][i]
    const reverse = arr[i].reverse()
    sumRightToLeft = sumRightToLeft + reverse[i]
  }
  return Math.abs(sumLeftToRight - sumRightToLeft)
}
console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]));