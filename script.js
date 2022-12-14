"use strict";

const openingHours = {
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
};

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

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours,

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

  orderBurger(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious burger with ${ing1}, ${ing2} and ${ing3}.`
    );
  },

  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};

/*
/////////////////////////////////////////////////////////////////////
// Maps
/////////////////////////////////////////////////////////////////////
const rest = new Map();
rest.set("name", "Pizza Hutt");
rest.set(1, "Dhaka");
rest.set(2, "Chittagong");
rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 10)
  .set("close", 22)
  .set(true, "We are open")
  .set(false, "We are closed");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 14;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("capital"));
rest.delete(2);
// rest.clear();
const arr = [1, 2];
rest.set(arr, "Array");
console.log(rest.get(arr));
console.log(rest);

const lang = new Map([
  [1, "C"],
  [2, "C++"],
  [3, "Java"],
  [4, "JavaScript"],
  [5, "Python"],
  [6, "C#"],
]);
console.log(lang);

for (const [key, value] of lang) {
  console.log(`${key}: ${value}`);
}

// object to map
const hours = new Map(Object.entries(openingHours));
console.log(hours);

// map to array
console.log(...lang);
console.log([...lang.keys()]);
console.log([...lang.values()]); */
/*
////////////////////////////////////////////////////////////////////////////////////
// Looping objects
//////////////////////////////////////////////////////////////////////////////////
// Property names (key)
const properties = Object.keys(restaurant.openingHours);
console.log(properties);

for (const day of properties) {
  console.log(day);
}

// Property values
const values = Object.values(restaurant.openingHours);
console.log(values);

for (const day of values) {
  console.log(day.open);
  console.log(day.close);
}

// Property entries (key, value)
const entries = Object.entries(restaurant.openingHours);
console.log(entries);

for (const [key, value] of entries) {
  console.log(
    `On ${key}, we are open at ${value.open} and close at ${value.close}`
  );
} */

/*
////////////////////////////////////////////////////////////////////////////////////
// Sets
////////////////////////////////////////////////////////////////////////////////////
const foods = new Set([
  "Pizza",
  "Burger",
  "Pizza",
  "Pasta",
  "Pizza",
  "Noodles",
]);
console.log(foods.size);
console.log(foods.has("Pizza"));
foods.add("Fajita");
// const pasta = foods.delete("Pasta");
// foods.clear();
// console.log(pasta);
console.log(foods);

for (const food of foods) {
  console.log(food);
}

const arr = [20, 11, 21, 20, 41, 11, 10, 1, 0, 10, 10, 20, 41, 11];
const uniqueArr = [...new Set(arr)];
// console.log(uniqueArr); */

/*
////////////////////////////////////////////////////////////////////////////////
// Optional chaining
////////////////////////////////////////////////////////////////////////////////
console.log(restaurant?.openingHours?.sat?.open);
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours.fri?.open);

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "off-day";
  console.log(`On ${day}, opens ${open}`);
}

console.log(restaurant.order?.(0, 1));
console.log(restaurant.orderPasta?.(1, 1)); */

/*
////////////////////////////////////////////////////////////////////////////////////
// for of
////////////////////////////////////////////////////////////////////////////////////
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (const number of arr) {
  console.log(number);
}

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(...menu.entries()); // (key, value)

for (const [i, food] of menu.entries()) {
  console.log(`${i + 1}: ${food}`);
}

const friends = ["Shohan", "Tumpa", "Maisha", "Nibir", "Rahat"];
const friendsEntries = friends.entries();

for (const [i, friend] of friendsEntries) {
  console.log(`${i + 1}: ${friend}`);
} */

/*
////////////////////////////////////////////////////////////////////////////////////
// Logical assignment operators
////////////////////////////////////////////////////////////////////////////////////
const rest1 = {
  name: "Pizza Club",
  guests: 0,
};

const rest2 = {
  name: "Food Island",
  owner: "Ayesha",
};

// OR
// rest1.guests = rest1.guests || 10;
// rest2.guests = rest2.guests || 10;

// rest1.guests ||= 10;
// rest2.guests ||= 10;

rest1.guests ??= 10;
rest2.guests ??= 10;

// rest1.owner = rest1.owner && "Tumpa";
// rest2.owner = rest2.owner && "Tumpa";

rest1.owner &&= "Tumpa";
rest2.owner &&= "Tumpa";

console.log(rest1.owner);
console.log(rest2.owner);
console.log(rest1.guests);
console.log(rest2.guests); */

/*
////////////////////////////////////////////////////////////////////////////////////
// Nullish coalescing operator
////////////////////////////////////////////////////////////////////////////////////
//Nullish values: null, undefined (not 0 and '')
restaurant.guests = 0;
const guests = restaurant.guests ?? 20;
console.log(guests); */

/*
////////////////////////////////////////////////////////////////////////////////////
// Short circuiting
////////////////////////////////////////////////////////////////////////////////////
console.log(3 || "Tumpa");
console.log("" || "Sabrina");
console.log(false || 0);
console.log(undefined || null);
console.log(undefined || 0 || "" || "Maysha" || 23 || null);
console.log(false || true);
console.log(0 || "");

restaurant.guests = 0;
const guests = restaurant.guests ? restaurant.guests : 20;
console.log(guests);

const guests2 = restaurant.guests || 20; // we will see later
console.log(guests2);

restaurant.founder = "Tumpa";
const founder = restaurant.founder || "Amzad";
console.log(founder);

console.log(0 && "Shohan");
console.log(7 && "Spiderman");
console.log("Tumpa" && "Sabrina" && null && 0 && "Nibir");
console.log(false && true);
console.log("Fahim" && 12 && " " && 23 && true && undefined);

// practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza("Mushrooms", "Onions", "Tomatoes");
}

restaurant.orderPizza &&
  restaurant.orderPizza("Mushrooms", "Onions", "Tomatoes"); */

/*
////////////////////////////////////////////////////////////////////////////////////
// rest pattern and parameters
////////////////////////////////////////////////////////////////////////////////////
// 1. destructuring
// Spread, because on right side of =
const arr = [1, 2, ...[3, 4]];
console.log(arr);

const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(a, b, others);

const [x, , y, ...friends] = ["Rahat", "Shohan", "Tumpa", "Sabrina", "Faysal"];
console.log(x, y, friends);

const [burger, , pasta, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(burger, pasta, otherFood);

// Objects
const { fri: friday, ...otherDays } = restaurant.openingHours;
console.log(friday, otherDays);

// 2. function
// Rest parameter for function's parameter slot
const add = function (...numbers) {
  // console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(2, 3, 5);
add(2, 3, 5, 6, 7, 8);
add(50, 34);

const arr2 = [33, 4, 55];
add(...arr2); //  spread

restaurant.orderPizza("Mushrooms"); */

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
console.log(newRestaurant); 

// console.log(`My name is ${...str}`); // unexpected error
*/

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

/* // Strings
const station = "Pahartoli Station";
const train = "T678 Provati";

console.log(train[0]);
// console.log(train[-1]);
console.log(train.at(0));
console.log(train[1]);
console.log("T555"[0]);

console.log(station.length);
console.log("T555".length);

console.log(station.indexOf("P"));
console.log(station.indexOf("o"));
console.log(station.indexOf("a"));
console.log(station.lastIndexOf("a"));
console.log(station.indexOf("Station"));

// Slice(starting index, ending index - not included)
console.log(station.slice(10));
console.log(station.slice(0, 9));
console.log(station.slice(0, station.indexOf(" ")));
console.log(station.slice(station.indexOf(" ") + 1));
console.log(station.slice(1, -1));
console.log(station.at(-1)); // ES2022
// last element
console.log(station[station.length - 1]);
console.log(station.at(-1));
console.log(station.slice(-1));

const checkWindowSeat = function (seatNumber) {
  // W is for window
  // M for middle
  // C for cabin
  const slicedSeatNum = seatNumber.slice(2, 3); //W or M or C
  if (slicedSeatNum === "W")
    console.log(
      `Your seat number is ${seatNumber} and it's placed beside window.`
    );
  else
    console.log(
      `Your seat number is ${seatNumber} and it's not placed beside window.`
    );
};

