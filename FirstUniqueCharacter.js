// Given a string, return the index of its first unique character. If a unique character does not exist, return -1.
// EXAMPLES:
// "abcabd", return 2
// "thedailybyte", return 1
// "developer", return 0
// "developerdeveloper", return -1

const firstUniqueCharacter = str => {
  // Initialize an object to hold count of str's characters
  // Iterate through str's characters
    // If character does not exist in object, create it and set to one
    // Otherwise increment by one
  // Iterate through str's characters a second time
    // If current character holds value of one in count object
      // Return that index
  // If no unique characters found return -1

  let count = {};

  for (let i = 0; i < str.length; i++) {
    if (count[str[i]] === undefined) {
      count[str[i]] = 1;
    } else {
      count[str[i]]++;
    }
  }

  for (let j = 0; j < str.length; j++) {
    if (count[str[j]] === 1) {
      return j;
    }
  }

  return -1;
}