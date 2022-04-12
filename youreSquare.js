const isSquare = n => String(Math.sqrt(n)).split('.').length == 1 && n > 0 ? true : false

console.log(isSquare(25))