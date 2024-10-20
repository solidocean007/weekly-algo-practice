import { fibonacciIterative, fibonacciRecursive } from '../src/fibonacciSequence';
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,

test('fibonacciIterative: should return 13 for input 8', () => {
  expect(fibonacciIterative(8)).toBe(13);
});

test('fibonacciRecursive: should return 5 for input 6', () => {
  expect(fibonacciRecursive(6)).toBe(5);
});

test('fibonacciIterative: should return 0 for input 1', () => {
  expect(fibonacciIterative(1)).toBe(0);
});

test('fibonacciRecursive: should return 1 for input 2', () => {
  expect(fibonacciRecursive(2)).toBe(1);
});