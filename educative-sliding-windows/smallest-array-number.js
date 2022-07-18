// Given an array of positive numbers and a positive number S, find the
// length of the smallest contiguous subarray whose sum is greater than
// or equal to 'S'. Return 0 if no such subarrav exists
function smallestArrLength(arr, S){
	let windowSum = 0, minLength = Infinity, windowStart = 0;

	for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
		windowSum += arr[windowEnd]	
		while (windowSum >= S) {
			minLength = Math.min(minLength, windowEnd - windowStart + 1)
			windowSum -= arr[windowStart]
			windowStart++
		}
	}
	
	if(minLength === Infinity) return 0

	return minLength
}

// function smallestArrLength(arr, S){
// 	// const windowStart = 0
// 	let windowSum = 0
// 	const result = []
// 	let conditionMet = false 
// 	for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
// 		while(windowSum >= S){
// 			conditionMet = true
// 			windowSum -= arr[windowEnd]
// 			result.shift()
// 			// windowStart++
// 		}
// 		windowSum += arr[windowEnd]
// 		result.push(arr[windowEnd])	 
// 	}
// 	if(conditionMet === false) return 0

// 	return 	result.length
// }

console.log(smallestArrLength([2,1,5,2,3,2], 7)) // ans 2
// console.log(smallestArrLength([2,1,5,2,8], 7)) // ans 1
// console.log(smallestArrLength([3, 4,1,1, 6], 8)) // ans 3