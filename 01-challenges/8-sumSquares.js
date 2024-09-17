/* Question 8:
Write a function that sums squares of numbers in list that may contain more lists

Sample:

var l = [1,2,3]; 
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[1,2],3]; 
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]] 
console.log(SumSquares(l)); // 1 = 1

l = [10,[[10],10],[10]] 
console.log(SumSquares(l)); // 100 + 100 + 100 + 100 =  
*/

function sumSquares(list) {

  if(list.length === 0) return 0

  let sum = 0;
  let firstElement = list.shift()

  // for(let i=0; i < list.length; i++) {
    if(Array.isArray(firstElement)) {
      sum += sumSquares(firstElement)
    } else if(Number.isInteger(firstElement)) {
      sum += (firstElement * firstElement)
    }
  // }
  return sum += sumSquares(list)
}

console.log(sumSquares([1,2,3]))