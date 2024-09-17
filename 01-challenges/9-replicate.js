/* --- Question 9:
The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.

Sample:

console.log(replicate(3, 5)) // [5, 5, 5]
console.log(replicate(1, 69)) // [69]
console.log(replicate(-2, 6)) // []
*/

function replicate(num, value) {
  if(num === 0) return 0

  const replicateArr = []
  
  while(num > 0) {
    replicateArr.push(value)
    num--
  }
  return replicateArr
}

//console.log(replicate(3, 5))
//console.log(console.log(replicate(1, 69)))
console.log(console.log(replicate(-2, 6)))