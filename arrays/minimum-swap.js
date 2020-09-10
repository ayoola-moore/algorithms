// mininum swap required to arrange a number in ascending order. Number range from 0 to N
function swapCount(arr) {
  let swapCount = 0;

  const arrDict = {};
  const visited = {};

  for (let j in arr) {
    j = parseInt(j);
    arrDict[j] = arr[j];
    visited[arr[j]] = false;
  }

  for (let i in arr) {
    i = parseInt(i);
    const element = arr[i];

    if (element === i || visited[i]) continue;

    let circleCount = 0;
    let value = i;

    while (!visited[value]) {
      visited[value] = true;
      value = arrDict[value];
      circleCount += 1;
    }

    swapCount = swapCount + circleCount - 1;
  }

  return swapCount;
}
// console.log(swapCount([0, 2, 3, 4, 1, 6, 5])); //4

// mininum swap required to arrange a number in ascending order. Number range from 1 to N
function minimumSwaps(arr) {
  let swap = 0,
    visited = [];
  for (let i = 0; i < arr.length; i++) {
    let j = i,
      cycle = 0;
    // if(visited[j] || arr[j]-1 == j) continue
    while (!visited[j]) {
      visited[j] = true;
      j = arr[j] - 1; //
      cycle++;
    }
    if (cycle != 0) swap = swap + cycle - 1;
  }
  return swap;
}
// console.log(minimumSwaps([2, 3, 4, 1, 5]));
// console.log(minimumSwaps([4, 3, 1, 2]));
// console.log(swapCount([1,3,5,2,4,6,7])) // 3


//
function minimumSwapSequence(A, B) {
    let swapCount = 0;

    for (let i in A) {
        i = parseInt(i)
        if (A[i] >= A[i+1] || B[i] >= B[i+1]){
            const index = i+1;
            const tempA = A[index];
            const tempB = B[index];
            B[index] = tempA;
            A[index] = tempB;
            swapCount += 1
        }
    }
    return swapCount
}

// console.log(minimumSwapSequence([1,3,5,4], [1,2,3,7])) // 1
// console.log(minimumSwapSequence([0,3,5,8,9], [2,1,4,6,9])) // 
// console.log(minimumSwapSequence([0,4,4,5,9], [0,1,6,8,10])) // 


// 801. Minimum Swaps To Make Sequences Increasing
function minSwap(A, B) {
  let AMin = A[0]
  let BMin = B[0]
  let minSwapCount = 0;

  for (let i = 0; i < A.length; i++) {
    let elA = A[i];
    let elB = A[i];

    if(elA < AMin || elB < BMin){
      const temp = elA;
      elA = elB;
      elB = temp;
      minSwapCount += 1;
      AMin = elA;
      BMin = elB;
    }else{
      AMin = elA;
      BMin = elB;
    }
  }

  return minSwapCount;
}

console.log(minSwap([1,3,5,4], [1,2,3,7])) // 1
console.log(minSwap([1,3,5,4,8], [1,2,3,7,13])) // 1
console.log(minSwap([1,3,5], [1,2,3])) // 1
console.log(minSwap([-1, 5], [5,5])) // 1
