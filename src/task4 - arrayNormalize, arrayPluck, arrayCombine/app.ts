type TTestData = Array<number | string | boolean>;
type TTestData2 = Array<number>;
type TSkills = {
  php: number;
  js: number;
  madness: number;
  rage: number;
};
type TTestData3 = {
  name: string;
  email: string;
  age: number;
  skills: TSkills;
};
type TData = {
  name: string;
  email: string;
  age: string | number;
};
type TTestData4 = Array<number | string | boolean | TData | TTestData4>;

let testData: TTestData = [
  1,
  2,
  1990,
  85,
  24,
  "Vasya",
  "colya@example.com",
  "Rafshan",
  "ashan@example.com",
  true,
  false,
];
let testData2: TTestData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1];
let testData3: TTestData3[] = [
  {
    name: "Vasya",
    email: "vasya@example.com",
    age: 20,
    skills: { php: 0, js: -1, madness: 10, rage: 10 },
  },
  {
    name: "Dima",
    email: "dima@example.com",
    age: 34,
    skills: { php: 5, js: 7, madness: 3, rage: 2 },
  },
  {
    name: "Colya",
    email: "colya@example.com",
    age: 46,
    skills: { php: 8, js: -2, madness: 1, rage: 4 },
  },
  {
    name: "Misha",
    email: "misha@example.com",
    age: 16,
    skills: { php: 6, js: 6, madness: 5, rage: 2 },
  },
  {
    name: "Ashan",
    email: "ashan@example.com",
    age: 99,
    skills: { php: 0, js: 10, madness: 10, rage: 1 },
  },
  {
    name: "Rafshan",
    email: "rafshan@example.com",
    age: 11,
    skills: { php: 0, js: 0, madness: 0, rage: 10 },
  },
];
let testData4: TTestData4 = [
  { name: "Vasya", email: "vasya@example.com", age: "20" },
  { name: "Dima", email: "dima@example.com", age: 34.6 },
  { name: "Colya", email: "colya@example.com", age: 46 },
  { name: "Misha", email: "misha@example.com", age: 16 },
  { name: "Ashan", email: "ashan@example.com", age: 99 },
  { name: "Rafshan", email: "rafshan@example.com", age: 11 },
  1,
  2,
  1990,
  85,
  24,
  "Vasya",
  "colya@example.com",
  "Rafshan",
  "ashan@example.com",
  true,
  false,
  [
    [
      [
        [
          1,
          2,
          1990,
          85,
          24,
          "Vasya",
          "colya@example.com",
          "Rafshan",
          "ashan@example.com",
          true,
          false,
          [{ name: "Rafshan", email: "rafshan@example.com", age: 11 }],
        ],
      ],
    ],
  ],
];

function array_skip_until(
  arr: Array<string | number | boolean>,
  value: number | string | boolean
): Array<string | number | boolean> {
  const indexOfElement = arr.indexOf(value);
  if (indexOfElement === -1) {
    return [];
  }
  return arr.slice(indexOfElement);
}

// let result = array_skip_until(testData, 2); // [2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false]
// let result2 = array_skip_until(testData, "Rafshan"); // ["Rafshan", "ashan@example.com", true, false]
// let result3 = array_skip_until(testData, "asd"); // []

// console.log(result);
// console.log(result2);
// console.log(result3);

// Создать функцию которая нормализует данные в массиве исключая или преобразуя не подходящие.
//    Доступные шаблоны:
//    'string' => строки,
//    'number' => числа,
//    'int' => целые числа,
//    'float' => числа с плавающей точкой,
//    'bool' => true | false,
//    'function' => функция,
//    'array' => массив,
//    Object => объект {name: 'string'}
//    Синтаксис: array_normalize(arr: array, shema: string|Object[, transform: bool = false]): any[]

type TScheme =
  | "string"
  | "number"
  | "int"
  | "float"
  | "bool"
  | "function"
  | "array"
  | { [key: string]: TScheme };

type Result =
  | number
  | string
  | boolean
  | unknown[]
  | Function
  | { [key: string]: Result };

function arrayNormalize(
  arr: unknown[],
  scheme: TScheme,
  transform: boolean = false
): Result[] {
  if (scheme === "string") {
    return normalizeString(arr, transform);
  }
  if (scheme === "float") {
    return normalizeFloat(arr, transform);
  }
  if (scheme === "int") {
    return normalizeInt(arr, transform);
  }
  if (scheme === "number") {
    return normalizeNumber(arr, transform);
  }
  if (scheme === "bool") {
    return normalizeBool(arr, transform);
  }
  if (scheme === "array") {
    return normalizeArr(arr, transform);
  }
  if (scheme === "function") {
    return normalizeFunction(arr, transform);
  }

  if (typeof scheme === "object") {
    return normalizeObject(arr, scheme, transform);
  }
}

function normalizeString(
  arr: Array<unknown>,
  transform: boolean = false
): Array<string> {
  if (transform) {
    arr = arr.map((el) => {
      if (typeof el === "number" || typeof el === "string") {
        return String(el);
      }
    });
  }
  return arr.filter((el): el is string => typeof el === "string");
}

