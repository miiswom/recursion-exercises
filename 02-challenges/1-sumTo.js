function sumTo(num) {
  // base
  if(num === 1 ) return num

  if(num > 1) {
    let sum = 1
    for(let i=num; i > 1; i--) {
      sum += i;
    }
    return sum;
  }
}

console.log(sumTo(1))
console.log(sumTo(2))
console.log(sumTo(3))
console.log(sumTo(4))
console.log(sumTo(100))

function recuriveSumTo(num) {
// translate cause : recursiveSumTo(num) = num + recursiveSumTo(num - 1) FOR n > 1
  if(num < 1) return 1
  else {
    return num + recuriveSumTo(num - 1)
  }
}

console.log(sumTo(1))
console.log(sumTo(2))
console.log(sumTo(3))
console.log(sumTo(4))
console.log(sumTo(100))

// num ---> 3
// num --->