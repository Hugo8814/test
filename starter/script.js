// import { addtoCart, totalPrice, tq } from './shoppingCart.js';
// console.log('improting');
// addtoCart('bread', 5);
// console.log(totalPrice, tq);
//import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addtoCart('bread', 4);
// console.log(ShoppingCart.totalPrice);

// import add, { addtoCart, totalPrice as price, tq } from './shoppingCart.js';
// import add, { cart } from './shoppingCart.js';
// add('pizza', 2);
// add('bread', 3);
// add('pizza', 1);
console.log(cart);
console.log(add);
// console.log('start of something');

// console.log(data);
// console.log('end something');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1) };
};

getLastPost();
