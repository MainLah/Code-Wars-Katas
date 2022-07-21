/*
 * Takes a string, and for every word (split with ' '), converts the letter on index 0
 * and even index to uppercase, vice versa
 */

function toWeirdCase(string) {
  const array = string.split(" ");

  for (let i = 0; i < array.length; i++) {
    let word = "";
    for (let j = 0; j < array[i].length; j++) {
      if (j === 0 || j % 2 === 0) {
        word += array[i][j].toUpperCase();
      } else {
        word += array[i][j].toLowerCase();
      }
    }
    array[i] = word;
    word = "";
  }

  return array.join(" ");
}
