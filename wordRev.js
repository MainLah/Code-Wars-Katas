function spinWords(string){
    const arr = string.split(' ')
    return arr.map(e => e.length >= 5 ? e.split('').reverse().join('') : e).join(' ')
}

//reverse a word if its length >= 5