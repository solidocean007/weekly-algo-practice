import factorialFinder from '../src/factorialFinder';

test( 'the factorial of 0 is 1', () => {
  expect(factorialFinder(0)).toBe(1);
});

test( 'the factorial of 1 is 1', () => {
  expect(factorialFinder(1)).toBe(1);
});

test( 'the factorial of 2 is 2', () => {
  expect(factorialFinder(2)).toBe(2);
});

test( 'the factorial of 5 is 120', () => {
  expect(factorialFinder(5)).toBe(120);
});

test( 'the factorial of 4 is 48', () => {
  expect(factorialFinder(4)).toBe(48);
});

test( 'the factorial of 7 is 5040', () => {
  expect(factorialFinder(7)).toBe(5040);
});
