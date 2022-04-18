function isOddHeavy(n) {
  const odd = [];
  const even = [];
  for (let i = 0; i < n.length; i++) {
    if (n[i] % 2 !== 0) odd.push(n[i]);
    else even.push(n[i]);
  }
  if (odd.length === 0) return false;
  return even.every((e) => Math.min(...odd));
}
