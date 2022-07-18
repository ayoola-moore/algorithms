// Given an array of positive numbers and a positive number k, find the
// maximum sum of any contiguous subarray of size k'.
function smallestArrLength(arr, K) {
	let [windowStart, windowSum, maxSum] = [0, 0 , 0]

	for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
		windowSum += arr[windowEnd]
		if(windowEnd - windowStart === K){
			windowSum -= arr[windowStart]
			windowStart++
		}	
		maxSum = Math.max(maxSum, windowSum)
	}
	return maxSum
}

console.log(smallestArrLength([2,1,5,1,3,2], 3)) // ans 9
console.log(smallestArrLength([2,3,4,1,5], 2)) //ans 7
console.log(smallestArrLength([2,4], 7)) // ans 6
console.log(smallestArrLength([2,4, 5, 5, 9], 1)) // ans 9