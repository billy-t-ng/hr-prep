/*
Write a function called "getProductOfAllElementsAtProperty".

Given an object and a key, "getProductOfAllElementsAtProperty" returns the product of all the elements in the array located at the given key.

Notes:

If the array is empty, it should return 0.
If the property at the given key is not an array, it should return 0.
If there is no property at the given key, it should return 0.
*/

var obj = {
    key: [null,NaN, undefined,2,3,4]
  };
  function getProductOfAllElementsAtProperty(obj, key) {
    let product = 1
    if(obj.key){
      let copyArray = Object.values(obj[key]).filter(Number)
      if (Array.isArray(copyArray) && (copyArray.length > 0)){
        for(let i = 0; i < copyArray.length; i++){
          product *= copyArray[i]
          }
        } 
      else {return 0}
    }
    else return 0
    return product;
  }
  
  var output = getProductOfAllElementsAtProperty(obj, 'key');
  console.log(output); // --> 24