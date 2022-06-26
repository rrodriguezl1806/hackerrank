/**
 Get the mayor number of a array in one iteration
 @param {Array} arr [1, 4, 6, 9, 2]
 @return {Number} n 9
*/

function getMayorNumber(arr) {
    return arr.reduce((accum, current) => accum > current? accum: current)
    // return arr.reduce((accum, current) => {
    //     if (accum > current)
    //         return accum
    //     else return current
    // })
}
module.exports = getMayorNumber