checkWindowSeat("22W11");
checkWindowSeat("23M34");
checkWindowSeat("24C33");
checkWindowSeat("76W56");
checkWindowSeat("44M34");

console.log(typeof new String("Shohan")); // object
console.log(typeof new String("Shohan").slice(0)); // string */

// Strings - part 2
const station = "Komolapur Station";

console.log(station.toLowerCase());
console.log(station.toUpperCase());
console.log("Shohan".toUpperCase());

function fixCap(name) {
  const lowerName = name.toLowerCase(); // shohan
  const correctName = lowerName.at(0).toUpperCase() + lowerName.slice(1); // Shohan
  return correctName;
}

console.log(fixCap("sHoHan"));
console.log(fixCap("TUMPa"));
console.log(fixCap("AyeSHA"));

function normalizedEmail(email) {
  const normalizedEmail = email.toLowerCase().trim();
  return normalizedEmail;
}

console.log(normalizedEmail("  Shohan@Gmail.COM \n"));
console.log(normalizedEmail("     tumpA@gMail.Com   \n"));

// replace
const jutaPrice = "500TK";
const jutaPriceUSD = jutaPrice.replace("TK", "$");
console.log(jutaPriceUSD);
console.log(jutaPrice);

const warningMsg = "Beware of Trojan.86! Trojan.86! Trojan.86!"; //Trojan v86
// const warningMsgCorrect = warningMsg.replace(".", " v");
// reg exp
// const warningMsgCorrect = warningMsg.replace(/Trojan/g, "MyDoom");
// const warningMsgCorrect = warningMsg.replace(/.86/g, " v96");
const warningMsgCorrect = warningMsg.replaceAll(".", " v"); // ES2022
console.log(warningMsgCorrect);

// Repeat
const message = "Bad weather!";
console.log(message.repeat(10));

function planeInLine(num) {
  console.log(`There are ${num} planes in line! ${"??????".repeat(num)}`);
}

planeInLine(5);
planeInLine(8);
planeInLine(3);
planeInLine(6);

// Split and join
console.log("it+is+a+very+nice+day".split("+"));
const splittedName = "Shohanur Rahman".split(" ");
const joinedName = splittedName.join(" ");
console.log(splittedName);
console.log(joinedName);
