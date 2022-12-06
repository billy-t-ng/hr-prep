/*
Write a function called "computeFactorialOfN".

Given a natural number (a whole number greater than 0), "computeFactorialOfN" returns its factorial.
*/

function computeFactorialOfN(n) {
    let counter = 1;
    let product = 1;
    while (counter <= n){
      product *= counter;
      counter++
    }
    return product
  }
  
  var output = computeFactorialOfN(3);
  console.log(output); // --> 6
  
  var output = computeFactorialOfN(4);
  console.log(output); // --> 24

  /*
Write a function called "repeatString".

Given a string and a number, "repeatString" returns the given string repeated the given number of times.
*/

function repeatString(string, num) {
    let repeated = '';
    let counter = 0;
    while ( counter < num){
      repeated += string;
      counter++
    }
    return repeated;
  }
  
  var output = repeatString('code', 3);
  console.log(output); // --> 'codecodecode'