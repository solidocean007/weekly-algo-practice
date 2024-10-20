import findMissingNumber from '../src/findMIssingNumber';

test('the missing number from the array: [0, 1, 2, 3, 4, 6, 7, 8] array is 5', ( ) => expect(findMissingNumber([1,2,3,4,6,7,8])).toBe(5));
