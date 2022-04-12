const isSquare = arr => {
    //initial variables
    let temp = 0;
    let result;

    //checking if every number is a square number
    arr.forEach(e => temp += Math.sqrt(e))
    let resultArr = String(temp).split('.')
    if (resultArr.length > 1) {
        result = false;
    } else if (resultArr.length = 1) {
        result = true;
    }

    //if no number return undefined
    return arr.length < 1 ? 
    undefined :
    result
}

//tests
console.log(isSquare([1, 4, 9, 16, 25, 36]), true);
console.log(isSquare([1, 2, 3, 4, 5, 6]), false);
console.log(isSquare([]), undefined);
console.log(isSquare([1, 2, 4, 15]), false); 