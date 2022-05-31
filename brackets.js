function validParentheses(parens) {
  const openBracket = "({[";
  const closeBracket = ")}]";
  const stack = [];

  for (let i = 0; i < parens.length; i++) {
    if (openBracket.indexOf(parens[i]) > -1) {
      stack.push(closeBracket[openBracket.indexOf(parens[i])]);
    } else if (parens[i] !== stack.pop()) return false;
  }

  return !stack.length;
}
