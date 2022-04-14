function changer(str) {
  if (str.length === 0) return;

  const letters = "abcdefghijklmnopqrstuvwxyza";

  const array = str.split("").map((e) => {
    if (letters.split("").indexOf(e.toLowerCase()) > -1) {
      return (e = letters[letters.split("").indexOf(e.toLowerCase()) + 1]);
    } else {
      return (e = e);
    }
  });

  return array
    .map((e) => {
      if (e.match(/[aiueo]/gi)) {
        return (e = e.toUpperCase());
      } else {
        return (e = e.toLowerCase());
      }
    })
    .join("");
}
