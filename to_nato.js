function to_nato(words) {
  const obj = {
    a: " Alfa",
    b: " Bravo",
    c: " Charlie",
    d: " Delta",
    e: " Echo",
    f: " Foxtrot",
    g: " Golf",
    h: " Hotel",
    i: " India",
    j: " Juliett",
    k: " Kilo",
    l: " Lima",
    m: " Mike",
    n: " November",
    o: " Oscar",
    p: " Papa",
    q: " Quebec",
    r: " Romeo",
    s: " Sierra",
    t: " Tango",
    u: " Uniform",
    v: " Victor",
    w: " Whiskey",
    x: " Xray",
    y: " Yankee",
    z: " Zulu",
  };

  return words
    .split("")
    .map((e) => {
      if (e.match(/[,.!?]/g)) {
        return (e = ` ${e}`);
      } else if (e === " ") {
        return (e = "");
      } else {
        return (e = obj[e.toLowerCase()]);
      }
    })
    .join("")
    .trim();
}
