function fruitBasket(arr) {
	let maxFruitCount  = 0, charMap = {}, windowCount = 0, windowStart = 0;

	for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
		const el = arr[windowEnd];

		if(!charMap[el]){
			charMap[el] = 0
		}
		
		charMap[el] += 1

		while (Object.keys(charMap).length > 2) {
			const leftEl = arr[windowStart]
			charMap[leftEl] -= 1

			if (charMap[leftEl] === 0) {
				delete charMap[leftEl]	
			}
			windowStart++	
		}
		
		maxFruitCount = Math.max(windowCount, windowEnd - windowStart + 1)
	}
	return maxFruitCount
}

console.log(fruitBasket(["A", "B", "C", "A", "C"])) // ans 3
console.log(fruitBasket(["A", "B", "C", "B", "B", "C"])) // ans 5