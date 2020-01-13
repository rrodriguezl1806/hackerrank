const getMoneySpent = require('./electronicsShop')

test('should return the maximum total price for the two items within Monicas budget, or -1 if she cannot afford both items.', () => {
  expect(getMoneySpent([40, 50, 60], [5, 8, 12], 60)).toBe(58)
});