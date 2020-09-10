function flattenArr(arr) {
    const flatArr = []
    
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(Array.isArray(element)){
            flatArr.push(...flattenArr(element))
        }else{
            flatArr.push(element)  
        }
    }
    return flatArr;
}

function flattenArray2(arr = []) {
  return arr.reduce(function(flat, toFlatten) {
    return flat.concat(
      Array.isArray(toFlatten) ? flattenArray2(toFlatten) : toFlatten
    );
  }, []);
}

console.log(flattenArray2([[2, 5], ["b", "c", ["d"]], [5], 6]))
console.log(flattenArray2([[5, [6]],7,[1]]))

console.log(flattenArr([[5, [6]],7,[1]]))
console.log(flattenArr([5,6,[4,5]]))