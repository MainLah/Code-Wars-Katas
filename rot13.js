function rot13(message) {
  const dictionaryCapital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const dictionary = "abcdefghijklmnopqrstuvwxyz";
  let result = "";

  for (const letter of message) {
    if (letter.match(/[A-Z]/g)) {
      let index =
        dictionaryCapital.indexOf(letter) + 13 >= 26
          ? (dictionaryCapital.indexOf(letter) + 13) % 26
          : dictionaryCapital.indexOf(letter) + 13;
      result += dictionaryCapital.charAt(index);
    } else if (letter.match(/[a-z]/g)) {
      let index =
        dictionary.indexOf(letter) + 13 >= 26
          ? (dictionary.indexOf(letter) + 13) % 26
          : dictionary.indexOf(letter) + 13;
      result += dictionary.charAt(index);
    } else {
      result += letter;
    }
  }
  return result;
}

console.log(rot13("nN"));
