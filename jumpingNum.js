function jumpingNumber(n){
    const arr = String(n).split('').map(e => Number(e))
    console.log(arr.reduce((a, b) => a - 1 == b))
    // .length == arr.length ?
    // 'Jumping!!' : 
    // 'Not!!'
}

//INCOMPLETED

console.log(jumpingNumber(1), "Jumping!!");
console.log(jumpingNumber(7), "Jumping!!");
console.log(jumpingNumber(9), "Jumping!!");
console.log(jumpingNumber(23), "Jumping!!");
console.log(jumpingNumber(32), "Jumping!!");
console.log(jumpingNumber(79), "Not!!");
console.log(jumpingNumber(98), "Jumping!!");
console.log(jumpingNumber(8987), "Jumping!!");
console.log(jumpingNumber(4343456), "Jumping!!");
console.log(jumpingNumber(98789876), "Jumping!!");