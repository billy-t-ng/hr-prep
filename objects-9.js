
/* Write a function called "getOddLengthWordsAtProperty".

Given an object and a key, "getOddLengthWordsAtProperty" returns an array containing all the odd length word elements of the array located at the given key.

Notes:

If the array is empty, it should return an empty array.
If it contains no odd length elements, it should return an empty array.
If the property at the given key is not an array, it should return an empty array.
If there is no property at the given key, it should return an empty array. */

var obj = {
    key: ['It', 'has', 'some', 'words']
  };
  
  function getOddLengthWordsAtProperty(obj, key) {
    let oddArray = [];
    if (Array.isArray(obj[key])){
      for(let i = 0; i < obj[key].length; i++){
        if(obj[key][i].length % 2 === 1){
          oddArray.push(obj[key][i])
        } 
      }
    }
    else {return [];}
    return oddArray;
  }
  var output = getOddLengthWordsAtProperty(obj, 'key');
  console.log(output); // --> ['has', 'words']

  
/* Write a function called "getAverageOfElementsAtProperty".

Given an object and a key, "getAverageOfElementsAtProperty" returns the average of all the elements in the array located at the given key.

Notes:

If the array at the given key is empty, it should return 0.
If the property at the given key is not an array, it should return 0.
If there is no property at the given key, it should return 0. */

/*  Cannot pass the test ✗ it should return the average of all the elements of the array located at key
  Error:
  expected 0 to deeply equal 3

  But I cannot get it to fail on my end */

var obj = {
    key: []
  };
  
  function getAverageOfElementsAtProperty(obj, key) {
    let total = 0;
    if (Array.isArray((obj.key)) && (obj.key.length > 0)){
      for (let i = 0; i < obj.key.length; i++){
        total += obj.key[i];
      }
    }
    else return 0;
    return total/obj.key.length;
  }
  var output = getAverageOfElementsAtProperty(obj, 'key');
  console.log(output); // --> 2

  
/*Write a function called "getEvenLengthWordsAtProperty".

Given an object and a key, "getEvenLengthWordsAtProperty" returns an array containing all the even length word elements of the array located at the given key.

Notes:

If the array is empty, it should return an empty array.
If it contains no even length elements, it should return an empty array.
If the property at the given key is not an array, it should return an empty array.
If there is no property at the key, it should return an empty array.*/
/*  Cannot pass the test ✗ it should return the average of all the elements of the array located at key
  Error:
  expected 0 to deeply equal 3

  But I cannot get it to fail on my end */
  
var obj = {
  key: ['a', 'long', 'game']
};

function getEvenLengthWordsAtProperty(obj, key) {
  let resultArray = [];
  if (Array.isArray((obj.key)) && (obj.key.length > 0)){
    for (let i = 0; i < obj.key.length; i++){
      if(obj.key[i].length % 2 === 0){
        resultArray.push(obj.key[i]);
      }
    }
  }
  else return [];
  return resultArray;
}
var output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
