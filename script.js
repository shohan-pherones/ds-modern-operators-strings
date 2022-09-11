"use strict";
const restaurant = {
  name: "Burger House 420",
  location: "Puran Dhaka, Dhaka, Bangladesh",
  categories: ["Italian", "Vegetarian", "Local", "Organic"],
  starterMenu: [
    "Chicken Cheese Burger",
    "Beef Burger",
    "Garlic Bread",
    "Italian Spicy Pasta",
    "Bagdadi Shahi Biriyani",
    "Mexican Chilli Chicken",
  ],
  mainMenu: ["Burger", "Pizza", "Pasta", "Fajita", "French Fries"],
  openingHours: {
    sun: {
      open: 10,
      close: 22,
    },
    fri: {
      open: 9,
      close: 23,
    },
    wed: {
      open: 11,
      close: 22,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 0,
    mainIndex = 0,
    time = "10:00 PM",
    address = "Unknown",
  }) {
    console.log(
      `${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderBurger: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious burger with ${ing1}, ${ing2} and ${ing3}.`
    );
  },
};

/*
//////////////////////////////////////////////////////////////////////////////////////////
// spread operators (...)
//////////////////////////////////////////////////////////////////////////////////////////
const arr = [33, 44, 55, 66];
const badArrCopy = [11, 22, arr[0], arr[1], arr[2], arr[3]];
console.log(badArrCopy);

const goodArrCopy = [11, 22, ...arr];
console.log(goodArrCopy);

const newMenu = [...restaurant.mainMenu, "Noodles", "Ramen"];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// join arrays
const allFoods = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(allFoods);

// iterables: arrays, strings, maps, sets, not objects
const gameName = "Call of Duty: Modern Warfare";
console.log(...gameName, " ", "2022");
const str = "Sho";
const [first, second, third] = [...str];
console.log(first);
console.log(second);
console.log(third);

const ingredients = ["Tomato", "Chicken", "Lettuce"];
// restaurant.orderBurger(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderBurger(...ingredients);

// copying objects

// const newRestaurant = restaurant;

const newRestaurant = { ...restaurant, founder: "Amzad" };
newRestaurant.name = "Burger Remix";
console.log(restaurant);
console.log(newRestaurant); */

// console.log(`My name is ${...str}`); // unexpected error

/* 
//////////////////////////////////////////////////////////////////////////////////////////
// destructuring objects
//////////////////////////////////////////////////////////////////////////////////////////
restaurant.orderDelivery({
  starterIndex: 2,
  mainIndex: 0,
  time: "06:00 PM",
  address: "Uttara, Dhaka",
});

restaurant.orderDelivery({
  starterIndex: 1,
  address: "Dhanmondi 27",
});

const { categories, mainMenu } = restaurant;
console.log(categories, mainMenu);

const {
  name: restaurantName,
  location: restaurantLocation,
  openingHours: hours,
} = restaurant;
console.log(restaurantName, restaurantLocation, hours);

const { sun: sunday, wed: wednesday, fri: friday } = restaurant.openingHours;
console.log(sunday, wednesday, friday);

// default values
const { main = [], starterMenu = [] } = restaurant;
console.log(main, starterMenu);

// mutating variables
let a = 100;
let b = 200;

// [a, b] = [b, a];
const obj = { a: 20, b: 30 };

({ a, b } = obj);

console.log(a, b);

// nested objects
const tumpa = {
  friends: {
    first: "Sabrina",
    second: "Shohan",
  },
};

// const { first, second } = tumpa.friends;
const {
  friends: { first, second },
} = tumpa;
console.log(first, second); */

/*
//////////////////////////////////////////////////////////////////////////////////////////////
// destructuring arrays
//////////////////////////////////////////////////////////////////////////////////////////////
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

const arr2 = [7, 8, 9];
const [m, n, o] = arr2;
console.log(m, n, o);

let [main, , , secondary] = restaurant.categories;

const [food1, , , food2] = restaurant.mainMenu;
console.log(food1, food2);

// switching variables
let first = 10;
let second = 20;
// let temp = first;
// first = second;
// second = temp;
[first, second] = [second, first];
console.log(first, second);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [firstOrder, secondOrder] = restaurant.order(2, 0);
console.log(firstOrder, secondOrder);

//nested destructuring
const nested = [2, 4, [5, 6]];
const [i, j, [k, l]] = nested;
// const [i, j, [k, l]] = nested;
console.log(i, j, k, l);

const nested2 = ["Tumpa", "Ayesha", ["Sabrina", "Nibir"], "Nirob"];
const [f1, f2, [f3, f4], f5] = nested2;
console.log(f1, f2, f3, f4, f5);

// default values
const arrNew = [10, 30];
const [p = 100, q = 100, r = 100, w = 100] = arrNew;
console.log(p, q, r, w); */
