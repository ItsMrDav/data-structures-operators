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
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = `20:00`,
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and, ${ing3}.`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
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
