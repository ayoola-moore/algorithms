function findKthSmallest(arr, K) {
	arr.sort((a, b)=>a-b)
	
	return arr[K-1]
}

console.log(findKthSmallest([1,5,12, 2, 11, 5],3))
console.log(findKthSmallest([1,5,12, 2, 11, 5],4))
console.log(findKthSmallest([5, 12, 11, -1, 12],3))