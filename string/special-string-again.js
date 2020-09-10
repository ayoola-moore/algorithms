
// working
function substrCount(n, s) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    let str1 = "";
    let middleStr = "";
    let str2 = "";
    for (let j = i; j < n; j++) {
      if (middleStr.length === 0 && s[j] === s[i]) {
        str1 += s[j];
        count++;
      } else if (middleStr.length === 0 && s[j] !== s[i]) {
        middleStr += s[j];
      } else if (
        middleStr.length === 1 &&
        s[j] === s[i] &&
        str2.length < str1.length
      ) {
        str2 += s[j];
        if (str1 === str2) {
          count++;
        }
      } else {
        break;
      }
    }
  }
  return count;
}

function substrCount2(n,s) {
  let ans = n

  let str = s.split("")

  for (let i = 0; i < str.length; i++) {
    let repeat = 0;

    while(i+1< str.length && str[i] == str[i+1]){
      repeat++
      i++
    }
    ans += (repeat * (repeat+1))/2;

    let pointer =1 ;
    while (i-pointer>=0 && i+pointer<str.length && str[i+pointer]==str[i-1] && str[i-pointer]==str[i-1]) {
      ans++;
      pointer++
    }
  }
  
  return ans;
}


// console.log(special("jklsdjhls"));
// console.log(special("kdkdk"));
// console.log(special("k"));
// console.log(special("bbb"));
// console.log(special("bbbaabb"));
// console.log(substrCount(8,"mnonopoo"));
// console.log(special(5,"asasd"));
// console.log(special(4, "aaaa"));
console.log(specialStringAgain(4, "aaaa"));
// console.log(special(7,"abcbaba"));
