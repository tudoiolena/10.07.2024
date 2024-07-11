/* Strings */
//1.
function mirrorString(str: string): string {
  return str.split("").reverse().join("");
}

//2.
function searchPolindrom(str: string): string {
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

//3.
function countVowels(str: string): number {
  const matches = str.match(/[aeiouy]/gi);
  return matches.length;
}

//4.
function toPascalCase(str: string): string {
  return str
    .trim()
    .split(/[_\W]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

//5.
function toSnakeCase(str: string): string {
  return str
    .trim()
    .split(/[_\W]+/)
    .map((word) => word.toLowerCase())
    .join("_");
}

/* Numbers */
//1.
function getRandomInteger(min: number, max: number): number {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

//2.
function roundToDecimal(num: number, count: number): string {
  return num.toFixed(count);
}

//3.
function sumFloatingPointNumbers(arrayNum: number[]): number {
  let factor = 1e10;
  return arrayNum.reduce((accumulator, currentValue) => {
    return Math.round(accumulator * factor + currentValue * factor) / factor;
  }, 0);
}

//4.
function isPrime(num: number): boolean {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

//5.
function gcd(a: number, b: number): number {
  if (!b) return a;
  return gcd(b, a % b);
}

/* Array */
//1.
function secondLargest(arrayNum: number[]): number {
  const maxValue = Math.max(...arrayNum);
  const arrayWithutMaxValue = arrayNum.filter((value) => value !== maxValue);
  return Math.max(...arrayWithutMaxValue);
}

//2.
function mergeAndSort(arr1: Array<number>, arr2: Array<number>): Array<number> {
  const commonArr = arr1.concat(arr2);
  const set = new Set(commonArr);
  return Array.from(set).sort((a, b) => a - b);
}

//3.
function shuffleArray(arr: Array<number | string>): Array<number | string> {
  return arr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

//4.
function findPairs(arr: number[], targetSum: number): number[] {
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

//5.
function removeFalsyValues<Type>(arr: Array<Type>): Array<Type> {
  return arr.filter((element) => !!element);
}
