function strong(n) {
    const arr = n.toString().split('').map(e => Number(e))
    for (let i = 0; i <= arr.length; i++) {
        let temp = [];
        for(let j = 1; j <= arr[i]; j++) {
            temp.push(j)
        }
    }
}

console.log(strong(145), "STRONG!!!!")