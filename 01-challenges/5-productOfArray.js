/* Question 5: Product of an array
Write a function called productOfArray which takes in an array of numbers and returns the product of them all

Sample:

var six = productOfArray([1,2,3]) // 6
var sixty = productOfArray([1,2,3,10]) // 60*/

function productOfArray(arr) {
  if(arr.length === 0) return 1;
  else {
    return arr.shift() * productOfArray(arr)
  }
}

console.log(productOfArray([1,2,3,10]))