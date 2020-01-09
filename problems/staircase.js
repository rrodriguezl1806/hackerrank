/**
 *Observe that its base and height are both equal to , 
 and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.
 Write a program that prints a staircase of size .
 *
 * @param {Number} n
 */
function staircase(n) {
  let character = ''
  let space = ' '
  for (let i = 0; i < n; i++) {
    space = ' '.repeat(n - 1 - i)
    character = space + '#'.repeat(i + 1)
    console.log(character);
  }
}
staircase(8)