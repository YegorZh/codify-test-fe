export const hideCardNumber = (cardNumber: number) => {
  if (isValidCardNumber(cardNumber))
    return `**** ${cardNumber.toString().slice(12, 16)}`;
};

export const isValidCardNumber = (cardNumber: number) => {
  if (cardNumber.toString().length != 16) return false;
  return true;
};
