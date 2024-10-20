/*Given an array of integers from 1 to n with one number missing, write a function to find the missing number. */

export default function findMissingNumber(arr: number[]): number | undefined {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== 1) {
      return arr[i] + 1;
    }
  }
  return undefined;
}
