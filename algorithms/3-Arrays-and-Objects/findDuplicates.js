/**
Take 45 minutes to complete this exercise. If you need more time, you can use Focus Friday.  
 
Write a JavaScript function that takes an array of integers as input and returns true if there are any duplicate elements in the array, and false otherwise.

Input:
    1. An array of integers.
Output:
    true if there are duplicates in the input array; false otherwise.
 */

/**
Steps:
1. Create an empty object to store encountered numbers.
2. Iterate through the input array.
3. For each number, check if it already exists in the object.
4. If the number is found, there is a duplicate, so return true.
5. If the number is not found, add it to the object.
6. After iterating through the entire array, if no duplicates are found, return false.
 */

const numbers1 = [1, 2, 3, 4, 5, 6];
const numbers2 = [1, 2, 3, 4, 2, 6];

function hasDuplicates(arr) {

  //declaring a variable with the new Set() function (makes a new array with the values of the original array)
  // Set is a data structure that allows stored unique values meaning there can't be more than one of each value

  let newArr = new Set();

//using a for loop to check the each value in the array 
for (let currentValue of arr) {

  //if the newArr already holds that current value, it returns true for having a duplicate
  if (newArr.has(currentValue)) {
    return true; 
  } else {
    newArr.add(currentValue);
  }
}

//returns false meaning no duplicate was found
return false; 
}

console.log(hasDuplicates(numbers1)); // Output: false
console.log(hasDuplicates(numbers2)); // Output: true
