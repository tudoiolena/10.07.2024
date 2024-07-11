//Напишіть функцію, яка приймає рядок тексту і повертає обернений рядок без
//зміни порядку слів, але з оберненими символами в межах кожного слова

function converWords(string: string): string {
  return string
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

console.log(converWords("Hello World")); //olleH dlroW

//Нечётные числа должны отсортироваться по возрастанию, а чётные должны остаться на своих местах:
//const nums = [1,9,4,2,3,6,7,1,5];
//console.log(sortOddNumbers(nums))// [1,1,4,2,3,6,5,7,9]

function sortOddNumbers(arrayOfNumbers: number[]): number[] {
  const oddNumbers = arrayOfNumbers
    .filter((number) => number % 2 !== 0)
    .sort((a, b) => a - b);

  let i = 0;
  return arrayOfNumbers.map((number) => {
    if (number % 2 !== 0) {
      return oddNumbers[i++];
    }
    return number;
  });
}

console.log(sortOddNumbers([1, 9, 4, 2, 3, 6, 7, 1, 5]));
