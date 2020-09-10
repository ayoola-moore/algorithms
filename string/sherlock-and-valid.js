function isValid(s) {
    if( s.length < 2) return "yes"

    const hashMap = {}
    let totalNumberOfOccurence = 0

    for (const character of s) {
     hashMap[character] = (hashMap[character] || 0) + 1   
     totalNumberOfOccurence = totalNumberOfOccurence + hashMap[character]
    }

    // find the distinct value
    const characterFrequencies = Object.values(hashMap)
    const distinctCharacters = Object.keys(hashMap)
    let distinctOccurence = Array.from(new Set(characterFrequencies))
    distinctOccurence.sort((a, b)=> a-b)

    if(distinctOccurence.length > 2) return "NO" // In this case we cannot reduce only one elemenet as required
    if(distinctOccurence.length === 1) return "YES" // In this case we can confirm an anagram as required

    // The case where we have 2 distinct characters and this depict the possibility of an anagram by substraction 
    if(distinctOccurence.length === 2){
        const firstEl = distinctCharacters[1]
        const filterFirstEl = distinctCharacters.filter((char)=> char === firstEl)
        if(distinctCharacters.length - filterFirstEl.length  > 1) return "NO" // In this case, the possibility of adjusting only one element has been eroded. 
    
        if(distinctCharacters.length - filterFirstEl.length === 1){
            //substract the occurence of a from b. if the value is greater than 1 return No. It means the element cannot be adjusted to form an anagram
            if(distinctOccurence[2] - distinctOccurence[1] > 1){
                return "NO"
            }else{
                return "YES"
            }
        }
    
    }
}

// console.log(isValid("aabbcc")); // Yes
console.log(isValid("aabbccc")); // Yes
// console.log(isValid("aabbcccc")); // No
// console.log(isValid("abbcc")); // Yes
// console.log(isValid("abcddd")); // No
// console.log(isValid("aabbcd")); // No
// console.log(isValid("a")); // Yes
