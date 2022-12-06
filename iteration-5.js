/*
Write a function called "multiply".

Given 2 numbers, "multiply" returns their product.

Notes:

It should not use the multiply operator - *
*/

function multiply(num1, num2) {
    let count = 1;
    let product = 0;
    while (Math.abs(count) <= Math.abs(num2)){
      if (num2 <  0) {
        product -= num1
        count++
      }
      else {
        product += num1
        count++
      }  
    }
    return product
  }
  
  var output = multiply(4, -7);
  console.log(output); // --> 28