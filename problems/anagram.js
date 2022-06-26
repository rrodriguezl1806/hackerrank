function anagram(s1,s2) {
  // TO DO
  const s1Length = s1.length
  for (let i = 0; i < s1Length; i++) {
    const element1 = s1[i];
    if (!s2.includes(element1)) {
        return false;
    }
  }
  return true;
}

anagram('finder', 'friend')

module.exports = anagram