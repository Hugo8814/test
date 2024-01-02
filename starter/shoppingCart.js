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
//git add .
//git commit  -m "commet"
//git push -u origin main
