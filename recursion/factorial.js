function factorialize(num) {
  var result = num;
  if (num === 0 || num === 1) return 1;
  while (num > 1) {
    num--;
    result *= num;
  }
  return result;
}

console.log(factorial(6));

// this is  so wrong
function factorial(n) {
  let result = n;

  while (n > 1) {
    // n-- // 2, 1, 0
    result = result * (n - 1); // take note of how n was reduce on this line and the one below and be simplify rearrange the order, the algorithm was corrected. 
    n--;
    console.log(result);
  }
  return result;
}