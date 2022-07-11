function anagrams(word, words) {
  const result = [];

  words.forEach((e) => {
    if (e.split("").sort().join("") === word.split("").sort().join(""))
      result.push(e);
  });

  return result;
}
