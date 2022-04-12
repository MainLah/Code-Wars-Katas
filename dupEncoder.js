function duplicateEncode(word) {
  const arr = word.toLowerCase().split("");
  let result = "";
  arr.map((e) => {
    if (arr.indexOf(e) == arr.lastIndexOf(e)) {
      result += "(";
    } else {
      result += ")";
    }
  });
  return result;
}
