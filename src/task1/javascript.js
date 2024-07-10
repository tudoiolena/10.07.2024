/* Strings */
//1.
const sumOfLen = (...strings) => {
  return strings.reduce(
    (totalLength, currentLength) => totalLength + currentLength.length,
    0
  );
};

console.log("STRINGS.TASK1 Results of function sumOfLen: ");
console.log(sumOfLen("hello", "hi"));
console.log(sumOfLen("hi"));
console.log(sumOfLen());
console.log(sumOfLen("hello", "hi", "my name", "is"));
console.log(sumOfLen("hello", "hi", "my name", "is2"));
console.log(sumOfLen("hello", "my name", "is"));
console.log(sumOfLen("hello", "my name"));

//2.
const stringToArray = (str, separator = " ") => {
  return str.replace(/&/g, "@").trim().split(separator);
};
console.log("\nSTRINGS.TASK2 Results of function stringToArray: ");
console.log(stringToArray("hello, world"));
console.log(stringToArray("    hello, world   "));
console.log(stringToArray("hello, world", ","));
console.log(stringToArray("hello world", ","));
console.log(stringToArray("hello, world, my; name is", ";"));
console.log(stringToArray("hello, world, &my: &name &is : abc&*", ":"));

//3.
const capitalizeRepeatWords = (str, n = 0) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .concat("! ")
    .repeat(n);
};
console.log("\nSTRINGS.TASK3 Results of function capitalizeRepeatWords: ");
console.log(capitalizeRepeatWords("hello my name is olena", 2));
console.log(capitalizeRepeatWords("UkrainE is tHe capital of gReaT peoPLe", 3));

//4.
const uncamelize = (str, separator = " ") => {
  const words = str
    .replace(/([a-z])([A-Z])/g, `$1${separator}$2`)
    .toLowerCase()
    .split(separator);
  return words.reverse().join(separator);
};
console.log("\nSTRINGS.TASK4 Results of function uncamelize: ");
console.log(uncamelize("helloWorld"));
console.log(uncamelize("helloWorld", "-"));
console.log(uncamelize("helloWorld", "_"));
console.log(uncamelize("helloWorld one oneTwo SomeDummyText", "--"));

//5.
const countSubString = (str, matcher) => {
  const regex = new RegExp(matcher, "gi");
  const matches = str.match(regex);
  return matches ? matches.length : 0;
};
console.log("\nSTRINGS.TASK5 Results of function countSubString: ");
console.log(
  countSubString("The quick brown fox jumps over the lazy dog", "the")
);
console.log(
  countSubString("The quick brown fox jumps over the lazy dog", "fox")
);
console.log(
  countSubString("The quick brown fox jumps over the lazy dog", "rabbit")
);

/* Numbers */
//1.
const guid = (len = 4) => {
  return "xxxx-"
    .repeat(len)
    .slice(0, -1)
    .replace(/[x]/g, (c) => {
      const random = Math.floor(Math.random() * len);
      return random.toString(len);
    });
};
console.log("\nNUMBERS.TASK1 Results of function guid: ");
console.log(guid());
console.log(guid(5));
console.log(guid(15));

//2.
const numberTest = (num) => {
  if (isNaN(num)) {
    return `${num} - This is not a number!!!`;
  } else {
    // return num % 1 !== 0
    return num - Math.floor(num)
      ? `${Math.abs(num)} has a decimal place.`
      : `${Math.abs(num)} is a whole number.`;
  }
};
console.log("\nNUMBERS.TASK2 Results of function numberTest: ");
console.log(numberTest(25.66));
console.log(numberTest(10));
console.log(numberTest(-25));
console.log(numberTest(-25.456));
console.log(numberTest(0));
console.log(numberTest("10.0"));
console.log(numberTest("1000001"));
console.log(numberTest("10.423440000"));
console.log(numberTest("hello"));

//3.
const formatNumber = (num, decimals = 2) => {
  if (isNaN(num)) {
    return `${num} - This is not a number!!!`;
  }
  return parseFloat(num).toFixed(decimals);
};
console.log("\nNUMBERS.TASK3 Results of function formatNumber: ");
console.log(formatNumber(12.3453));
console.log(formatNumber(15.12));
console.log(formatNumber(32.000021221));
console.log(formatNumber("10.423440000"));
console.log(formatNumber("10.423440000 lalalala"));
console.log(formatNumber("hello"));
console.log(formatNumber(32.3032453, 3));
console.log(formatNumber(155.112, 4));

//4.
const roundPositiveNegative = (str) => {
  if (typeof str !== "string") return "Provided data is not a string";
  const numbers = str.match(/-?\d+(\.\d+)?/g);
  if (!numbers) {
    return "No numbers found.";
  }
  const lastNumberStr = numbers.pop();
  let lastNumber = parseFloat(lastNumberStr);
  const roundedNumber =
    Math.abs(lastNumber) < 0 ? Math.ceil(lastNumber) : Math.floor(lastNumber);
  return str.concat(" RESULT: ", roundedNumber);
};

console.log("\nNUMBERS.TASK4 Results of function roundPositiveNegative: ");
console.log(roundPositiveNegative("The numbers are 12.345 and -3.48"));
console.log(roundPositiveNegative("The number is 15.12"));
console.log(roundPositiveNegative("The numbers are 48.234 and -15.6"));
console.log(roundPositiveNegative("The numbers of zero, 15.01 and 49.99"));
console.log(roundPositiveNegative("The number is 15.51"));
console.log(roundPositiveNegative("The number is 1"));
console.log(roundPositiveNegative("1"));
console.log(roundPositiveNegative(25));
console.log(roundPositiveNegative(25, 12, -2.4));
console.log(roundPositiveNegative([25, "hello"]));

