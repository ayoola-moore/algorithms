function permMissing(A) {
	
	const arr = A.sort((a, b)=>a-b)
	
	if(arr[0] !== 1) return 1

	let missing = 1

	for (let i = 1; i < arr.length; i++) {
		const element = arr[i];
		missing = missing + 1
		if(element !== missing) return i + 1
	}
	missing++
	
	return missing
}

console.log(permMissing([2,3,1,5]))
console.log(permMissing([2, 3, 4, 5]))
console.log(permMissing([1, 2, 3, 4]))
console.log(permMissing([5,4,2,1]))
