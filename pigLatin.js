function pigIt(str) {
  const array = str.split(" ");
  const newArr = array.map((e) => {
    if (!e.match(/[A-Za-z]/)) return e;
    else return e.substring(1) + e[0] + "ay";
  });
  return newArr.join(" ");
}
