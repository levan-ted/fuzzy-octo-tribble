const letters =
  "abcdefghijklmnopqrstuvyxyzABCDEFGHIJKLMNOPQRSTUVYXYZ0123456789";

export const generateKey = (length = 10) => {
  const keyArray = [];

  for (let i = 0; i < length; i++) {
    const randomIdx = Math.trunc(Math.random() * letters.length) + 1;
    keyArray.push(letters[randomIdx]);
  }

  return keyArray.join("");
};
