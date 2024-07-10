/* Strings */
//1.
const sumOfLen = (...strings: string[]): number => {
  return strings.reduce(
    (totalLength, currentLength) => totalLength + currentLength.length,
    0
  );
};

//2.
const stringToArray = (str: string, separator: string = " "): string[] => {
  return str.replace(/&/g, "@").trim().split(separator);
};

//3.
const capitalizeRepeatWords = (str: string, n: number = 0): string => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .concat("! ")
    .repeat(n);
};

//4.

const uncamelize = (str: string, separator: string = " "): string => {
  const words = str
    .replace(/([a-z])([A-Z])/g, `$1${separator}$2`)
    .toLowerCase()
    .split(separator);
  return words.reverse().join(separator);
};

//5.
const countSubString = (str: string, matcher: string): number => {
  const regex = new RegExp(matcher, "gi");
  const matches = str.match(regex);
  return matches ? matches.length : 0;
};

/* Numbers */
//1.
const guid = (len: number = 4): string => {
  return "xxxx-"
    .repeat(len)
    .slice(0, -1)
    .replace(/[x]/g, (c) => {
      const random = Math.floor(Math.random() * len);
      return random.toString(len);
    });
};

//2.
const numberTest = (num: number): string => {
  return num - Math.floor(num)
    ? `${Math.abs(num)} has a decimal place.`
    : `${Math.abs(num)} is a whole number.`;
};

//3.
const formatNumber = (num: number, decimals: number = 2) => {
  return num.toFixed(decimals);
};

//4.

const roundPositiveNegative = (str: string): string => {
  const numbers = str.match(/-?\d+(\.\d+)?/g);
  if (!numbers) {
    return "No numbers found.";
  }
  const lastNumberStr = numbers.pop() as string;
  let lastNumber = parseFloat(lastNumberStr);
  const roundedNumber =
    Math.abs(lastNumber) < 0 ? Math.ceil(lastNumber) : Math.floor(lastNumber);
  return str.concat("RESULT: ", String(roundedNumber));
};

//5.
const calculateDistance = (
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number => {
  if (
    typeof x1 !== "number" ||
    typeof y1 !== "number" ||
    typeof x2 !== "number" ||
    typeof y2 !== "number"
  ) {
    console.log("All arguments must be numbers.");
  }
  const squaredDistanceX = Math.pow(x2 - x1, 2);
  const squaredDistanceY = Math.pow(y2 - y1, 2);
  const distance = Math.sqrt(squaredDistanceX + squaredDistanceY);
  return distance;
};

const shortestDistance = (dist1: number, dist2: number): string => {
  return Math.min(dist1, dist2).toFixed(1);
};

/* Arrays */
//1.
type TParameter = "greater" | "less";

const filterNums = (
  array: number[],
  number: number = 0,
  parameter: TParameter = "greater"
): number[] => {
  if (parameter === "greater") {
    return array.filter((el) => el > number);
  }
  return array.filter((el) => el < number);
};

//2.
const maxInterv = (...arguments: number[]): number | string => {
  const array = [...arguments];
  const result = array.map((el, index, arr) => {
    let intervalArray: number;
    const next = arr[index + 1];
    if (next !== undefined) {
      intervalArray = Math.abs(next - el);
    }
    return intervalArray;
  });
  return Math.max(...result);
};

//3.
const combineArray = (arr1: number[], arr2: number[]): number[] => {
  const numFromArr1 = arr1.filter((el) => {
    if (typeof el === "number") return el;
  });
  const numFromArr2 = arr2.filter((el) => {
    if (typeof el === "number") return el;
  });
  return numFromArr1.concat(numFromArr2);
};

//4.
const longestString = (list: string[]): string => {
  if (!list.some((arg) => typeof arg === "string")) {
    return "Arguments must be strings";
  }
  return list.reduce((longestString, currentString, currentIndex) => {
    if (
      currentString.length > longestString.length ||
      (currentString.length === longestString.length &&
        currentIndex > list.indexOf(longestString))
    ) {
      return currentString;
    } else {
      return longestString;
    }
  }, "");
};

//5.

type TStudent = {
  name: string;
  languages: string[];
  age: number;
};

let students: TStudent[] = [
  {
    name: "Anna",
    languages: ["English", "Ukrainian"],
    age: 21,
  },
  {
    name: "Bob",
    languages: ["Polish", "Spanish"],
    age: 26,
  },
  {
    name: "Alice",
    languages: ["Italian", "Korean"],
    age: 18,
  },
];
const getLanguages = (
  students: TStudent[],
  callback = (student: TStudent): boolean => true
): string[] => {
  return students.reduce((languages, student) => {
    if (callback(student)) {
      return languages.concat(student.languages);
    }
    return languages;
  }, []);
};
