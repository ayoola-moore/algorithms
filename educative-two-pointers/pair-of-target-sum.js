// function findTargetSum(arr, targetSum) {
// 	let p1 = 0, p2 = arr.length - 1, sum = arr[p1] + arr[p2]

// 	// while (sum < targetSum || sum > targetSum) {
// 	// 	if (sum > targetSum) {
// 	// 		p2--
// 	// 	} else {
// 	// 		p1++
// 	// 	}
// 	// 	sum = arr[p1] + arr[p2]
// 	// 	if(sum === targetSum) return [p1, p2]
// 	// }

// 	while (p1 < p2) {
// 		const sum = arr[p1] + arr[p2]
// 		if(sum === targetSum){
// 			return [p1 , p2]
// 		}
// 		if(targetSum > sum) {
// 			p1++
// 		}else {
// 			p2--
// 		}
// 	}
// 	return [-1, -1]
// }

function findTargetSum(arr, targetSum) {

	const numToindexMap = {}
	for (let i = 0; i < arr.length; i++) {
		const curNum = arr[i];
		const complementaryTarget = targetSum - curNum

		if(complementaryTarget in numToindexMap){
			return [numToindexMap[complementaryTarget], i]
		}
		numToindexMap[curNum] = i
	}
	return [-1, -1]
}


console.log(findTargetSum([1, 2, 3, 4, 6], 6))
console.log(findTargetSum([2, 5, 9, 11], 11))