// exporting

console.log('exporting');

const shoppingCost = 10;
const cart = [];

export const addtoCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};
const totalPrice = 234;
const totalquntity = 23;
export { totalPrice, totalquntity as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
