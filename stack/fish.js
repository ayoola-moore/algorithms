// codility stack and queues - fish     
function fish(A, B) {
    let downStream = []
    let upStream = []
    let direction
    // Initially all the fish are alive and all except fish number 1 are moving upstream.
    for (let i = 0; i < A.length; i++) {
        direction = B[i]
        
        if (direction === 0) {// if direction is upstream r to l
            while (downStream.length > 0) {
                let d = downStream.pop()
                
                if (d > A[i]) {
                    downStream.push(d)
                    break
                }
            }
        
            if (downStream.length === 0) {
                upStream.push(A[i])
            }
        } else { // else direction is downstream l to r
            downStream.push(A[i])
        }
    }
    
    return downStream.length + upStream.length    
}

console.log(fish([4,3,2,1,5], [0,1,0,0,0]));