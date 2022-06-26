/**
 Multiply two number without the multiply sign
 2 * 1 = 2
 2 * 2 = 2 + 2
 2 * 3 = 2 + 2 + 2
 2 * 4 = 2 + 2 + 2 + 2
 5 * 3 = 5 + 5 + 5
 @param {Number} n1
 @param {Number} n2
 @returns {Number} n1 * n2
*/

function mulWithoutMulSign(n1, n2) {
    let accum = 0
    if (!isNaN(n1) && !isNaN(n2)) {
        for (let i = 0; i < +n2; i++) {
            accum += +n1
        }
        return accum
    } else {
        return 0
    }
}
module.exports = mulWithoutMulSign