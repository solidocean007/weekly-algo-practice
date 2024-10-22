/* Prompt: Write a function that takes a non-negative integer and returns its factorial.
Extension: Modify the function to handle large numbers by using memoization to improve efficiency. */

function factorialFinder(num: number): number {
  if (num == 0 || num == 1) {
    return 1;
  }

  let factorialNumber = 1;
  for (let i = 2; i <= num; i++) {
    factorialNumber *= i;
  }

  return factorialNumber;
}

export default factorialFinder;


const memo: { [key: number] : number } = {};

export function memoFactorialFinder(num: number): number {
  if(num in memo) return memo[num];
  
  if(num == 0 || num == 1) {
    memo[num] = 1;
    return 1;
  }

  memo[num] = num * memoFactorialFinder(num -1);
  return memo[num];
}