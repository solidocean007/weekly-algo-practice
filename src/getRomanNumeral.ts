export const romanNumerals: Record<string, number> = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};

function getRomanNumerals(num: number){
  if (num < 0) {
    throw new Error('Invalid input: negative numbers are not allowed');
  }
  
  if (!Number.isInteger(num)) {
    throw new Error('Invalid input: input must be an integer');
  }

  if (num === 0) {
    return '';
  };
  
  let result = '';
  for(const numeral in romanNumerals){
    const value = romanNumerals[numeral];
    const count = Math.floor(num / value);
    if(count > 0){
      result += numeral.repeat(count);
      num %= value;
    }
  }
  return result;
};

export default getRomanNumerals;