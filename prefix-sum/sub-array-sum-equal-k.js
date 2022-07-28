// https://leetcode.com/problems/subarray-sum-equals-k/
// https://www.youtube.com/watch?v=fFVZt-6sgyo

function subArraySumEql(arr, K) {
	let res = 0
	let curSum = 0
	const prefixSums = { 0: 1}

	for (let i = 0; i < arr.length; i++) {
		curSum += arr[i]	
		const diff = curSum - K

		res += prefixSums[diff] || 0
		prefixSums[curSum] =  (prefixSums[curSum] || 0) + 1
		console.log({A: curSum, D: res, B: diff, C: prefixSums})
	}
	
	return res
}

console.log(subArraySumEql([1,-1, 1, 1, 1, 1], 3)) // 4
console.log(subArraySumEql([1,-1, 1], 2)) // 0
console.log(subArraySumEql([1, 1, 1], 2)) // 2
console.log(subArraySumEql([1, 2, 3], 3)) // 2