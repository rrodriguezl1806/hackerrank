/**
 Given a array remove in one iteration all of undefined, null, 0, false
 @param {Array} arr [23, 'ab', null, 1, 0, undefined, false, false]
 @return {Array} [23, ab, 1]
 */

function removeInvalidValues(arr) {
    return arr.filter(value => value !== 0 && value !== undefined && value !== false && value !== null)
}
module.exports = removeInvalidValues