//5.
const calculateDistance = (x1, y1, x2, y2) => {
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

const shortestDistance = (dist1, dist2) => {
  return Math.min(dist1, dist2).toFixed(1);
};

console.log("\nNUMBERS.TASK5 Results of function calculateDistance: ");
const point1 = { x: 1, y: 2 };
const point2 = { x: 4, y: 5 };
const point3 = { x: 2, y: 8 };
const point4 = { x: -1, y: 3 };
const distance1_2 = calculateDistance(point1.x, point1.y, point2.x, point2.y);
const distance3_4 = calculateDistance(point3.x, point3.y, point4.x, point4.y);
const shortestDist = shortestDistance(distance1_2, distance3_4);
console.log("Distance between points 1 and 2:", distance1_2);
console.log("Distance between points 3 and 4:", distance3_4);
console.log("The shorthest distance is ", shortestDist);

/* Arrays */
//1.
const filterNums = (array, number = 0, parameter = "greater") => {
  if (
    !Array.isArray(array) ||
    typeof number !== "number" ||
    typeof parameter !== "string"
  ) {
    return console.log(
      "First argument must be an array, second is a nnumber and third is a string"
    );
  }

  if (parameter === "greater") {
    return array.filter((el) => el > number);
  } else if (parameter === "less") {
    return array.filter((el) => el < number);
  } else {
    return console.log("There is no such a parameter.");
  }
};
console.log("\nARRAYS.TASK1 Results of function filterNums: ");
console.log(filterNums([-3, 3, 4, 0, 44, -11, 5], 11, "greater"));
console.log(filterNums([-3, 3, 4, 0, 44, -11, 5], 5, "less"));
console.log(filterNums([-3, 3, 4, 0, 44, -11, 5], -30, "less"));
console.log(filterNums([-3, 3, 4, 0, 44, -11, 5]));
console.log(filterNums([-3, 3, 4, 0, 44, -11, 5], 9));
console.log(filterNums("lalala", 9));
console.log(filterNums([-3, 3, 4, 0, 44, -11, 5], "fake value", "less"));
console.log(filterNums([-3, 3, 4, 0, 44, -11, 5], "fake value", 49));

//2.
const maxInterv = (...arguments) => {
  if (!arguments.every((arg) => typeof arg === "number")) {
    return console.log("All arguments must be numbers");
  }
  const array = [...arguments];
  let intervalArray = [];
  const result = array.map((el, index, arr) => {
    const next = arr[index + 1];
    if (next !== undefined) {
      intervalArray = Math.abs(next - el);
    }
    return intervalArray;
  });
  return Math.max(...result);
};

console.log("\nARRAYS.TASK2 Results of function maxInterv: ");
console.log(maxInterv(3, 5, 2, 7));
console.log(maxInterv(3, 5, 2, 7, 11, 0, -2));
console.log(maxInterv(3, 5));
console.log(maxInterv(3));
console.log(maxInterv(3, 5, 2, 8));
console.log(maxInterv(3, 5, 2, 37, 11, 0, -2));
console.log(maxInterv(3, 5, "2", 37, 11, 0, -2));

//3.
combineArray = (arr1, arr2) => {
  const numFromArr1 = arr1.filter((el) => {
    if (typeof el === "number") return el;
  });
  const numFromArr2 = arr2.filter((el) => {
    if (typeof el === "number") return el;
  });
  return numFromArr1.concat(numFromArr2);
};

console.log("\nARRAYS.TASK3 Results of function combineArray: ");
console.log(combineArray([12, "User01", 22, true, -8], ["Index", 6, null, 15]));
console.log(
  combineArray(
    ["User01", "User02", "User03", "User04"],
    ["Data1", 33, "Data2", 44]
  )
);
console.log(
  combineArray([10, 20, 30], ["Data1", "Data2", "Data3", "Data4", "Data5"])
);
console.log(combineArray([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));
console.log(combineArray(["1", "2", "3", "4"], ["first", "second", "third"]));

//4.
longestString = (list) => {
  if (!list.some((arg) => typeof arg === "string")) {
    return console.log("Arguments must be strings");
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

console.log("\nARRAYS.TASK4 Results of function longestString: ");
console.log(longestString(["maxxx", "NewUser", "admin111", "Administrator"]));
console.log(longestString(["User123", "Steven Dobson", "qwerty12345"]));
console.log(longestString(["Carl1999", "ivan@gmail.com", "nick-name"]));
console.log(longestString(["user1", "user2", "333", "user4", "aa"]));
console.log(
  longestString(["larian", "questttt", "longest_user_name", "Nick Nickson"])
);
console.log(longestString(["123", 345, "333", "user4", "aa"]));
console.log(longestString([123, 345, 333, 48754875, 0]));

//5.
let students = [
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
const getLanguages = (students, callback = () => true) => {
  return students.reduce((languages, student) => {
    if (callback(student)) {
      return languages.concat(student.languages);
    }
    return languages;
  }, []);
};

console.log("\nARRAYS.TASK5 Results of function getLanguages: ");
console.log(getLanguages(students));
console.log(getLanguages(students, (student) => student.age < 21));
console.log(getLanguages(students, (student) => student.name.startsWith("A")));
console.log(getLanguages(students, (student) => student.name.length > 2));
