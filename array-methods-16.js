/*

Write a function called "getLongestWordOfMixedElements".

Given an array of mixed types, "getLongestWordOfMixedElements" returns the longest string in the given array.

Notes:

If the array is empty, it should return an empty string ("").
If the array contains no strings; it should return an empty string.

*/

function getLongestWordOfMixedElements(arr) {
    let filteredArr = [];
    let longestWord = '';
    for (let i = 0; i < arr.length; i++){
      if (typeof(arr[i])==='string'){
        filteredArr.push(arr[i])
      }
    }
    for (let i = 0; i < filteredArr.length; i++){
      if (filteredArr[i].length > longestWord.length){
        longestWord = filteredArr[i];
      }
    }
    return longestWord;
  }
  var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
  console.log(output); // --> 'word'

  /*
Write a function called "getLargestNumberAmongMixedElements".

Given any array, "getLargestNumberAmongMixedElements" returns the largest number in the given array.

Notes:

The array might contain values of a type other than numbers.
If the array is empty, it should return 0.
If the array contains no numbers, it should return 0.
*/

function getLargestNumberAmongMixedElements(arr) {
    let numArr = [];
    for (let i = 0; i < arr.length; i++){
      if ( typeof(arr[i]) === 'number'){
        numArr.push(arr[i])
      }
    }
    if (numArr.length === 0) return 0
    let biggestNumber = numArr[0]
    for(let i = 1; i < numArr.length; i++){
      if(numArr[i] > biggestNumber){
        biggestNumber = numArr[i]
      }
    }
    return biggestNumber;
  }
  var output = getLargestNumberAmongMixedElements([]);
  console.log(output); // --> 5