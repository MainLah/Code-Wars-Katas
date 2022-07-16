function solution(str) {
  if (str === "") return [];

  const array = str.match(/.{1,2}/g);

  if (array[array.length - 1].length === 1) {
    array[array.length - 1] += "_";
  }

  return array;
}
