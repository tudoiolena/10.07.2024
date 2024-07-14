/* Strings */
//1.
function checkSpam(str: string): boolean {
  let lowerStr = str.toLowerCase();
  return lowerStr.includes("spam") || lowerStr.includes("xxx");
}

//2.
function extractCurrencyValue(str: string): number {
  return +str.slice(1);
}

//3.
function truncate(str: string, maxlength: number): string {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
}

//4.
function wordsCount(str: string): number {
  return str.split(" ").length;
}

//5.
function toTitleCase(str: string): string {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.toLowerCase().slice(1))
    .join(" ");
}

/* Numbers */
//1.
function isInteger(num: number): boolean {
  return Number.isInteger(num);
}

//2.
function calculateDiscount(price: number, discount: string): number {
  let discountNum = parseInt(discount);
  const discountedPrice = price - (price * discountNum) / 100;
  const roundedCents = Math.ceil(discountedPrice * 100) / 100;
  return roundedCents;
}

//3.
function fahrenheitToCelsius(fahrenheit: number): string {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius.toString();
}

//4.
function correctRound(num: number): number {
  return Math.round(num * 10) / 10;
}

//5.
type TArgument = number | string | Number;
function numberFromObj(arg: TArgument): number | string {
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

/* Arrays */
//1.
function getModifiedArray(
  array: Array<number | string>
): Array<number | string> {
  let modifiedArray = [...array];
  modifiedArray.splice(0, 1, "Start");
  modifiedArray.splice(-1, 1, "End");
  return modifiedArray;
}

//2.
type TPrice = {
  price: number;
};
type TItem = TPrice & {
  name: string;
};

function countTotalPrice(items: TPrice[]): number {
  let totalPrice = 0;
  items.forEach((item) => {
    totalPrice += item.price;
  });
  return totalPrice;
}
const items1: TItem[] = [
  { name: "Apple", price: 1 },
  { name: "Orange", price: 2 },
  { name: "Mango", price: 3 },
];

//3.
type ICategory = {
  category: string;
};

type TItem2 = ICategory & {
  name: string;
};

function groupItemsByCategory(items: TItem2[]): {
  [category: string]: TItem2[];
} {
  return items.reduce((grouppedItems, item) => {
    const category = item.category;
    if (!grouppedItems[category]) {
      grouppedItems[category] = [];
    }
    grouppedItems[category].push(item.name);
    return grouppedItems;
  }, {});
}

const items2: TItem2[] = [
  { name: "Apple", category: "Fruit" },
  { name: "Onion", category: "Vegetable" },
  { name: "Orange", category: "Fruit" },
  { name: "Lettuce", category: "Vegetable" },
];

//4.

function noDuplicateItems(
  items: Array<number | string>
): Array<number | string> {
  return items.reduce((accumulator, item) => {
    if (!accumulator.includes(item)) {
      accumulator.push(item);
    }
    return accumulator;
  }, []);
}

//5.
type NestedArray = Array<string | number | NestedArray>;
function renderArrElements(arr: NestedArray): void {
  arr.forEach((el) => {
    if (Array.isArray(el)) {
      renderArrElements(el);
    } else {
      console.log(el);
    }
  });
}
const array: NestedArray = [
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

/* Objects */
//1.
function isEmpty<T extends Record<any, any>>(obj: T): boolean {
  return Object.keys(obj).length === 0;
}
let schedule = {};
console.log("OBJECTS. TASK1");
console.log(isEmpty(schedule));
schedule["8:30"] = "Вставай";
console.log(isEmpty(schedule));

//2.
type TSalary = Record<string, number>;
function sumSalary(salaries: TSalary): number {
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  return sum;
}

let salaries: TSalary = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
console.log("OBJECTS. TASK2");
console.log(sumSalary(salaries));
console.log(sumSalary({}));

//3.

type TObj = Record<string, number | string | boolean>;
function multiplyNumeric(obj: TObj): TObj {
  for (let key in obj) {
    const value = obj[key];
    if (typeof value === "number") {
      obj[key] = value * 2;
    }
  }
  return obj;
}
let menu: TObj = {
  width: 200,
  height: 300,
  title: "Моє меню",
};

//4.
type TObjects = Record<string, number | string>;
function newObject(...objects: Record<string, number | string>[]): TObjects {
  return Object.assign({}, ...objects);
}

const o1: TObjects = { a: 1, b: 1, c: 1 };
const o2: TObjects = { b: 2, c: 2 };
const o3: TObjects = { c: 3 };

//5.
type TCar = {
  model: string;
  year: number;
  print: (message: string) => void;
};

const car: TCar = {
  model: "",
  year: null,
  print: function (message) {
    console.log(message);
  },
};

function createRedCarsWithBeigeSalon(model: string, year: number): void {
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
