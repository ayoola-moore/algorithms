function merge(left, right) {
    const results = [];
  
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        results.push(left.shift());
        console.log(results);
      } else {
        results.push(right.shift());
        console.log(results);
      }
    }
  
    return [...results, ...left, ...right];
  }
  
  function mergeSort(arr) {
    if (arr.length === 1) {
      return arr;
    }
  
    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0, center);
    const right = arr.slice(center);
  
    const resultMergeSort = merge(mergeSort(left), mergeSort(right));
    return resultMergeSort;
  }
  
  console.log(mergeSort([2,5,1,7]))

  // https://leetcode.com/problems/sort-list/
  // https://www.youtube.com/watch?v=vH-o_6rwCEE