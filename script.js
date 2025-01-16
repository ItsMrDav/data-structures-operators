'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };
// *************************************************************************
// *************** DESTRUCTIRING ARRAYS ************************************
// *************************************************************************
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// const [x, y, z] = arr;
// console.log(a, b, c);
// console.log(x, y, z);
// console.log(arr);

// Skipping array element while destructering
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // Mutating variables without destructering
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Nested destructering
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Setting default values while destructering
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
// *************************************************************************
// *************** DESTRUCTIRING OBJECTS ************************************
// *************************************************************************
const weekdays = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = `20:00`, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and, ${ing3}.`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
  // ES6 Enchanced Object Literals
  openingHours,
  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },
};

// // Destructering elements of object
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// // Renaming of elements while destructering
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // // Setting default values while destructering
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // // Mutating variables with destructering (Unlike array we have to use parenthesis)
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// console.log(a, b);
// ({ a, b } = obj);
// console.log(a, b);

// // // Nested destructering
// // 1 layer
// const {
//   fri: { open, close },
// } = openingHours;
// // 2 layer
// const {
//   openingHours: {
//     sat: { open: o, close: c },
//   },
// } = restaurant;
// console.log(open, close, o, c);

// // Destructering object as a argument in a function
// restaurant.orderDelivery({
//   time: `22:30`,
//   address: `Via del Sole, 21`,
//   mainIndex: 2,
//   starterIndex: 2,
// });
// restaurant.orderDelivery({
//   address: `Calle Sol, 14`,
//   starterIndex: 1,
// });
// *************************************************************************
// *************** SPREAD OPERATOR ************************************
// *************************************************************************
// // Basic Array Spread compared without using spread operator
// const arr = [7, 8, 9];
// const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
// const newArray = [1, 2, ...arr];
// console.log(badNewArray, newArray);
// console.log(newArray);
// console.log(...newArray);
// const newMenu = [...restaurant.mainMenu, `Gnocci`];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// // Join 2 or more arrays
// const menuX = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menuX);

// // Iterables: arrays, strings, sets, maps, NOT OBJECTS
// const str = `Davut`;
// const letters = [...str, ` `, `S.`];
// console.log(letters);
// console.log(...str);

// // Real world example using spread operator with array in function parameter
// // const ingredients = [
// //   prompt(`Let's make pasta! Ingredient 1?`),
// //   prompt(`Let's make pasta! Ingredient 2?`),
// //   prompt(`Let's make pasta! Ingredient 3?`),
// // ];
// // console.log(ingredients);
// // restaurant.orderPasta(...ingredients);

// // Spread operator with object
// const newRestaurant = { foundIn: 1998, ...restaurant, founder: `Gelly` };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = `Restaurant Roma`;
// console.log(restaurant.name);
// console.log(restaurantCopy.name);
// *************************************************************************
// *************** REST OPERATOR AND PARAMETERS ************************************
// *************************************************************************
// // 1) FOR DESTRUCTURE EXAMPLES
// // SPREAD OPERATOR, because on RIGHT side of =(assignment operator)
// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// // REST OPERATOR, because on LEFT side of =(assignment operator)
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(restaurant.mainMenu);
// console.log(restaurant.starterMenu);
// console.log(pizza, risotto, otherFood);

// // REST OPERATOR with objects
// const { sat, ...weakDays } = restaurant.openingHours;
// console.log(sat);
// console.log(weakDays);

// // 2) FOR FUNCTION EXAMPLES
// const add = function (...numbers) {
//   let sum = 0;
//   for (let num of numbers) {
//     sum += num;
//   }
//   console.log(sum);
// };
// add(2, 5);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza(`mushroom`, `onion`, `spinach`, `olives,`);
// restaurant.orderPizza(`mushroom`);
// *************************************************************************
// *************** SHORT CIRCUITING ************************************
// *************************************************************************
// console.log(`----------- OR ----------`); // Returns either first TRUTHY or last
// // Use ANY data type, return ANY data type, short-circuiting
// console.log(3 || `Davut`);
// console.log(`` || `Davut`);
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || `Hellow` || 23 || null);

// // restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log(`----------- AND ----------`); // Returns either first FALSY or last
// console.log(0 && `Davut`);
// console.log(7 && `Davut`);
// console.log(`Hellow` && 23 && null && `Davut`);

// if (restaurant.orderPizza) {
//   restaurant.orderPizza(`mushroom`, `spinach`);
// }
// restaurant.orderPizza && restaurant.orderPizza(`mushroom`, `spinach`);
// *************************************************************************
// *************** NULLISH COALESCING OPERATOR ************************************
// *************************************************************************
// // console.log(`----------- AND ----------`); // Returns either first NON-NULLISH or last
// // Nullish: null and undefined
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);
// *************************************************************************
// *************** LOGICAL ASSIGNMENT OPERATOR ************************************
// *************************************************************************
// const rest1 = {
//   name: `Capri`,
//   numGuests: 20,
//   numGuests: 0,
// };
// const rest2 = {
//   name: `La Pizza`,
//   owner: `Giovanni Rossi`,
// };

// // OR ASSIGNMENT OPERATOR
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;
// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// // NULLISH ASSIGNMENT OPERATOR
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // AND ASSIGNMENT OPERATOR
// // rest1.owner = rest1.owner && `<ANONYMOUS>`;
// // rest2.owner = rest1.owner && `<ANONYMOUS>`;
// rest1.owner &&= `<ANONYMOUS>`;
// rest2.owner &&= `<ANONYMOUS>`;

// console.log(rest1);
// console.log(rest2);
// *************************************************************************
// *************** FOR OF LOOP ************************************
// *************************************************************************
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // For LOOP
// for (let i = 0; i < menu.length; i++) {
//   console.log(menu[i]);
// }
// // FOR OF LOOP (for of loop still have continue and break feature, but no index)
// for (let item of menu) console.log(item);

// // HOW TO GET Index in For Of loop
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// console.log([...menu.entries()]);
// *************************************************************************
// *************** ENHANCED OBJECT LITERALS ************************************
// *************************************************************************
// 1- we can assing properties from somewhere directly
// 2- instead of calc: function () {} => calc() {}
// 3- we can use calculations for propert names instead of only strings => [weekday[3]]: 24;
// *************************************************************************
// *************** OPTIONAL CHAINING ************************************
// *************************************************************************
// // Without Optional Chaining
// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
// // With Optional Chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// // Example
// const days = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? `closed`;
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Example on Object
// console.log(restaurant.order?.(0, 1) ?? `Method does not exist`);
// console.log(restaurant.orderRisotto?.(0, 1) ?? `Method does not exist`);

// // Example on Array
// // const users = [{ name: `Davut`, email: `hello@davut.io` }, {}];
// const users = [];
// console.log(users[0]?.name ?? `User array empty`);
// *************************************************************************
// *************** LOOPING OBJECTS: OBJECT KEYS,VALUES,ENTRIES ************************************
// *************************************************************************
// // Propert NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // Propert VALUES
// const values = Object.values(openingHours);
// console.log(values);

// // Entire object
// const entries = Object.entries(openingHours);
// console.log(entries);
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }
