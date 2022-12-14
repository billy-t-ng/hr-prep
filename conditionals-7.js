/* areValidCredentials


Write a function called "areValidCredentials".

Given a name and a password, "areValidCredentials", returns true if the name is longer than 3 characters, AND, the password is at least 8 characters long. Otherwise it returns false.
 */

function areValidCredentials(name, password) {
    if (name.length > 3 && password.length >= 8){
      return true;
    }
    return false;
  }

var output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> true

/* findMinLengthOfThreeWords

Write a function called "findMinLengthOfThreeWords".

Given 3 words, "findMinLengthOfThreeWords" returns the length of the shortest word.

 */

function findMinLengthOfThreeWords(word1, word2, word3) {
    let wordArr = [word1, word2, word3];
    let shortestWord = word1;
    for (let i = 1; i < wordArr.length; i++){
      if (wordArr[i].length < shortestWord.length){
        shortestWord = wordArr[i];
        console.log(shortestWord)
      }
    }
    return shortestWord.length;
  }
  
var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1

/* 
findMaxLengthOfThreeWords
Write a function called "findMaxLengthOfThreeWords".

Given 3 words, "findMaxLengthOfThreeWords" returns the length of the longest word.
 */

function findMaxLengthOfThreeWords(word1, word2, word3) {
    const wordArr = [word1, word2, word3];
    let longestWord = word1;
    for (let i = 1; i < wordArr.length; i++){
      if (wordArr[i].length > longestWord.length){
        longestWord = wordArr[i]
      }
    }
    return longestWord.length;
  }
  
  var output = findMaxLengthOfThreeWords('a', 'be', 'see');
  console.log(output); // --> 3