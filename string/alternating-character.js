// seems to correct but string AAABBB return 4 instead 0 and other test wouldn't pass.
// comments:: the output wasn't wrong. It was me who misinterpreted what the question was asking.
function alternatingChars(s) {
  let minimumNumberOfDelete = 0;

  const stringArray = s.split("");
  for (let i = 0; i < stringArray.length - 1; i++) {
    if (stringArray[i] === stringArray[i + 1]) {
      minimumNumberOfDelete += 1;
    }
  }
  return minimumNumberOfDelete;
}

// console.log(alternatingChars("bbba"));
// console.log(alternatingChars("aaaa"));
// console.log(alternatingChars("abab"));
// console.log(alternatingChars("bbb"));
// console.log(alternatingChars("a"));
// console.log(alternatingChars("aaaa"));
// console.log(alternatingChars("b"));
// console.log(alternatingChars("ABABABAB"));
console.log(alternatingChars("AAABBB"));
