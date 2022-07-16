function sumDigPow(a, b) {
  const array = [];
  for (let i = a; i <= b; i++) {
    array.push(i);
  }
  return array.filter((e) => eureka(e));
}

function eureka(num) {
  const array = String(num)
    .split("")
    .map((e, i) => {
      return (e = Math.pow(Number(e), ++i));
    });
  return array.reduce((a, b) => a + b, 0) === num;
}
