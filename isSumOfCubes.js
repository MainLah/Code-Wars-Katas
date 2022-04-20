//unfinished

function isSumOfCubes(s) {
  let result = "";
  const array = s.split(/\D/).filter((e) => e !== "");
  const newArray = [].concat(
    ...array.map((e) => {
      if (e.length > 3) {
        return splitIntoThree(e);
      } else {
        return e;
      }
    })
  );
  newArray.forEach((e) =>
    reducing(e) === Number(e) ? (result += ` ${e}`) : result
  );
  return result ? hasilAkhir(result.trim()) : "Unlucky";
}

function splitIntoThree(string) {
  const result = [];
  for (let i = 0; i < string.length; i += 3) {
    result.push(string.substring(i, i + 3));
  }
  return result;
}

function reducing(string) {
  const array = string.split("").map((e) => Number(e));
  if (array.length === 1 && array[0] !== 0) return Math.pow(array[0], 3);
  return array.reduce((a, b) => Math.pow(a, 3) + Math.pow(b, 3));
}

function hasilAkhir(string) {
  const array = string.split("");
  return `${string} ${array.reduce((a, b) => a + b)} Lucky`;
}
