// Given a string, reverse all of its characters and return the resulting string.
// EXAMPLES:
// “Cat”, return “taC”
// “The Daily Byte”, return "etyB yliaD ehT”
// “civic”, return “civic”

const reverseString = string => {
  let reversed = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }

  return reversed;
}