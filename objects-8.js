
/* Write a function called "getElementsGreaterThan10AtProperty".

Given an object and a key, "getElementsGreaterThan10AtProperty" returns an array containing the elements within the array, located at the given key, that are greater than 10.

Notes:

If the array is empty, it should return an empty array.
If the array contains no elements greater than 10, it should return an empty array.
If the property at the given key is not an array, it should return an empty array.
If there is no property at the key, it should return an empty array. */

var obj = {
    key: [1, 20, 30]
  };
  
  function getElementsGreaterThan10AtProperty(obj, key) {
    
    let resultArray = [];
    if ((obj.length === 0) || !(Array.isArray(obj[key])) || obj[key] === undefined) {return []}
    for (let i = 0; i < obj[key].length; i++){
      if(obj[key][i] > 10){
        resultArray.push(obj[key][i])
      }
    }
    return resultArray;
  }
  var output = getElementsGreaterThan10AtProperty(obj, 'key');
  console.log(output); // --> [20, 30]


/* Write a function called "getFirstElementOfProperty".

Given an object and a key, "getFirstElementOfProperty" returns the first element of the array located at the given key.

Notes:

If the array is empty, it should return undefined.
If the property at the given key is not an array, it should return undefined.
If there is no property at the key, it should return undefined. */

var obj = {
    key: [1, 2, 4]
  };

  function getFirstElementOfProperty(obj, key) {
  
    if (Array.isArray(obj[key])) return obj[key][0]
    else return undefined;
  }
var output = getFirstElementOfProperty(obj, 'key');
console.log(output); // --> 1


/* Write a function called "getNthElementOfProperty".

Given an object and a key, "getNthElementOfProperty" returns the nth element of an array located at the given key.

Notes:

If the array is empty, it should return undefined.
If n is out of range, it should return undefined.
If the property at the given key is not an array, it should return undefined.
If there is no property at the key, it should return undefined. */

var obj = {
    key: [1, 2, 6]
  };
  
  function getNthElementOfProperty(obj, key, n) {
    if (Array.isArray(obj[key])) return obj[key][n]
    else return undefined;
  }
  var output = getNthElementOfProperty(obj, 'key', 1);
  console.log(output); // --> 2


/* Write a function called "getLastElementOfProperty".

Given an object and a key, "getLastElementOfProperty" returns the last element of an array located at the given key.

Notes:

If the array is empty, it should return undefined.
if the property at the given key is not an array, it should return undefined.
If there is no property at the key, it should return undefined. */

var obj = {
    key: [1, 2, 5]
  };
  
  function getLastElementOfProperty(obj, key) {
    if (Array.isArray(obj[key])) return obj[key][obj[key].length-1]
    else return undefined;
  }
  var output = getLastElementOfProperty(obj, 'key');
  console.log(output); // --> 5