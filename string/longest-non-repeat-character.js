// not correct
function longestNonRepeat(s) {
  let result = 0;
  const strArray = s.split("");

  const charMap = Array(26).fill(false);

  for (let i = 0; i < strArray.length; i++) {
    let char = strArray[i];
    let subStrCount = 0;

    let charIndex = char.charCodeAt() - 97;
    for (let j = i; j < strArray.length; j++) {
      char = strArray[j];
      charIndex = char.charCodeAt() - 97;
      if (charMap[charIndex]) {
        break;
      } else {
        subStrCount += 1;
        charMap[charIndex] = true;
      }
      result = Math.max(result, subStrCount);
    }
  }

  return result;
}
console.log(longestNonRepeat("pwwkew"));

// correct
var lengthOfLongestSubstring = function (s) {
  let leftWindow = 0;
  let longest = 0;
  let counts = {};

  for (let rightWindow = 0; rightWindow < s.length; ) {
    if (!counts[s[rightWindow]]) {
      counts[s[rightWindow]] = 0;
    }

    counts[s[rightWindow]] += 1;

    if (Object.values(counts).some((element) => element > 1)) {
      counts[s[leftWindow]] -= 1;
      leftWindow += 1;
    }

    longest = Math.max(longest, rightWindow - leftWindow + 1);
    rightWindow += 1;
  }

  return longest;
};

console.log(lengthOfLongestSubstring("pwwkew"));


// wrong - this would not work because set wouldn't validate against CONTIGUOUS UNIQUE elements
function usingSet(s) {
  let longest = 0,
    temp = 0;

  const mySet = new Set();
  // s for string
  for (const char of s) {
    if (mySet.has(char)) {
      longest = Math.max(longest, temp);
      temp = 0;
    } else {
      mySet.add(char);
      temp++;
    }
  }

  return longest;
}

console.log(usingSet("pwwkew"));

// wrong because for...of would evaluate empty string whereas .split() would... 
function usingSubArr(s) {
  let longest = 0;
  const subCont = []

  // s for string 
  for (const char of s) {
    if(subCont.includes(char)){
      longest= Math.max(longest, subCont.length)
      const idx = subCont.indexOf(char)
      subCont.splice(0, idx)
    }else{
      subCont.push(char)
    }
  }

  return longest
}

console.log(usingSubArr("pwwkew"));
