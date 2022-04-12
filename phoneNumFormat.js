function createPhoneNumber(numbers){
    const arrOfStr = numbers.map(e => e.toString())
    arrOfStr.unshift('(')
    arrOfStr.splice(4, 0, ')')
    arrOfStr.splice(5, 0, ' ')
    arrOfStr.splice(9, 0, '-')
    return arrOfStr.join('')
}

//outputs (xxx) xxx-xxxx