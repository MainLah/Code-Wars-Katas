function solution(digits) {
  let result = "0";
  const array = digits.split("");

  for (let i = 0; i < array.length; i++) {
    if (Number(array.slice(i, i + 5).join("") > Number(result)))
      result = Number(array.slice(i, i + 5).join(""));
  }

  return result;
}
