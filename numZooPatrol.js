// function findNumber(array) {
//     const sortedArr = array.sort((a, b) => a - b);
//     let result = 0;
//     for (let i = 0; i <= array.length; i++) {
//         if (sortedArr[i] !== i + 1) {
//           return result = i + 1;
//         }
//     }
//     return result;
// }

function findNumber(array) {
    let result = 0;
    array.sort((a, b) => a - b).forEach((e, i) => {
        if (e !== i + 1) {
            return result = i + 1
        }
    })
    return result
}

//INCOMPLETED

console.log(findNumber([1,3,4,5,6,7,8]), 2);
console.log(findNumber([7,8,1,2,4,5,6]), 3);
console.log(findNumber([1,2,3,5]), 4);
console.log(findNumber([1,3]), 2);
console.log(findNumber([2,3,4]), 1);
console.log(findNumber([13,11,10,3,2,1,4,5,6,9,7,8]), 12);
console.log(findNumber([1,2,3]), 4);