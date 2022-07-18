function cyclicRotation(A, K) {
	if (A.length < 2) return A
	
	let i = 0
	while (i <= K-1) {
		const rightEl = A.pop()	
		A.unshift(rightEl)
		i++
	}

	return A	
}

console.log(cyclicRotation([3, 8, 9, 7, 6], 3))
console.log(cyclicRotation([1, 2, 3, 4], 4))
console.log(cyclicRotation([1, 2], 4))
console.log(cyclicRotation([4, 2, 7], 3))
console.log(cyclicRotation([-3, 4, 7, -2], 6))