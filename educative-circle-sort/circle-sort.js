// function circleSort(arr) {
// 	let i = 0
	
// 	while (i < arr.length) {
// 		// if(i === arr.length-1){
// 		// 	a = arr[i]
// 		// 	b = arr[a -1]
// 		// 	arr[i]= b
// 		// 	arr[a-1] = a
// 		// 	break;
// 		// }
// 		// let a = arr[i]
// 		// arr[a -1] = a
// 		// i++
// 		const a = arr[i] - 1
// 		// const a = arr[i-1]
// 		if(arr[a] !== arr[i]){
// 			[arr[a], arr[i]] = [arr[i] , arr[a]]
// 		}else{
// 			i++
// 		}
// 	}
// 	return arr
// }

function circleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let el = arr[i];
		while (el !== i + 1) {
			[arr[el -1], arr[i]] = [arr[i], arr[el-1]]
			el = arr[i]
		}
	}
	return arr
}

// console.log(circleSort([3,2,1]))
// console.log(circleSort([3,1,5,4,2]))
// console.log(circleSort([2,6,4,3,1,5]))
// console.log(circleSort([1,5,6,4,3,2]))