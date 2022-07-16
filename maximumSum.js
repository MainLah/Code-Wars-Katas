var maxSequence = function (arr) {
  if (arr.length === 0) return 0;
  if (arr.every((e) => e < 0)) return 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let temp = 0;
    for (let j = i; j < arr.length; j++) {
      temp += arr[j];
      if (temp > sum) sum = temp;
    }
  }
  return sum;
};
