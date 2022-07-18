function longSubStr(str, K) {
	let longestSubstr = 0, windowStart = 0, windowCharCount, charMap = {}
	
	for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
		const char = str[windowEnd]
		if(!charMap[char]){ 
			charMap[char] = 0
		}

		charMap[char] += 1
		
		while(Object.keys(charMap).length > K){
			const leftChar = str[windowStart]
			charMap[leftChar] -= 1
			if(charMap[leftChar] === 0) {
				delete charMap[leftChar]
				windowStart++	
				continue
			}
			// charMap[leftChar] -= 1
			windowStart++
		}
		windowCharCount = windowEnd - windowStart + 1
		longestSubstr = Math.max(longestSubstr, windowCharCount)
		// longestSubstr = Math.max(longestSubstr, windowEnd - windowStart + 1)
	}

	return longestSubstr
}

console.log(longSubStr("araaci", 2)) // ans  4
// console.log(longSubStr("araaci", 1)) // ans 2
// console.log(longSubStr("cbbebi", 3)) // ans 5