/*

Write a function called "computeCompoundInterest".

Given a principal, an interest rate, a compounding frequency, and a time (in years), "computeCompoundInterest" returns the amount of compound interest generated.

Reference: https://en.wikipedia.org/wiki/Compound_interest#Calculation_of_compound_interest This shows the formula used to calculate the total compound interest generated.
*/

function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
    let solution = principal*(1+interestRate/compoundingFrequency)**(compoundingFrequency*timeInYears) - principal
    return solution
  }
  
  var output = computeCompoundInterest(1500, .043, 4, 6);
  console.log(output); // --> 438.8368221341061
  