//UNFINISHED

function encryptor(key, message) {
  if (key === 0) return message;
  const kamusKecil = [
    "z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "a",
  ];
  const kamusBesar = [
    "Z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "A",
  ];
  const mesej = message.split("");

  for (let i = 0; i < mesej.length; i++) {
    if (mesej[i].match(/[\s!]/g)) continue;

    if (kamusKecil.indexOf(mesej[i]) > -1) {
      const index =
        kamusKecil.indexOf(mesej[i]) + key >= kamusKecil.length
          ? kamusKecil.indexOf(mesej[i]) + key - kamusKecil.length + 2
          : kamusKecil.indexOf(mesej[i]) + key;
      mesej[i] =
        index < 0 ? kamusKecil[kamusKecil.length + key + 2] : kamusKecil[index];
    } else {
      const index =
        kamusBesar.indexOf(mesej[i]) + key >= kamusBesar.length
          ? kamusBesar.indexOf(mesej[i]) + key - kamusBesar.length + 2
          : kamusBesar.indexOf(mesej[i]) + key;
      mesej[i] =
        index < 0 ? kamusBesar[kamusBesar.length + key + 2] : kamusBesar[index];
    }
  }

  return mesej.join("");
}
