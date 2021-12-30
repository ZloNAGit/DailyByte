// Given a string, return whether or not it forms a palindrome ignoring case and non-alphabetical characters.
// Note: a palindrome is a sequence of characters that reads the same forwards and backwards.
// EXAMPLES:
// "level", return true
// "algorithm", return false
// "A man, a plan, a canal: Panama.", return true

const validPalindrome = string => {
  return string === string.split('').reverse().join('');
}