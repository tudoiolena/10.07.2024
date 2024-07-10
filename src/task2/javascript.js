/* Strings */
//1.
function mirrorString(str) {
  if (typeof str !== "string") {
    return "Error: Value must be a string!";
  }
  return str.split("").reverse().join("");
}
let text = "some text that has been reversed";
console.log("STRINGS. TASK 1");
console.log(mirrorString(text));
console.log(mirrorString(123));
console.log(mirrorString([123]));
//2.

function searchPolindrom(str) {
  if (typeof str !== "string") {
    return "Error: Value must be a string!";
  }
  const reversedString = str
    .toLowerCase()
    .replaceAll(" ", "")
    .split("")
    .reverse()
    .join("");
  const originalString = str
    .toLowerCase()
    .replaceAll(" ", "")
    .split("")
    .join("");
  if (originalString === reversedString) {
    return ` String "${str}" is a polyndrom`;
  } else {
    return `String "${str}" is not a polyndrome`;
  }
}
console.log("\nSTRINGS. TASK 2");
console.log(searchPolindrom("Some text that mustn't be a polyndrom"));
console.log(searchPolindrom("Madam"));
console.log(searchPolindrom("Cigar toss it in a can it is so tragic"));
console.log(searchPolindrom(["some", "text", 123]));

//3.
function countVowels(str) {
  if (typeof str !== "string") {
    return "Error: Value must be a string!";
  }
  const matches = str.match(/[aeiouy]/gi);
  return matches.length;
}
console.log("\nSTRINGS. TASK 3");
console.log(countVowels("Some text for example"));
console.log(countVowels("some"));
console.log(countVowels("aeiouy qwrtp"));
console.log(countVowels(["some", "text", 123]));

