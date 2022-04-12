function digital_root(n) {
    const arr = n.toString().split('').map(e => Number(e));
    let result = 0;
    if (arr.length > 1) {
        result += arr.reduce((a, b) => a + b)
    }
    return result >= 10 ? 
    digital_root(result) : 
    result
}

//outputs 123 = 1 + 2 + 3 = 6