function isSumOfCubes(s){
  let result = ''
  const array = s.split(/\D/).filter(e => e !== '')
  const newArray = [].concat(...array.map(e => {
    if (e.length > 3) {
      return splitIntoThree(e)
    } else {
      return e
    }
  }))
  newArray.forEach(e => reducing(e) === Number(e) ? result += ` ${e}` : result)
  return result ? hasilAkhir(result.trim()) : "Unlucky"
}

function splitIntoThree(string) {
  const result = []
  for (let i = 0; i < string.length; i += 3) {
    const current = string.substring(i, i + 3)
    if (current === current.charAt(0).repeat(2) || current === current.charAt(0).repeat(3)) result.push(current.charAt(0))
    else result.push(current)
  }
  return result
}

function reducing(string) {
  let result = 0
  const array = string.split("").map(e => Number(e))
  if (array.length === 1 && array[0] !== 0) return Math.pow(array[0], 3)
  for (let i = 0; i < array.length; i++) {
    result += Math.pow(array[i], 3)
  }
  return result
}
  
function hasilAkhir(string) {
  const array = string.split(" ")
  return `${string} ${array.reduce((a, b) => Number(a) + Number(b))} Lucky`
}
