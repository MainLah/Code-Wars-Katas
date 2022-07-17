/*
 * Accepts input (integer) and fs (array of functions)
 * Chains the function
 */

function chain(input, fs) {
  return fs.reduce((a, b) => b(a), input);
}
