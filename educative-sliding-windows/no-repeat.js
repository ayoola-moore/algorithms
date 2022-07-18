function noRepeat(str) {
	let charMap = {}, windowStart = 0, longestNoRepeat = 0, windowSum = 0

	for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
		const char = str[windowEnd];

		if(!charMap[char]) charMap[char] = 0
		charMap[char] += 1

		while (charMap[char] > 1) {
			const leftChar = str[windowStart]
			charMap[leftChar] -= 1
			if (charMap[leftChar] === 0 ) delete charMap[leftChar]
			windowStart++
		}

		longestNoRepeat = Math.max(longestNoRepeat, windowEnd - windowStart + 1)
	}

	return longestNoRepeat
}

console.log(noRepeat("aabccb")) // ans 3
console.log(noRepeat("abbbb")) // ans 2
console.log(noRepeat("abccde")) // ans 3