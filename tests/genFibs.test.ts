import {genFibsArray, genFibsString} from '../src/genFib';

test('First number of the fibonacci sequence is: [0]', () => {
  expect(genFibsArray(1)).toEqual([0]);
});

test('First two numbers of the fibonacci sequence is: [0, 1]', () => {
  expect(genFibsArray(2)).toEqual([0,1]);
});

test('First three numbers of the fibonacci sequence is: [0, 1, 1]', () => {
  expect(genFibsArray(3)).toEqual([0,1,1]);
});

test('First 6 numbers of the fibonacci sequence is: [0,1,1,2,3,5]', () => {
  expect(genFibsArray(6)).toEqual([0,1,1,2,3,5]);
});

test('Fibonacci string for n = 1', () => {
  expect(genFibsString(1)).toBe('0');
});

test('Fibonacci string for n = 2', () => {
  expect(genFibsString(2)).toBe('0,1');
});

test('Fibonacci string for n = 6', () => {
  expect(genFibsString(6)).toBe('0,1,1,2,3,5');
});

test('Fibonacci string for n = 0', () => {
  expect(genFibsString(0)).toBe('');
});