/* Prompt: Write a recursive function that returns the n-th number in
 the Fibonacci sequence using a recursive approach.
Bonus: write a non-recursive, iterative approach.
Bonus x2: Memoize this function 😈 */
export function fibonacciIterative(int) {
    if (int === 1)
        return 0;
    let x = 0;
    let y = 1;
    for (let i = 3; i <= int; i++) {
        let temp = y;
        y = x + y;
        x = temp;
    }
    return y;
}
export function fibonacciRecursive(n) {
    if (n === 1)
        return 0; // First Fibonacci number
    if (n === 2)
        return 1; // Second Fibonacci number..why is this line necessary?
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
