function cakes(recipe, available) {
  let result = [];
  for (const items in recipe) {
    if (available[items] && available[items] >= recipe[items]) {
      result.push(Math.floor(available[items] / recipe[items]));
    } else {
      return 0;
    }
  }

  return Math.min(...result);
}
