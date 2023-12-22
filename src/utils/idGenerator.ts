export const generateRandomNumber = (numDigits: number): string => {
    let result = '';
    for (let i = 0; i < numDigits; i++) {
      const digit: number = Math.floor(Math.random() * 10); // Generate a random number between 0 and 9
      result += digit;
    }
    return result;
  };
  