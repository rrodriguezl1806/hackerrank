const camelCase = require('../problems/camelCase')
const timeConversion = require('../problems/timeConversion')
const bigSorting = require('../problems/bigSorting')
const sockMerchant = require('../problems/sockMerchant')
const birthdayCakeCandles = require('../problems/birthdayCakeCandles')

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