function strong(n) {
  const array = n
    .toString()
    .split("")
    .map((e) => factorial(Number(e)));
  return array.reduce((a, b) => a + b) === n ? "STRONG!!!!" : "Not Strong !!";
}

function factorial(num) {
  if (num === 0) return 1;
  const array = Array(num)
    .fill("")
    .map((e, i) => (e = i + 1));
  return array.reduce((a, b) => a * b);
}

console.log(strong(145), "STRONG!!!!");
