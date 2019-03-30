// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

//creating a testing function because I am lazy and ond't want to keep re-typing this
function testerFunction(theResult) {
  console.log(theResult);
}

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

getLength(items, testerFunction);

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]); //will error if we get an empty array, I think

  //if it's really important to not error here, I could make coditional to pass null/empty to cb if arr is empty
}

last(items, testerFunction);

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let theSum = x + y;
  cb(theSum);
}

sumNums(3, 4, testerFunction);

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  let theProduct = x*y;
  cb(theProduct);
}

multiplyNums(3, 4, testerFunction);

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for (let n = 0; n < list.length; n++){
    if (list[n] === item){
      cb(true);
      return; //do return, otherwise function will continue through this for loop
    }
  }
  
  cb(false);
}

contains("notHere", items, testerFunction);
contains("Gum", items, testerFunction);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
