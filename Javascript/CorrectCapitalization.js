// Given a string, return whether or not it uses capitalization correctly.
// A string correctly uses capitalization if all letters are capitalized, no letters are capitalized, or only the first letter is capitalized.
// EXAMPLES:
// "USA", return true
// "Calvin", return true
// "compUter", return false
// "coding", return true

const correctCapitalization = word => {
  let allCapitalized = true;

  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toUpperCase()) {
      allCapitalized = false;
    }

    if (!allCapitalized && i !== 0 && word[i] === word[i].toUpperCase()) {
      return false;
    }
  }

  return true;
}