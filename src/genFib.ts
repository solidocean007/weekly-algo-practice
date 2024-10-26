/* Prompt: Write a function that takes a number n and returns the first
 n numbers in the Fibonacci sequence.

Extension: Modify the function to return the Fibonacci sequence as a
 comma-separated string. */

export const genFibsArray = (n: number): number[] => {
  const result: number[] = [0];
  if (n == 1) {
    return result;
  }

  let x = 0;
  let y = 1;

  for (let i = 1; i < n; i++) {
    result.push(y);
    const next = x + y;

    x = y;
    y = next;
  }

  return result;
};

export const genFibsString = (n: number): string => {
  if (n === 0) return "";

  let result = "0";
  if (n == 1) return result;

  let x = 0;
  let y = 1;

  for (let i = 1; i < n; i++) {
    result += `,${y}`;
    const next = x + y;
    x = y;
    y = next;
  }

  return result;
};