//4.
function toPascalCase(str) {
  if (typeof str !== "string") {
    return "Error: Value must be a string!";
  }
  return str
    .trim()
    .split(/[_\W]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}
console.log("\nSTRINGS. TASK 4");
console.log("PascalCase: ", toPascalCase("Example String for Conversion"));
console.log("PascalCase: ", toPascalCase("  Example-String-for-conversion  "));
console.log("PascalCase: ", toPascalCase("Example_string_for_Conversion"));
console.log("PascalCase: ", toPascalCase(["some", "text", 123]));

//5.
function toSnakeCase(str) {
  if (typeof str !== "string") {
    return "Error: Value must be a string!";
  }
  return str
    .trim()
    .split(/[_\W]+/)
    .map((word) => word.toLowerCase())
    .join("_");
}
console.log("\nSTRINGS. TASK 5");
console.log("Snake_case: ", toSnakeCase("Example String for Conversion"));
console.log("Snake_case: ", toSnakeCase("  Example-String-for-Conversion  "));
console.log("PascalCase: ", toSnakeCase("Example_string_for_Conversion"));
console.log("PascalCase: ", toSnakeCase(["some", "text", 123]));

/* Numbers */
//1.
function getRandomInteger(min, max) {
  if (typeof min !== "number" || typeof max !== "number") {
    return "Error: Min and Max values must be numbers!";
  }
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
console.log("\nNUMBERS. TASK 1");
console.log(getRandomInteger(1, 10));
console.log(getRandomInteger(20, 30));
console.log(getRandomInteger(-10, 10));
console.log(getRandomInteger("a", "b"));

//2.
function roundToDecimal(num, count) {
  if (typeof num !== "number" || typeof count !== "number") {
    return "Error: Provided values must be numbers!";
  }
  return num.toFixed(count);
}
console.log("\nNUMBERS. TASK 2");
console.log(roundToDecimal(3.1415926535, 2));
console.log(roundToDecimal(1.123456789, 4));
console.log(roundToDecimal(10.5, 0));
console.log(roundToDecimal(123.456, 1));
console.log(roundToDecimal(123, 2));
console.log(getRandomInteger("a", "b"));

//3.
function sumFloatingPointNumbers(arrayNum) {
  if (!Array.isArray(arrayNum)) {
    return "Error: Input must be an array!";
  }

  if (!arrayNum.every((element) => typeof element === "number")) {
    return "Error: Input array must contain only numbers!";
  }
  let factor = 1e10;
  return arrayNum.reduce((accumulator, currentValue) => {
    return Math.round(accumulator * factor + currentValue * factor) / factor;
  }, 0);
}
console.log("\nNUMBERS. TASK 3");
console.log(sumFloatingPointNumbers([0.1, 0.2, 0.3])); // 0.6
console.log(sumFloatingPointNumbers([1.1, 2.2, 3.3])); // 6.6
console.log(sumFloatingPointNumbers([0.123, 0.456, 0.789])); // 1.368
console.log(sumFloatingPointNumbers([10.5, 20.5, 30.5])); // 61.5
console.log(sumFloatingPointNumbers([10.5, 20.51, 30.523]));
console.log(sumFloatingPointNumbers(["10.5", "abc"]));
console.log(sumFloatingPointNumbers("10.5", "abc"));

//4.
function isPrime(num) {
  if (typeof num !== "number") {
    return "Error: Provided value must be a number!";
  }
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log("\nNUMBERS. TASK 4");
console.log("0", isPrime(0));
console.log("1", isPrime(1));
console.log("2", isPrime(2));
console.log("4", isPrime(4));
console.log("17", isPrime(17));
console.log("18", isPrime(18));
console.log("29", isPrime(29));
console.log(isPrime("abc"));

//5.
function gcd(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Error: Provided values must be numbers!";
  }
  if (!b) return a;
  return gcd(b, a % b);
}
console.log("\nNUMBERS. TASK 5");
console.log(gcd(48, 18));
console.log(gcd(56, 98));
console.log(gcd(101, 103));
console.log(gcd(44, 19));
console.log(gcd(270, 192));
console.log(isPrime("abc"));

/* Array */
//1.
function secondLargest(arrayNum) {
  if (!Array.isArray(arrayNum)) {
    return "Error: Input must be an array!";
  }
  if (!arrayNum.every((element) => typeof element === "number")) {
    return "Error: Input array must contain only numbers!";
  }
  const maxValue = Math.max(...arrayNum);
  const arrayWithutMaxValue = arrayNum.filter((value) => value !== maxValue);
  return Math.max(...arrayWithutMaxValue);
}
console.log("ARRAYS. TASK 1");
console.log(secondLargest([1, 2, 3, 4, 5]));
console.log(secondLargest([10, 20, 20, 30]));
console.log(secondLargest([5, 7, 7, 8, 3]));
console.log(secondLargest(["10.5", "abc"]));
console.log(secondLargest("10.5", "abc"));

//2.
function mergeAndSort(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Error: Inputs must be arrays!";
  }
  if (
    !arr1.every((element) => typeof element === "number") ||
    !arr2.every((element) => typeof element === "number")
  ) {
    return "Error: Input arrays must contain only numbers!";
  }
  const commonArr = arr1.concat(arr2);
  const set = new Set(commonArr);
  return Array.from(set).sort((a, b) => a - b);
}
console.log("ARRAYS. TASK 2");
console.log(mergeAndSort([1, 3, 5], [2, 4, 6]));
console.log(mergeAndSort([10, 20], [20, 30]));
console.log(mergeAndSort([5, 7, 9], [5, 7, 11]));
console.log(mergeAndSort(["10.5", "abc"], ["10.5", "abc"]));
console.log(mergeAndSort("10.5", "abc"));

//3.
function shuffleArray(arr) {
  if (!Array.isArray(arr)) {
    return "Error: Input must be an array!";
  }
  if (arr.some((element) => typeof element === "object")) {
    return "Error: Input array must be one one dimensional";
  }
  return arr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}
console.log("ARRAYS. TASK 3");
console.log(shuffleArray([1, 2, 3, 4, 5]));
console.log(shuffleArray(["a", "b", "c", "d"]));
console.log(shuffleArray(["a", "b", [1, 2, 3], "c", "d"]));
console.log(shuffleArray("a", "b", "c", "d"));

//4.
function findPairs(arr, targetSum) {
  if (!Array.isArray(arr)) {
    return "Error: First argument must be an array!";
  }
  if (typeof targetSum !== "number") {
    return "Error: Second argument must be a number!";
  }
  if (!arr.every((element) => typeof element === "number")) {
    return "Error: Input array must contain only numbers!";
  }
  const seen = new Set();

  return arr.reduce((pairs, currNum) => {
    const remainder = targetSum - currNum;
    if (seen.has(remainder)) {
      pairs.push([currNum, remainder]);
      seen.delete(remainder);
    } else {
      seen.add(currNum);
    }
    return pairs;
  }, []);
}

console.log("ARRAYS. TASK 4");
console.log(findPairs([1, 2, 3, 4, 5], 5)); // [[3, 2], [4, 1]]
console.log(findPairs([10, 20, 10, 30, 40], 50)); // [[40, 10], [30, 20]]
console.log(findPairs([5, 5, 10, 15], 20)); // [[15, 5]]
console.log(findPairs([5, 5, 10, 15], "hundred"));
console.log(findPairs([5, "five", 10, 15], 20));

//5.
function removeFalsyValues(arr) {
  if (!Array.isArray(arr)) {
    return "Error: Input argument must be an array!";
  }
  return arr.filter((element) => !!element);
}
console.log("ARRAYS. TASK 5");
console.log(
  removeFalsyValues([0, 1, false, 2, "", 3, null, "a", undefined, NaN])
);
console.log(removeFalsyValues([false, true, null, "hello", "", 42]));
console.log(removeFalsyValues([NaN, 0, "", undefined, "world"]));
console.log(removeFalsyValues("world"));
