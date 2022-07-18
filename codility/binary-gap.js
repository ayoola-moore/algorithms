function binaryGap(N) {

	let p1= -1, maxGap = -1, gapCount = 0

	const bin = N.toString(2)
	for (let p2 = 0; p2 < bin.length; p2++) {
		const el = bin[p2];
		if (p1 === -1 && el == 1) {
			p1 = p2
		}else if(p1 !== -1 && el == 0){
			gapCount++
		}else{
			maxGap = Math.max(maxGap, gapCount)
			gapCount = 0
		}
	}

	return maxGap === -1 ? 0 : maxGap

}

console.log(binaryGap(9)) // ans 2
console.log(binaryGap(20)) // ans 1
console.log(binaryGap(529)) // ans 4