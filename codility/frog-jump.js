// function frogJump(X, Y, D) {
// 	let minJump = 0

// 	while (X < Y) {
// 		X += D
// 		minJump++	
// 	}

// 	return minJump
// }

function frogJump(X, Y, D) {
	return Math.ceil((Y-X)/D)
	
}

console.log(frogJump(10, 85, 30))
console.log(frogJump(10, 30, 10))
console.log(frogJump(0, 10, 2))
console.log(frogJump(5, 11, 5))
console.log(frogJump(3, 33, 5))
console.log(frogJump(2, 18, 4))