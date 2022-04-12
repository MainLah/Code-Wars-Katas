function findUniq(arr) {
    let temp = 0

    //checking if the first index of element and last index of element are on the same index
    arr.forEach((e, i) => {
        if (arr.lastIndexOf(e) == i && arr.indexOf(e) == i) {
          temp = e
        }
    })
    return temp
}