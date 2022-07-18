function findSubSet(arr) {
	arr.sort((a, b)=>a - b)
	const subsets = []
	subsets.push([])
	let startIndex = 0, endIndex = 0

	for (let i = 0; i < arr.length; i++) {
		startIndex = 0
		if (i > 0 && arr[i] === arr[i-1]) {
			startIndex = endIndex + 1	
		}
		endIndex = subsets.length - 1
		const el = arr[i];
		for (let j = startIndex; j < endIndex + 1; j++) {
			const set = subsets[j].slice()
			set.push(el)
			subsets.push(set)
		}	
	}
	return subsets
}

console.log(findSubSet([1, 3,3]))
// console.log(findSubSet([1,5, 3,3]))