/**
Take 30 minutes to work on this assignment. Make sure to ask for help if you get stuck. If you need more than 30 minutes, we will have time on Friday. 

Read through the function and write comments to explain what is happening in the code.

 1. How would we change this to find the shortest word?
 2. How would you display the actual word in the console?
 */

function findLongestWord(str) {

  //use .split method on the input variable and store the results in a new variable called words
  var words = str.split(' ');

  //declare new variable longestwordlength with a value of 0
  var longestWordLength = 0;
  
  //create a loop that runs through each word in teh word array
  for (var i = 0; i < words.length; i++) {

    //For each word, checks its length using the .length property. If it is longer than the current longestwordlength (which is set to 0), it updates the that word longest word and its length to be be the value of longestwordlength.
    if (words[i].length > longestWordLength) {
      longestWordLength = words[i].length;
    }
  }
  
  //returns the final value and stops the function
  return longestWordLength;
}

1. //to find the shortest word we would change like 16 to set the shortest word length as the first word in the array and change the variable name: shortestWordLength = word[0].length

//we would change like 22 to check if words[i].length is less than the initial shortestWordLength: if  (words[i].length < longestWordLength) {

2. //to display the results in the console we would console.log the function with a string as the input / argument: console.log(findLongestWord('Hello, how are you doing today?'))