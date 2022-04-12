function betterThanAverage(classPoints, yourPoints) {
    classPoints.push(yourPoints)
    return yourPoints > classPoints.reduce(((a, b) => a + b), 0) / classPoints.length
}
