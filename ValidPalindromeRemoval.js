// Given a string and the ability to delete at most one character, return whether or not it can form a palindrome.
// Note: a palindrome is a sequence of characters that reads the same forwards and backwards.
// EXAMPLES:
// "abcba", return true
// "foobof", return true (remove the first 'o', the second 'o', or 'b')
// "abccab", return false
const { validPalindrome } = require('./ValidPalindrome.js');

const validPalindromeRemoval = string => {
  if (validPalindrome(string)) {
    return true;
  }

  for (let i = 0; i < string.length; i++) {
    let firstHalf = string.slice(0, i);
    let secondHalf = string.slice(i + 1);
    let iRemoved = firstHalf + secondHalf;
    if (validPalindrome(iRemoved)) {
      return true;
    }
  }

  return false;
}