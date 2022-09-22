function alphabetPosition(text) {
  const array = [];
  for (const letter of text) {
    if (letter.match(/[a-zA-Z]/)) {
      array.push(letter.toLowerCase().charCodeAt(0) - 96);
    }
  }
  return array.join(" ");
}
