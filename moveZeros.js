// function moveZeros(arr) {
//   const array = [...arr]
//   const counter = array.filter(e => e === 0)
//   return array.filter(e => e !== 0).concat(Array(counter.length).fill(0))
// }

function moveZeros(arr) {
  const array = [...arr];
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) counter++;
  }
  return array.filter((e) => e !== 0).concat(Array(counter).fill(0));
}
