/* --- Question 4: Check all values in an array --- 
Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function

Sample:

var allAreLessThanSeven = all([1,2,9], function(num){
  return num < 7;
});

console.log(allAreLessThanSeven); // false
*/

function all(arr, callbackFn) {
const copiedArr = [...arr]

if(copiedArr.length === 0) return true;

if(callbackFn(copiedArr[0])) {
  copiedArr.shift();
  return all(copiedArr, callbackFn)
} else {
  return false
}
}

var allAreLessThanSeven = all([1,2,9], function(num){
  return num < 7;
});

console.log(allAreLessThanSeven); // false