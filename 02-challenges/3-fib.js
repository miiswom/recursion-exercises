function fib(num) {
  let arr = [0, 1]

  if(num <= 1) return num

  if(num > 1) {
    arr.push(num)
    console.log(arr)
    return fib(num - 1) + fib(num - 2)

  console.log(arr)
   return fib(num - 1) + fib(num - 2)

  }
  

}

console.log(fib(3))
console.log(fib(7))