/*
Write a function called "findShortestWordAmongMixedElements".

Given an array, "findShortestWordAmongMixedElements" returns the shortest string within the given array.

Notes:

If there are ties, it should return the first element to appear in the given array.
Expect the given array to have values other than strings.
If the given array is empty, it should return an empty string.
If the given array contains no strings, it should return an empty string.
*/

function findShortestWordAmongMixedElements(arr) {
    let filtered = [];
    let shortestWord;
    if(arr.length === 0){
      return ''
    }
    else {
      for (let i = 0; i < arr.length; i++){
        if(typeof(arr[i])==='string'){
          filtered.push(arr[i])
        }
        else continue
        }
        shortestWord = filtered[0];
        if(filtered.length === 0){
          return '';
        }
        else{
          for (let i = 0; i < filtered.length; i++){
          if (shortestWord.length === filtered[i].length){
            continue;
          }
          else if (filtered[i].length < shortestWord.length){
            shortestWord = filtered[i]          
          }
        }
      }
    return shortestWord
    }
  }
  var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
  console.log(output); // --> 'two'

  /*
Write a function called "findSmallestNumberAmongMixedElements".

Given an array of mixed elements, "findSmallestNumberAmongMixedElements" returns the smallest number within the given array.

Notes:

If the given array is empty, it should return 0.
If the array contains no numbers, it should return 0.

*/

function findSmallestNumberAmongMixedElements(arr) {
    let filtered = [];
    let smallestNumber;
    if(arr.length === 0){
      return 0;
    }
    else {
      for (let i = 0; i < arr.length; i++){
        if(typeof arr[i] === 'number'){
          filtered.push(arr[i])
        }
      }
      let smallestNumber = filtered[0]
      if (filtered.length === 0) return 0;
      else{
        for (let i = 0; i < filtered.length; i++){
          if(filtered[i] < smallestNumber){
            smallestNumber = filtered[i]
          }
        }
        return smallestNumber;
      }
    }
  }
  var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
  console.log(output); // --> 4