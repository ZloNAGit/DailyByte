// Given an array of integers, return whether or not two numbers sum to a given target, k.
// Note: you may not sum a number with itself.
// EXAMPLES:
// [1, 3, 8, 2], k = 10, return true (8 + 2)
// [3, 9, 13, 7], k = 8, return false
// [4, 2, 6, 5, 2], k = 4, return true (2 + 2)
const twoSums = (arrOfNums, target) => {
  for (let i = 0; i < arrOfNums.length; i++) {
    for (let j = i + 1; j < arrOfNums.length; j++) {
      if (arrOfNums[j] + arrOfNums[i] === target) {
        return true;
      }
    }
  }

  return false;
}