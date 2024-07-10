/* Strings */
//1.
function checkSpam(str) {
  let lowerStr = str.toLowerCase();
  return lowerStr.includes("spam") || lowerStr.includes("xxx");
}
console.log("STRINGS. TASK1");
console.log(checkSpam("get SpaM now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));

//2.
function extractCurrencyValue(str) {
  return +str.slice(1);
}
console.log("\nSTRINGS. TASK2");
console.log(extractCurrencyValue("$120") === 120);

//3.
function truncate(str, maxlength) {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
}
console.log("\nSTRINGS. TASK3");
console.log(truncate("Що я хотів би розповісти на цю тему:", 20));
console.log(truncate("Всім привіт!", 20));

//4.
function wordsCount(str) {
  return str.split(" ").length;
}
console.log("\nSTRINGS. TASK4");
console.log(wordsCount("one two three for five"));

//5.
function toTitleCase(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.toLowerCase().slice(1))
    .join(" ");
}
console.log("\nSTRINGS. TASK5");
console.log(toTitleCase("this iS some TExT"));

/* Numbers */
//1.
function isInteger(num) {
  return Number.isInteger(num);
}
console.log("\nNUMBERS. TASK1");
console.log("0 - ", isInteger(0));
console.log("1 - ", isInteger(1));
console.log("-100000 -", isInteger(-100000));
console.log("9999999999999999999999 -", isInteger(99999999999999999999999));
console.log("0.1 - ", isInteger(0.1));
console.log(Math.PI, "-", isInteger(Math.PI));
console.log("NaN - ", isInteger(NaN));
console.log("[1] - ", isInteger([1]));
console.log("5.0 - ", isInteger(5.0));
console.log("5.000000000000001 - ", isInteger(5.000000000000001));
console.log("5.0000000000000001 - ", isInteger(5.0000000000000001));

//2.
function calculateDiscount(price, discount) {
  let discountNum = parseInt(discount);
  const discountedPrice = price - (price * discountNum) / 100;
  const roundedCents = Math.ceil(discountedPrice * 100) / 100;
  return roundedCents;
}
console.log("\nNUMBERS. TASK2");
console.log(calculateDiscount(100, "50%"));
console.log(calculateDiscount(123.59, "25%"));
console.log(calculateDiscount(23.99, "30%"));
console.log(calculateDiscount(15.23, "35%"));
console.log(calculateDiscount(1000.45, "43%"));
console.log(calculateDiscount(1000.45, "44%"));
console.log(calculateDiscount(1000.17, "45%"));

//3.
function fahrenheitToCelsius(fahrenheit) {
  if (typeof fahrenheit !== "number") {
    return "Error: Input must be a number!";
  }

  const celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius.toString();
}

console.log("\nNUMBERS. TASK3");
console.log(fahrenheitToCelsius(32));
console.log(fahrenheitToCelsius(212));
console.log(fahrenheitToCelsius(98.6));

//4.
function correctRound(num) {
  return Math.round(num * 10) / 10;
}
console.log("\nNUMBERS. TASK4");
console.log((1.35).toFixed(1));
console.log((6.35).toFixed(1));
console.log(correctRound(6.35));

//5.
function numberFromObj(arg) {
  if (typeof arg === "number") {
    return arg * 3;
  } else if (arg instanceof Number) {
    return arg.valueOf() * 2;
  } else if (typeof arg === "string") {
    return Number.parseFloat(arg);
  } else {
    return "Invalid input. Expected a number or a string representing a number.";
  }
}
console.log("\nNUMBERS. TASK5");
console.log(numberFromObj(10));
console.log(numberFromObj(new Number(20)));
console.log(numberFromObj("30.45"));
console.log(numberFromObj(["Some", "string", 20, 10]));

/* Arrays */
//1.
function getModifiedArray(array) {
  let modifiedArray = [...array];
  modifiedArray.splice(0, 1, "Start");
  modifiedArray.splice(-1, 1, "End");
  return modifiedArray;
}
console.log("\nARRAYS. TASK1");
console.log(getModifiedArray([12, 6, 22, 0, -8]));
console.log(getModifiedArray(["Kate", "Peter", "Mark", "Sam"]));
console.log(getModifiedArray([false, 10, "mail", true, 20, 30]));
console.log(getModifiedArray([100, 200]));
const arr1 = [false, 10, "mail", true, 20, 30];
getModifiedArray(arr1);
console.log(arr1);

const arr2 = [100, 200];
getModifiedArray(arr2);
console.log(arr2);

//2.
function countTotalPrice(items) {
  let totalPrice = 0;
  items.forEach((item) => {
    totalPrice += item.price;
  });
  return totalPrice;
}
const items1 = [
  { name: "Apple", price: 1 },
  { name: "Orange", price: 2 },
  { name: "Mango", price: 3 },
];
console.log("\nARRAYS. TASK2");
console.log(countTotalPrice(items1));

//3.
function groupItemsByCategory(items) {
  return items.reduce((grouppedItems, item) => {
    const category = item.category;
    if (!grouppedItems[category]) {
      grouppedItems[category] = [];
    }
    grouppedItems[category].push(item.name);
    return grouppedItems;
  }, {});
}

const items2 = [
  { name: "Apple", category: "Fruit" },
  { name: "Onion", category: "Vegetable" },
  { name: "Orange", category: "Fruit" },
  { name: "Lettuce", category: "Vegetable" },
];
console.log("\nARRAYS. TASK3");
console.log(groupItemsByCategory(items2));

//4.

function noDuplicateItems(items) {
  return items.reduce((accumulator, item) => {
    if (!accumulator.includes(item)) {
      accumulator.push(item);
    }
    return accumulator;
  }, []);
}
console.log("\nARRAYS. TASK4");
console.log(noDuplicateItems([1, 2, 3, 1, 2, 3, 7, 8, 7]));

//5.
function renderArrElements(arr) {
  arr.forEach((el) => {
    if (Array.isArray(el)) {
      renderArrElements(el);
    } else {
      console.log(el);
    }
  });
}
const array = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, 12],
  ],
  [
    [13, 14, 15],
    [16, 17, 18],
  ],
  [[19, 20, "twenty"]],
];
console.log("\nARRAYS. TASK5");
renderArrElements(array);

