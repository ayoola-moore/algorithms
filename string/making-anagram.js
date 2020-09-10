function makingAnagram2(a, b) {
  // convert strings to arrays
  const arrA = a.split("");
  const arrB = b.split("");

  // find the largest arr
  const largestArr = arrA.length >= arrB.length ? arrA : arrB;
  const smallerArr = arrA.length < arrB.length ? arrA : arrB;

  // construct a charMap from the largest arr, sum total number of character,
  const storage = {};
  let totalNumberOfChar = arrA.length + arrB.length;

  for (let i = 0; i < largestArr.length; i++) {
      const elementA = largestArr[i];
      if (storage[elementA]) {
        storage[elementA] = storage[elementA] + 1;
      } else {
        storage[elementA] = 1;
      }
  }

  // detect the anagrams
  let anagram = 0;

  for (const letter of smallerArr) {
      if (storage[letter] && storage[letter]>0) {
        anagram++;
        storage[letter]--
      }
  }

  // detect the number of deletion required
  return totalNumberOfChar - anagram * 2;
}
console.log(makingAnagram2("cde", "abc"));
console.log(makingAnagram2("cde", "abcxyz"));
console.log(makingAnagram2("cdexyzbc", "abc"));
console.log(makingAnagram2("abbb", "ba"));


function makingAnagram(a, b) {
  const larger = a.length >= b.length ? a : b;
  const smaller = a.length < b.length ? a : b;

  const storage = {}

  for(const letter of larger){
    storage[letter] = (storage[letter] || 0) + 1;
  }
  
  let counter = 0;

  for (const letter of smaller) {
    if(storage[letter] && storage[letter] > 0){
      storage[letter] --;
      counter ++;
    }
  }

  const diffOfSmaller = smaller.length - counter;
  const diffOfLarger = larger.length - counter;
  
  return diffOfSmaller + diffOfLarger;
  
}

console.log(makingAnagram("cde", "abc"));
console.log(makingAnagram("cde", "abcxyz"));
console.log(makingAnagram("cdexyzbc", "abc"));
// console.log(makingAnagram("xyzab", "wyza"));
// console.log(makingAnagram("ab", "ba"));
console.log(makingAnagram("abbb", "ba"));
