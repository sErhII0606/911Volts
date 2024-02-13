export const priceStringToNumber = (priceString) => {
  //'$99.99'=>99.99
  return +priceString.substring(1);
};
