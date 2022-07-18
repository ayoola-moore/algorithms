function squareArr(arr) {
	const n = arr.length
	const squares = Array(n).fill(0)
	let highestSquareIdx =  n -1
	let left = 0, right = n -1;
	while (left <= right) {
		let leftSquare = arr[left] * arr[left], 
		rightSquare = arr[right] * arr[right]
		if (leftSquare > rightSquare) {
			squares[highestSquareIdx] = leftSquare
			left += 1
		}else {
			squares[highestSquareIdx] = rightSquare
			right -= 1;
		}
		highestSquareIdx -=1 
	}
	return squares
}

// function squareArr(arr) {
// 	const square = []
// 	for (let i = 0; i < arr.length; i++) {
// 		const element = arr[i];
// 		square.push(element*element)	
// 	}	
// 	return square.sort((a, b)=>a-b)
// }

// console.log(squareArr([-2,-1, 0, 2, 3]))
// console.log(squareArr([-3, -1, 0, 1, 2]))
// console.log(squareArr([0, 1, 2]))
console.log(squareArr([-3, -2, 1]))