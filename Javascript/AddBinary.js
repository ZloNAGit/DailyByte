// Given two binary strings (strings containing only 1s and 0s) return their sum (also as a binary string).
// Note: neither binary string will contain leading 0s unless the string itself is 0
// EXAMPLES:
// "100" + "1", return "101"
// "11" + "1", return "100"
// "1" + "0", return  "1"

const addBinary = (str1, str2) => {
  return (parseInt(str1, 2) + parseInt(str2, 2)).toString(2)
}