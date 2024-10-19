const sumArray = require('../sumArray');

test( 'sums an array of number', () => {
  expect(sumArray([1,2,3,4])).toBe(10);
});

test('returns 0 for an empty array', () => {
  expect(sumArray([])).toBe(0);
});

test('sums an array with negative numbers', () => {
  expect(sumArray([-1, -2,-3, -4])).toBe(-10);
})