function waterbombs(fire, w) {
    //split with 'Y' fire string into array
    const fireArr = fire.split('Y').filter(e => e !== '')

    //initial fireBomb needed
    let fireBomb = 0;

    //counting how many fire bombs needed
    fireArr.forEach(e => {
        if(e.length <= w) {
            fireBomb++;
        } else if(e.length >= w) {
            fireBomb += Math.ceil(e.length / w);
        }
    })

    //if fire doesn't have 'x' return 0
    return !fire.includes('x') ?
    0 :
    Math.ceil(fireBomb)
}

// function waterbombs(fire, w) {
//    return fire.split('Y').reduce((a, b) => a + Math.ceil(b.length / w), 0)
// }

//tests
console.log(waterbombs("YYxxxxxxYxYxxxxYxxxYxxxxxxx", 5), 7);
console.log(waterbombs("xxxYx", 1), 4);
console.log(waterbombs("Y", 4), 0);