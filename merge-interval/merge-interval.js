function mergeInterval(intervals) {
  if (intervals.length < 2) return intervals.sort();

  intervals.sort((a, b) => {
    return a[0] - b[0];
  });

  const merged = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const curArr = intervals[i];
    const comparedArr = merged[merged.length - 1];
    if (comparedArr[1] >= curArr[0]) {
      // the case of an overlap
      comparedArr[1] = Math.max(curArr[1], comparedArr[1]);
    } else {
      // no overlap... make an array and push
      merged.push(curArr);
    }
  }

  return merged;
}

console.log(
    mergeInterval([
      [1, 4],
      [4, 5],
    ])
  ); // [[1,5]]
  
  // notice I just switch the ordering in the first 2D array
  console.log(
    mergeInterval([
      [4,1],
      [4, 5],
    ])
  ); // [[4,1],[4,5]]
