# Strings

## Task 1: На вход получаем строку.

Воспользовавись только методами работы строк написать функцию которая отзеркалит строкую

Пример методов .split() .reverse() .join()

Пример выполнения:

```
let text = 'some text that has been reversed'
console.log(mirrorString(text)) // desrever neeb sah taht txet emos
```

## Task 2: На вход получаем строку. Узнать, является ли строка полиндромом (Читается с лева на право также как и с права на лево)

```
let isPolindrom = "Some text that mustn't be a polyndrom"

console.log(searchPolindrom(isPolindrom)) // Строка Some text that mustn't be a polyndrom - не полиндром
```

## Task 3: Посчитать колличество гласных букв в строке.

```
console.log(countVowels("Some text for example")); // 7
```

## Task 4: Перевести исходный текст в стиль PascalCase.

```
const inputStringForExample = "Example String for Conversion";
const pascalCase = toPascalCase(inputStringForExample);
console.log(`PascalCase: ${pascalCase}`); // ExampleStringForConversion
```

## Task 5: Перевести исходный текст в стиль snake_case.

```
const inputStringForExample = "Example String for Conversion";
const snakeCase = toSnakeCase(inputStringForExample);
console.log(`Snake_case: ${snakeCase}`);  // example_string_for_conversion
```

# Numbers

## Task 1: Сгенерировать случайные числа в заданом диапазоне.

Задача заключается в том, чтобы вписать минимальное и максималное допустимое значение рандомизации

```
console.log(getRandomInteger(1, 10)); // Случайное число от 1 до 10 включительно
console.log(getRandomInteger(20, 30)); // Случайное число от 20 до 30 включительно
console.log(getRandomInteger(-10, 10)); // Случайное число от -10 до 10 включительно
```

## Task 2: Написать округлитель чисел после запятой.

Задача в том, чтобы написать функцию, которая принимает в аргументы число с плавающей точкой и колличество цифр после запятой которые нужно отобразить

```
console.log(roundToDecimal(3.1415926535, 2)); // 3.14
console.log(roundToDecimal(1.123456789, 4));  // 1.1235
console.log(roundToDecimal(10.5, 0));         // 11
console.log(roundToDecimal(123.456, 1));      // 123.5
```

## Task 3: Как вы знаете JavaScript имеет большую проблему с арифметокой.

К примеру, если мы попробуем сложить 0,1 + 0,2 то в результате выйдет 0,30000....000001 что не есть хорошо, решите это.
Да помогут вам предки... и reduce

```
console.log(sumFloatingPointNumbers([0.1, 0.2, 0.3]));     // 0.6
console.log(sumFloatingPointNumbers([1.1, 2.2, 3.3]));     // 6.6
console.log(sumFloatingPointNumbers([0.123, 0.456, 0.789])); // 1.368
console.log(sumFloatingPointNumbers([10.5, 20.5, 30.5]));  // 61.5
```

## Task 4: Напишите скрипт, который проверяет поступающие числа на их простоту (число простое если оно делится только на себя и единицу (1 не является простым, так как не делится ни на что другое кроме 1))

```
console.log(isPrime(2));  // true
console.log(isPrime(4));  // false
console.log(isPrime(17)); // true
console.log(isPrime(18)); // false
console.log(isPrime(29)); // true
```

## Task 5: А вот тут все просто, есть два заданных числа, нужно найти их наибольший общий делитель(наибольшее число, на которое оба деляться нацело)

```
console.log(gcd(48, 18)); // 6
console.log(gcd(56, 98)); // 14
console.log(gcd(101, 103)); // 1
console.log(gcd(44, 19)); // 1
console.log(gcd(270, 192)); // 6
```

# Array

## Task 1: Все мы привыкли искать наибольшее значение или наименьшее значение, но. Есть массив, в нем нужно найти второе наибольшее значение. Написать функцию secondLargest

```
console.log(secondLargest([1, 2, 3, 4, 5])); // 4
console.log(secondLargest([10, 20, 20, 30])); // 20
console.log(secondLargest([5, 7, 7, 8, 3])); // 7
```

## Task 2: На вход мы получаем два массива, нужно из них убрать все повторяющиеся элементы и из этих двух собрать новый массив. Написать функцию mergeAndSort

```
console.log(mergeAndSort([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeAndSort([10, 20], [20, 30])); // [10, 20, 30]
console.log(mergeAndSort([5, 7, 9], [5, 7, 11])); // [5, 7, 9, 11]
```

## Task 3: Есть одномерный массив, нужно рандомно перемешивать его при каждом запуске (Своего рода карточная колода). Написать функцию shuffleArray

```
console.log(shuffleArray([1, 2, 3, 4, 5])); // К примеру будет 2, 3, 5, 4, 1
console.log(shuffleArray(['a', 'b', 'c', 'd'])); // К примеру будет b, a, d, c
```

## Task 4: Массив, который приходит в аргументы нужно проанализировать и найти пары числе которые в сумме удавлетворяют заданному. Написать функцию findPairs

```
console.log(findPairs([1, 2, 3, 4, 5], 5)); // [[3, 2], [4, 1]]
console.log(findPairs([10, 20, 10, 30, 40], 50)); // [[40, 10], [30, 20]]
console.log(findPairs([5, 5, 10, 15], 20)); // [[15, 5]]
```

## Task 5: Написать функцию removeFalsyValues, которая должна удалить все ложные значения в массиве. (false, null, NaN, "0", 0)

```
console.log(removeFalsyValues([0, 1, false, 2, '', 3, null, 'a', undefined, NaN])); // [1, 2, 3, 'a']
console.log(removeFalsyValues([false, true, null, 'hello', '', 42])); // [true, 'hello', 42]
console.log(removeFalsyValues([NaN, 0, '', undefined, 'world'])); // ['world']
```
