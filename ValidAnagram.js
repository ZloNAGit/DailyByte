// Given two strings s and t return whether or not s is an anagram of t.
// Note: An anagram is a word formed by reordering the letters of another word.
// EXAMPLES:
// s = "cat", t = "tac", return true
// s = "listen", t = "silent", return true
// s = "program", t = "function", return false

const validAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  let count = {};

  // Populate count object with a total count of each character in both strings
  for (let i = 0; i < s.length; i++) {
    if (count[s[i]] !== undefined) {
      count[s[i]]++;
    } else {
      count[s[i]] = 1;
    }

    if (count[t[i]] !== undefined) {
      count[t[i]]++;
    } else {
      count[t[i]] = 1;
    }
  }

  // Character count should be even if exists in both words
  for (let character in count) {
    if (count[character] % 2 !== 0) {
      return false;
    }
  }

  return true;
}