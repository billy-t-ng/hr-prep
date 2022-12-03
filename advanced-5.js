/*
Write a function called "sumDigits".

Given a number, "sumDigits" returns the sum of all its digits.

If the number is negative, the first digit should count as negative.


Notes:

In order to use some of the methods that will be most helpful to you, you will most likely want to do some string to number conversion and vice versa.
Be sure to familiarize yourself with the "toString" method, as well as the "Number" function.
*/

function sumDigits(num) {
    let numString = num.toString();
    let numTotal = 0
    for(let i = 0; i < numString.length; i++){
      if(numString[i] === "-"){
        numTotal += (-Math.abs(numString[i+1]))
        i++
      }
      else{numTotal+= parseInt(numString[i])}
      console.log(numTotal, "here")
    }
    return numTotal;
  }
  
  var output = sumDigits(1148);
  console.log(output); // --> 14
  
  var output = sumDigits(-316);
  console.log(output); // --> 4