function balancedNum(number) {
    //Changing int argument to string
    const str = number.toString();

    //Taking equal(in length) part from left and right
    let leftSide = '';
    let rightSide = '';
    if (str.length < 3) {
        leftSide = '0';
        rightSide = '0';
    } else if (str.length % 2 !== 0) {
        leftSide = str.substr(0, (Math.floor(str.length / 2)))
        rightSide = str.substr((Math.floor(str.length / 2) + 1), str.length) 
    } else if (str.length % 2 == 0) {
        leftSide = str.substr(0, (Math.floor(str.length / 2) - 1))
        rightSide = str.substr((Math.floor(str.length / 2) + 1), str.length)
    }

    //Changing the leftSide and rightSide string to array
    const left = leftSide.split('').map(e => Number(e))
    const right = rightSide.split('').map(e => Number(e))

    //Return checking if leftSide and rightSide have equal value after summing
    return left.reduce((a, b) => a + b) == right.reduce((a, b) => a + b) ?
    'Balanced' :
    'Not Balanced'
}


//tests
console.log(balancedNum(1024), "Not Balanced")
console.log(balancedNum(66545), "Not Balanced")
console.log(balancedNum(295591), "Not Balanced")
console.log(balancedNum(1230987), "Not Balanced")
console.log(balancedNum(56239814), "Balanced")

console.log(balancedNum(7), "Balanced")
console.log(balancedNum(959), "Balanced")
console.log(balancedNum(13), "Balanced")
console.log(balancedNum(432), "Not Balanced")
console.log(balancedNum(424), "Balanced")