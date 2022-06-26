const camelCase = require('../problems/camelCase')
const timeConversion = require('../problems/timeConversion')
const bigSorting = require('../problems/bigSorting')
const sockMerchant = require('../problems/sockMerchant')
const birthdayCakeCandles = require('../problems/birthdayCakeCandles')
const mulWithoutMulSign = require("../problems/mulWithoutMulSign");
const getMayorNumber = require("../problems/getMayorNumber");
const removeInvalidValues = require("../problems/removeInvalidValues");
const anagram = require('../problems/anagram')

test('count camel case in a word', () => {
  expect(camelCase('saveChangesInTheEditor')).toBe(5)
  expect(camelCase('saveChanges')).toBe(2)
})

test('convert to military time', () => {
  expect(timeConversion("07:05:45PM")).toEqual('19:05:45')
  expect(timeConversion("07:05:45AM")).toEqual('07:05:45')
  expect(timeConversion("00:00:00PM")).toEqual('12:00:00')
});

test('return a sorted from smallest to largest', () => {
  expect(bigSorting([4, 234, 6, 584949])).toEqual([4, 6, 234, 584949])
  expect(
    bigSorting(
      [31415926535897932384626433832795,1 , 3, 10, 3, 5]
    )
  ).toEqual(
    [1, 3, 3, 5, 10, 31415926535897932384626433832795]
  )
});


test('should return how many pairs of socks with matching colors there are', () => {
  expect(sockMerchant(15, [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5])).toBe(6)
  expect(sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3])).toBe(4)
  expect(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2])).toBe(2)
  expect(sockMerchant(7, [1, 1, 1, 2, 1, 3, 2])).toBe(3)
});

test('number of candles that can be blown out', () => {
  expect(birthdayCakeCandles([4,4,1,3])).toBe(2)
  expect(birthdayCakeCandles([3, 2, 1, 3])).toBe(2)
});

test('should return mul between two numbers', () => {
  expect(mulWithoutMulSign(2, 2)).toBe(4)
  expect(mulWithoutMulSign(5, 2)).toBe(10)
  expect(mulWithoutMulSign(60, 80)).toBe(4800)
  expect(mulWithoutMulSign('60', 80)).toBe(4800)
  expect(mulWithoutMulSign('asd', 80)).toBe(0)
})

test('should return the mayor number of array', () => {
  expect(getMayorNumber([2, 4, 9, 3, 0])).toBe(9)
  expect(getMayorNumber([2, 9, 9, 10, 1, 50, 20, 1, 20])).toBe(50)
  expect(getMayorNumber([2, 9, 9, 10, 1, 100, 20, 1, 20])).toBe(100)
})

test('should return a array without undefined, null, 0 and false values', () => {
  expect(removeInvalidValues([23, 'ab', null, 1, 0, undefined, false, false])).toStrictEqual([23, 'ab', 1])
  expect(removeInvalidValues([23, 0, undefined, false, false])).toStrictEqual([23])
})

test('should return true o false if the world is anagram', () => {
  expect(anagram('finder', 'friend')).toBe(true)
})