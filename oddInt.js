// function findOdd(A) {
//     A.sort((a, b) => a - b)
//     let result = 0;

//     //finding number of times e appears
//     A.forEach(e => {
//         let temp = A.lastIndexOf(e) - A.indexOf(e) - 1

//         //if number of times e appears is odd, assign it to variable result
//         if (temp % 2 !== 0) {
//           result = e
//         }
//     })
//     return result
// }

// function findOdd(A) {
//   const obj = {}

//   A.forEach((e) => {
//     if (!obj[e]) obj[e] = 0
//     obj[e]++
//   })

//   for (const item in obj) {
//     if (obj[item] % 2 !== 0) {
//       return Number(item)
//     }
//   }
// }

/*
 * Sets every item in Array to an empty object, and set the counter for each item as the value
 * Immediately returns the item if the counter in the object is odd and it is the last index of item in Array
 */

function findOdd(A) {
  const obj = {};

  for (let i = 0; i < A.length; i++) {
    if (!obj[A[i]]) obj[A[i]] = 0;
    obj[A[i]]++;

    if (obj[A[i]] % 2 !== 0 && A.lastIndexOf(A[i]) === i) return A[i];
  }
}
