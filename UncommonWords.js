// Given two strings representing sentences, return the words that are not common to both strings (i.e. the words that only appear in one of the sentences).
// You may assume that each sentence is a sequence of words (without punctuation) correctly separated using space characters.
// EXAMPLES:
// sentence1 = "the quick", sentence2 = "brown fox", return ["the", "quick", "brown", "fox"]
// sentence1 = "the tortoise beat the haire", sentence2 = "the tortoise lost to the haire", return ["beat", "to", "lost"]
// sentence1 = "copper coffee pot", sentence2 = "hot coffee pot", return ["copper", "hot"]

const uncommonWords = (sentence1, sentence2) => {
  // Convert strings to arrays of words
  // Filter each new array for every word not included in the other array
  // Combine found words

  sentence1 = sentence1.split(' ');
  sentence2 = sentence2.split(' ');

  let filtered1 = sentence1.filter(value => !sentence2.includes(value));
  let filtered2 = sentence2.filter(value => !sentence1.includes(value));

  return filtered1.concat(filtered2);
}