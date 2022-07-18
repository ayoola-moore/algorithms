function oddOccurency(A) {
	// create a character map to store occurencies
	const charMap = {}

	for (let i = 0; i < A.length; i++) {
		const el = A[i]

		if(!charMap[el]) charMap[el] = 0
		
		charMap[el] += 1
	}

	// loop through the character map and find the odd one out
	for (const char in charMap) {
		if (charMap[char] % 2 === 1) {
			return char
		}
	}

	return -1
}

console.log(oddOccurency([9, 3, 9,3,9, 7,9]))
console.log(oddOccurency([6]))
console.log(oddOccurency([4, 5, 4]))
console.log(oddOccurency([4, 4, 5]))