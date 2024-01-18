import { addtoCart, totalPrice, tq } from './shoppingCart.js';
console.log('improting');
addtoCart('bread', 5);
console.log(totalPrice, tq);
import * as ShoppingCart from './shoppingCart.js';

ShoppingCart.addtoCart('bread', 4);
console.log(ShoppingCart.totalPrice);

import add, { addtoCart, totalPrice, tq } from './shoppingCart.js';
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 3);
add('pizza', 1);
console.log(cart);
console.log(add);
console.log('start of something');

//console.log(data);

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return { title: data.at(-1), text: data.at(-1).body };
};

const lastpost = getLastPost();

console.log(lastpost);

//lastpost.then(last => console.log(last));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

const shoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalquntity = 23;

  const addtoCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };
  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} oreder from suppiler `);
  };
  return {
    addtoCart,
    cart,
    totalPrice,
    totalquntity,
  };
})();

shoppingCart2.addtoCart('apple', 3);
shoppingCart2.addtoCart('pizza', 2);
console.log(shoppingCart2);

import cloneDeep from 'lodash-es';
// import cloneDeep from '../node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 4 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;

console.log(stateClone);
console.log(stateDeepClone);
if (module.hot) {
  module.hot.accept();
}
