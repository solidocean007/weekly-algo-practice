/* Prompt: Write a recursive function that returns the n-th number in
 the Fibonacci sequence using a recursive approach. 
Bonus: write a non-recursive, iterative approach.
Bonusx2: Memoize this function 😈 */

function fibonacciIterative(int: number): number {
  if (int === 1) return 0;
  // if (int === 2) return 1; // why is  this line not necessary?

  let x = 0;
  let y = 1;

  for (let i = 3; i <= int; i++) {
    let temp = y;
    y = x + y;
    x = temp;
  }

  return y;
}

console.log('fibonacciIterative: 2 ',fibonacciIterative(2));
console.log('fibonacciIterative: 8 ',fibonacciIterative(8));

function fibonacciRecursive(n: number): number {
  if (n === 1) return 0;  // First Fibonacci number
  if (n === 2) return 1;  // Second Fibonacci number..why is this line necessary?

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log('fibonacciRecursive: 2', fibonacciRecursive(2));
console.log('fibonacciRecursive: 8', fibonacciRecursive(8));

