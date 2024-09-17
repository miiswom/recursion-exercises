/* --- Question 1: Sum all numbers ---

Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.

Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6.
*/

function sumRange(n, sum = 1) {
  if(n === 1) return sum // 1
  else {
    return sumRange(n - 1, sum + n)
  }
}

/* Better solution:
function sumRange(num){
	if(num == 1) return 1;

	return num + sumRange(num - 1);
}
*/

console.log(sumRange(3))