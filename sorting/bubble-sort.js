function bubbleSort(a) {
    let numSwap = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length-1; j++) {
             if(a[j] > a[j+1]){
                 const temp = a[j]
                 a[j] = a[j+1]
                 a[j+1] = temp
                 numSwap += 1
             }
        }
    }

    return console.log(
        `Array is sorted in ${numSwap} swaps.\nFirst Element: ${a[0]}\nLast Element: ${a[a.length-1]}`
    )
}

bubbleSort([6,4,1])