'strict mode';

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

spendingLimits.jay = 300;

console.log(spendingLimits);

const getLimit = (limits, user) => limits?.[user] ?? 0;

/// pure fucantion
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const cleanUser = (user = user.toLowerCase());

  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};
const newbudget1 = addExpense(budget, spendingLimits, 100, 'Pizza 🍕');

const newbudget2 = addExpense(
  newbudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const newbudget3 = addExpense(newbudget2, spendingLimits, 200, 'Stuff', 'Jay');
// console.log(newbudget1);
// console.log(newbudget2);

const check = (state, limits) =>
  state.map(entry =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry
  );

const finalbudget = check(newbudget3, spendingLimits);
console.log(finalbudget);
const logbigExpenses = function (state, biglimit) {
  const bigExpense = state
    .filter(entry => entry.value <= -biglimit)
    .map(entry => entry.description.slice(-2))
    .join(' / ');

  console.log(bigExpense);
};

logbigExpenses(finalbudget, 500);
