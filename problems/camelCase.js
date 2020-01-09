/**
 * Given s, print the number of words in s on a new line.
 *
 * @param {String} s (saveChangesInTheEditor)
 * @returns {Number} (5)
 */
function camelCase(s) {
  let countWords = 1
  for (let i = 0; i < s.length; i++) {
    const character = s.charAt(i);
    if (character == character.toUpperCase()) {
      countWords ++
    }
  }
  return countWords
}
camelCase("saveChangesInTheEditor")

module.exports = camelCase