/* Objects */
//1.
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
let schedule = {};
console.log("OBJECTS. TASK1");
console.log(isEmpty(schedule));
schedule["8:30"] = "Вставай";
console.log(isEmpty(schedule));

//2.
function sumSalary(salaries) {
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  return sum;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
console.log("OBJECTS. TASK2");
console.log(sumSalary(salaries));
console.log(sumSalary({}));

//3.
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
  return obj;
}
let menu = {
  width: 200,
  height: 300,
  title: "Моє меню",
};
console.log("OBJECTS. TASK3");
console.log(multiplyNumeric(menu));

//4.
function newObject(...objects) {
  return Object.assign({}, ...objects);
}

const o1 = { a: 1, b: 1, c: 1 };
const o2 = { b: 2, c: 2 };
const o3 = { c: 3 };
console.log("OBJECTS. TASK4");
console.log(newObject(o1, o2, o3));

//5.
const car = {
  model: "",
  year: "",
  print: function (message) {
    console.log(message);
  },
};
function createRedCarsWithBeigeSalon(model, year) {
  const newCar = Object.create(car);
  newCar.model = model;
  newCar.year = year;
  Object.defineProperties(newCar, {
    salonOptions: {
      value: "leather",
      writable: true,
    },
    color: { value: "red", writable: false },
  });
  newCar.print(
    `A ${newCar.color} car ${model} of ${year} year was created with options: ${newCar.salonOptions}`
  );
}
console.log("OBJECTS. TASK5");
console.log(createRedCarsWithBeigeSalon("Toyota Corolla", 2020));
console.log(createRedCarsWithBeigeSalon("Mazda CX-5", 2023));