function normalizeNumber(
  arr: Array<unknown>,
  transform: boolean = false
): Array<number> {
  if (transform) {
    arr = arr.map((el) => {
      const numberValue = Number(el);
      if (!Number.isNaN(numberValue)) {
        return numberValue;
      }
    });
  }
  return arr.filter((el): el is number => typeof el === "number");
}

function normalizeInt(
  arr: Array<unknown>,
  transform: boolean = false
): Array<number> {
  if (transform) {
    arr = arr.map((el) => parseInt(String(el)));
  }
  return arr.filter(
    (el): el is number => typeof el === "number" && Number.isInteger(el)
  );
}

function normalizeFloat(
  arr: Array<unknown>,
  transform: boolean = false
): Array<number> {
  if (transform) {
    arr = arr.map((el) => parseFloat(String(el)));
  }
  return arr.filter(
    (el): el is number => typeof el === "number" && !Number.isInteger(el)
  );
}

function normalizeBool(
  arr: Array<unknown>,
  transform: boolean = false
): Array<boolean> {
  if (transform) {
    arr = arr.map((el) => Boolean(el));
  }
  return arr.filter((el): el is boolean => typeof el === "boolean");
}

function normalizeArr(
  arr: Array<unknown>,
  transform: boolean = false
): Array<TTestData4> {
  if (transform) {
    arr = arr.map((el) => {
      return [el];
    });
  }
  return arr.filter((el): el is TTestData4 => Array.isArray(el));
}

function normalizeFunction(
  arr: Array<unknown>,
  transform: boolean = false
): Array<Function> {
  if (transform) {
    arr = arr.map((el) => () => el);
  }
  return arr.filter((el): el is Function => typeof el === "function");
}

function normalizeObject(
  arr: Array<unknown>,
  scheme: Record<string, TScheme>,
  transform: boolean = false
): Result[] {
  const arrOfNormalizedObject = [];

  const arrOfObj = arr.filter((el) => typeof el === "object");

  for (const obj of arrOfObj) {
    const normalizedObject = {};

    for (const key in scheme) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        const resultOfNormalizeValues = arrayNormalize(
          [value],
          scheme[key],
          transform
        );
        if (resultOfNormalizeValues.length > 0) {
          normalizedObject[key] = resultOfNormalizeValues;
        }
      }
    }

    if (Object.keys(normalizedObject).length > 0) {
      arrOfNormalizedObject.push(normalizedObject);
    }
  }
  return arrOfNormalizedObject;
}

let result = arrayNormalize(testData4, "string"); // ['Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
let result2 = arrayNormalize(testData4, "string", true); // ['1', '2', '1990', '85', '24', 'Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
let result3 = arrayNormalize(testData4, { age: "int" }); // []
let result4 = arrayNormalize(testData4, { age: "int" }, true); // [{age: 20}, {age: 34}, {age: 46}, {age: 16}, {age: 99}, {age: 11}]
// let result3 = arrayNormalize(testData4, { email: "string" });

console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);

// 11. Сделать функцию которая сможет делать срез данных с ассоциативного массива.
// Синтаксис: array_pluck(arr: array, path: string): any[]
// Пример:
// let result = array_pluck(testData3, 'name') // ["Vasya", "Dima", "Colya", "Misha", "Ashan", "Rafshan"]
// let result2 = array_pluck(testData3, 'skills.php') // [0, 5, 8, 6, 0, 0]

function arrayPluck(
  arr: Array<string | number | boolean>,
  path: string
): Array<string | number | boolean> {
  return arr.reduce((accum, currObj) => {
    const fullPaths = path.split(".");
    console.log("currObj", currObj);
    accum.push(findValueInObj(currObj, fullPaths));
    return accum;
  }, []);
}

function findValueInObj<T>(obj: T, fullPaths: string[]): T {
  for (const key of fullPaths) {
    if (obj.hasOwnProperty(key)) {
      obj = obj[key];
    }
  }
  return obj;
}

// let result = arrayPluck(testData3, "name");
// console.log(result);
// let result2 = arrayPluck(testData3, "skills.php");
// console.log(result2);

//12. Создать функцию которая создает объект на основании двух представленных массивов используя один как ключи, а другой как значения. Не подходящие ключи массивов должны быть исключены.
// Синтаксис: array_combine(keys: array, values: array): Object
// Пример:
// let result = array_combine(testData, testData2) // {1: 1, 2: 2, 1990: 1990, 85: 85, 24: 24, "Vasya": 5, "colya@example.com": 7, "Rafshan": 8.1, "ashan@example.com": undefined}

function arrayCombine<T>(
  keys: TTestData2,
  values: TTestData
): Record<string | number, T> {
  let resultObj = {};

  const correctKeysArr = keys.filter(
    (el) => typeof el === "string" || typeof el === "number"
  );
  for (let i = 0; i < correctKeysArr.length; i++) {
    resultObj[correctKeysArr[i]] = values[i];
  }
  return resultObj;
}
// let result = arrayCombine(testData, testData2);
// console.log(result);
