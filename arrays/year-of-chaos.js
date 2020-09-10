// FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory
function yearOfChaos(q) {
  let mininumBribe = 0;
  for (let i = 0; i < q.length; i++) {
    const element = q[i] - 1;
    if (element === i) continue;
    if (element - i > 2) return "Too chaotic";
    if (element - i === 1) {
      const temp = element;
      const nextEl = q[i + 1];
      q[i + 1] = temp + 1;
      q[i] = nextEl;
      mininumBribe += 1;
    } else {
      let temp1 = q[i],
        temp2 = q[i + 1];

      q[i] = q[1 + 2];
      q[i + 1] = temp1;
      q[i + 2] = temp2;

      mininumBribe += 2;
    }
  }
  return mininumBribe;
}
// console.log(yearOfChaos([2, 1, 5, 4, 3]));
// console.log(minimumBribes([2, 5, 1, 3, 4]));
// console.log(minimumBribes([2, 1]));

function minimumBribes(q) {
  let result = 0;
  let expected, inplace;
  for (let i = q.length - 1; i >= 0; i--) {
    expected = i + 1;
    inplace = q[i];
    // console.log(i, inplace, expected)
    if (inplace === expected) continue;

    if (expected === q[i - 1]) {
      let first = q[i - 1],
        second = q[i];

      q[i] = first;
      q[i - 1] = second;
      // console.log('q', q)

      result += 1;
    } else if (expected === q[i - 2]) {
      let x = q[i - 1],
        y = q[i];

      q[i - 2] = x;
      q[i - 1] = y;
      q[i] = i + 1;

      // console.log('b', q)
      result += 2;
    } else {
      result = "Too chaotic";
      break;
    }
  }
  return result;
}

console.log(minimumBribes([2, 1, 5, 4, 3])); // 4
console.log(minimumBribes([2, 5, 1, 3, 4])); // too chaotic
console.log(minimumBribes([2, 1])); // 1
