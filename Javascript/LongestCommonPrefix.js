// Given an array of strings, return the longest common prefix that is shared amongst all strings.
// Note: you may assume all strings only contain lowercase alphabetical characters.
// EXAMPLES:
// ["colorado", "color", "cold"], return "col"
// ["a", "b", "c"], return ""
// ["spot", "spotty", "spotted"], return "spot"

const longestCommonPrefix = array => {
  let prefix = '';

  for (let i = 0; i < array[0].length; i++) {
    let currentChar = array[0][i];
    for (let j = 1; j < array.length; j++) {
      if (array[j][i] !== currentChar) {
        if (prefix.length === 0) {
          return null;
        }

       return prefix;
      }
    }
    prefix += currentChar;
  }

  return prefix;
}
