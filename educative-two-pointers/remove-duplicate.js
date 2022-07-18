// function removeDup(arr) {
// 	let p1 = 0
// 	for (let p2 = 1; p2 < arr.length; p2++) {
// 		const el = arr[p2];
// 		if (el === arr[p1]) {
// 			arr.splice(p1, 1)
// 		}	
// 		p1++
// 	}	
// 	return arr
// }
// function removeDup(arr) {
// 	let p1 = 1, p2 = 1

// 	while (p2 < arr.length) {
// 		const left = arr[p1 - 1 ]
// 		const right = arr[p2]
// 		if (left !== right) {
// 			arr[p1] = right
// 			p1++
// 		}
// 		p2++
// 	}

// 	return p1
// }


function removeDup(arr) {
	let p1 = 1, p2 = 1

	while (p2 < arr.length) {
		// if(arr[p1] !== arr[p2]){
		// 	arr[p1] = arr[p2]
		// 	p1++
		// }
		if(arr[p1-1] !== arr[p2]){
			arr[p1] = arr[p2]
			p1++
		}
		p2++
	}

	return p1

}

console.log(removeDup([1,2,2,2,5,5,7])) // ans 3 
// console.log(removeDup([2, 3, 3, 6, 9, 9])) // ans 4 
// console.log(removeDup([2, 2, 2, 11])) // ans 2
// console.log(removeDup([2, 2, 3,3,7,7, 11, 12])) // ans 5
