function solution(number){
    let result = [];
    for (let i = 1; i <= number; i++) {
        if(i % 3 == 0 || i % 5 == 0) {
            result.push(i)
        }
    }
    return result.reduce((a, b) => a + b, 0)
}

solution(15)