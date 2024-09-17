/* --- Question 7: Parse a multi-dimensional array ---
Given a multi-dimensional integer array, return the total number of integers stored inside this array

Sample:

var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7
*/

function totalIntegers(nestedArr) {
  if(nestedArr.length === 0) return 0

  let totalOfInt = 0
  let firstElement = nestedArr.shift()

  // for(let i = 0; i < nestedArr.length; i++) {
    if(Array.isArray(firstElement)) {
      totalOfInt += totalIntegers(firstElement)
    } else if(Number.isInteger(firstElement)) {
      totalOfInt += 1
    }
  // }
  return totalOfInt + totalIntegers(nestedArr)
}

console.log(totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]])); // 7