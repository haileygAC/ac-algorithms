/**
1. Read through the function and write comments to explain what is happening in the code.
2. What are the inputs for this function? 
3. What is the expected output?
4. How would we change this to add all of the numbers?
 */

function factorializeIt(num) {

   // conditional statement to check if input is 0 and returns 1 if input is 0
  if (num === 0) {
    return 1;

    //variable is created with a value of 1
  } else {
    let result = 1;

      // loop statement goes through 1 to num, adding the numbers that is returned to the equation that is multiplied together when its reached the last of i++  
    for (let i = 1; i <= num; i++) {
      result *= i;
    }

    //returns the results and ends the function
    return result;
  }
}

2. //the expected input is a number 
3. //the expected output is the factorial (the product of an integer and all the integers below it - but in this case, we started from 1 and went all the way up to the integer while multiplying) of num (the input number) 
4. //to add instead of multiply:
//input is a number stored in the variable "num"
//use a loop that starts at 0 and goes up to the given input (num), incrementing by one each time
//add the current iteration's value to the results variable (results += i) 
//return the final value of results  after the loop finishes