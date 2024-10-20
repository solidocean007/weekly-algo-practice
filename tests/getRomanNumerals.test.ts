import getRomanNumerals from '../src/getRomanNumeral';

describe('getRomanNumerals', () => {
  test('should return X for input 10', () => {
    expect(getRomanNumerals(10)).toBe('X');
  });

  test('should return I for input 1', () => {
    expect(getRomanNumerals(1)).toBe('I');
  });

  test('should return IV for input 4', () => {
    expect(getRomanNumerals(4)).toBe('IV');
  });

  test('should return V for input 5', () => {
    expect(getRomanNumerals(5)).toBe('V');
  });

  test('should return IX for input 9', () => {
    expect(getRomanNumerals(9)).toBe('IX');
  });

  test('should return L for input 50', () => {
    expect(getRomanNumerals(50)).toBe('L');
  });

  test('should return C for input 100', () => {
    expect(getRomanNumerals(100)).toBe('C');
  });

  test('should return D for input 500', () => {
    expect(getRomanNumerals(500)).toBe('D');
  });

  test('should return M for input 1000', () => {
    expect(getRomanNumerals(1000)).toBe('M');
  });

  test('should return MMXXIV for input 2024', () => {
    expect(getRomanNumerals(2024)).toBe('MMXXIV');
  });

  test('should return an empty string for input 0', () => {
    expect(getRomanNumerals(0)).toBe('');
  });

  test('should throw an error for negative input', () => {
    expect(() => getRomanNumerals(-5)).toThrow('Invalid input');
  });

  test('should throw an error for non-integer input', () => {
    expect(() => getRomanNumerals(3.5)).toThrow('Invalid input');
  });

});
