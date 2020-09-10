// function findFib(n) {
//   const arr = [0, 1];
//   let arrLength = arr.length;
//   console.log(arrLength);
//   if (arrLength == n) {
//     return arr[n];
//   }

//   let sum = arr[arrLength - 2] + arr[arrLength - 1];
//   arr.push(sum);
//   console.log(arr, arrLength);

//   return findFib(arrLength);
// }

// console.log(findFib(4));

function fib(n) {
  if (n < 2) {
    return n;
  }
  console.log(n);
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(4));
