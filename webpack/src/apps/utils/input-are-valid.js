export const inputsAreValid = (...inputs) => {
  return inputs.every(n => !isNaN(n));
};
