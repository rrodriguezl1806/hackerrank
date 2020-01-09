/**
 *  Strong Password
 *  Its length is at least 6.
    It contains at least one digit.
    It contains at least one lowercase English character.
    It contains at least one uppercase English character.
    It contains at least one special character. The special characters are: !@#$%^&*()-+
 * @param {Number} n
 * @param {String} password
 * @returns {Number} (Return the minimum number of characters to make the password strong)
 */
function minimumNumber(n, password) {
  let isLength = false 
  let hasLowerCase, hasUpperCase, hasNumber, hasSpecialCharacter = false
  let minNumberCharactersPasswordStrong = 5

  for (let i = 0; i < password.length; i++) {
    const element = password.charAt(i);
    if (element == element.toUpperCase() && !hasUpperCase) { // It contains at least one uppercase English character.
      minNumberCharactersPasswordStrong --
      hasUpperCase = true
    }
    if (element == element.toLowerCase() && !hasLowerCase) { // It contains at least one lowercase English character.
      minNumberCharactersPasswordStrong --
      hasLowerCase = true
    }
    if (!isNaN(element) && !hasNumber) { // It contains at least one digit.
      minNumberCharactersPasswordStrong --
      hasNumber = true
    }
    if (isSpacialCharacters(element) && !hasSpecialCharacter) { // It contains at least one special character.
      minNumberCharactersPasswordStrong --
      hasSpecialCharacter = true
    }
  }

  if (n >= 6) { // Its length is at least 6.
    isLength = true
    minNumberCharactersPasswordStrong --
  } else {
    minNumberCharactersPasswordStrong = (6 - n) + (minNumberCharactersPasswordStrong - 1)
  }
  console.log(isLength,
    hasLowerCase,
    hasUpperCase,
    hasNumber,
    hasSpecialCharacter);
  return minNumberCharactersPasswordStrong
}
function isSpacialCharacters(element) {
  const spacialCharacters = "!@#$%^&*()-+"
  for (let i = 0; i < spacialCharacters.length; i++) {
    const spacialCharacter = spacialCharacters.charAt(i);
    // console.log(spacialCharacter, element);
    if (spacialCharacter == element) {
      return true
    }
  }
  return false
}
console.log(minimumNumber(3, "Ab1"));
