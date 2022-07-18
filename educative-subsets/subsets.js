function findSubSet(arr) {
	const subsets = []
	subsets.push([])
	for (let i = 0; i < arr.length; i++) {
		const el = arr[i];
		const n = subsets.length
		for (let j = 0; j < n; j++) {
			const set = subsets[j].slice()
			set.push(el)
			subsets.push(set)
		}	
	}
	return subsets
}

// console.log(findSubSet([1, 3,5]))
// console.log(findSubSet([1, 3,3]))