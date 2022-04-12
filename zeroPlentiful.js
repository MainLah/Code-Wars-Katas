function zeroPlentiful(arr) {
    //made str and newArr const for easier fix
    const str = arr.toString().replace(/[,-]/g, '')
    const newArr = str.split(/[1-9]/g).filter(e => e !== '')

    //return newArr length if every 0 sequence is more than 4 in length
    return newArr.every(e => e.length >= 4) ? newArr.length : 0
}


console.log(zeroPlentiful([ 0, 2, 0, 0, 0, 0, 3, 4, 5, 0, 0, 0, 0, 0 ]), 0);
console.log(zeroPlentiful([ 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, -12, 0, 0, 0, 0 ]), 3);