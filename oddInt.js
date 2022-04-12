function findOdd(A) {
    A.sort((a, b) => a - b)
    let result = 0;

    //finding number of times e appears
    A.forEach(e => {
        let temp = A.lastIndexOf(e) - A.indexOf(e) - 1

        //if number of times e appears is odd, assign it to variable result
        if (temp % 2 !== 0) {
          result = e
        }
    })
    return result
}