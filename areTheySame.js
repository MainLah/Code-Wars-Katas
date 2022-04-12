function comp(array1, array2){
    let temp;
    //if one of the array == null return false
    if(array1 == null || array2 == null) {
        return temp = false
    }
  
    //sorting the arrays for every()
    const newArray1 = array1.map(e => e * e)
    newArray1.sort((a, b) => a - b)
    array2.sort((a, b) => a - b)
    temp = newArray1.every(e => array2.indexOf(e) == newArray1.indexOf(e))
    temp = array2.every(e => newArray1.indexOf(e) == array2.indexOf(e))
  
    return temp
}