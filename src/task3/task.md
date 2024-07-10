**_ Strings _**

1. Написати функцію checkSpam(str), яка повертає true, якщо str містить ‘spam’ or ‘XXX’, інакше false. Функція має бути нечутливою до регістру.

   ```
   console.log(checkSpam("get SpaM now")); //true
   console.log(checkSpam("free xxxxx")); //true
   console.log(checkSpam("innocent rabbit")); //false
   ```

2. Є вартість у вигляді "$120". Тобто: спочатку йде знак долара, а потім число. Написати функцію extractCurrencyValue(str), яка витягне числове значення з такого рядка та поверне його.

   ```
   console.log(extractCurrencyValue("$120") === 120);// true
   ```

3. Написати функцію truncate(str, maxlength), яка перевіряє довжину str і, якщо вона перевищує maxlength – замінює кінець str символом трьох крапок "…", щоб його довжина була рівною maxlength. Результатом функції повинен бути урізаний (якщо потребується) рядок.

   ```
   console.log(truncate("Що я хотів би розповісти на цю тему:", 20)) // "Що я хотів би розпо…"
   console.log(truncate("Всім привіт!", 20)) // "Всім привіт!"
   ```

4. Написати функцію, яка рахує кількість слів у рядку.

   ```
   console.log(wordsCount("one two three for five")); // 5
   ```

5. Написати функцію, яка приймає рядок і повертає кожне слово рядка з великої літери.

   ```
   console.log(toTitleCase("this iS some TExT")); // This Is Some Text
   ```

**_ Numbers _**

1. Написати функцію, яка перевіряє чи є число цілим.

   ```
   console.log("0 - ", isInteger(0)); // 0 -  true
   console.log("1 - ", isInteger(1)); // 1 -  true
   console.log("-100000 -", isInteger(-100000)); //-100000 - true
   console.log("9999999999999999999999 -", isInteger(99999999999999999999999)); // 9999999999999999999999 - true
   console.log("0.1 - ", isInteger(0.1)); // 0.1 -  false
   console.log(Math.PI, "-", isInteger(Math.PI)); //3.141592653589793 - false
   console.log("NaN - ", isInteger(NaN)); // NaN -  false
   console.log("[1] - ", isInteger([1])); //[1] -  false
   console.log("5.0 - ", isInteger(5.0)); //5.0 -  true
   console.log("5.000000000000001 - ", isInteger(5.000000000000001)); //5.000000000000001 -  false
   console.log("5.0000000000000001 - ", isInteger(5.0000000000000001)); //5.0000000000000001 -  true (because of loss of precision!)
   ```

2. Написати функцію, яка приймає ціну та відсоток знижки та рахує ціну з урахуванням знижки. Округлення копійок повинно бути в більшу сторону.

   ```
   console.log(calculateDiscount(100, "50%")); //50
   console.log(calculateDiscount(123.59, "25%")); //92.7
   console.log(calculateDiscount(23.99, "30%")); //16.8
   console.log(calculateDiscount(15.23, "35%")); //9.9
   console.log(calculateDiscount(1000.45, "43%")); //570.26
   console.log(calculateDiscount(1000.45, "44%")); //560.26
   console.log(calculateDiscount(1000.17, "45%")); //550.1
   ```

3. Написати функцію, яка конвертує температуру зі значення по Фаренгейту до значення пл Цельсію. Результат повернути у вигляді рядку (тип string).

   ```
   console.log(fahrenheitToCelsius(32)); // 0
   console.log(fahrenheitToCelsius(212)); // 100
   console.log(fahrenheitToCelsius(98.6)); // 37
   ```

4. Згідно з документацією Math.round і toFixed, округлюють до найближчого числа: 0..4 ведуть вниз, а 5..9 ведуть вгору.
   Наприклад,

   ```
   console.log((1.35).toFixed(1)); // 1.4
   ```

У подібному прикладі нижче, чому 6.35 округляється до 6.3, а не 6.4?

    ```
    console.log((6.35).toFixed(1)); //6.3
    ```

Написати функцію, яка правильно округлить 6.35 (та подібні числа).

    ```
     console.log(correctRound(6.35))//6.4;
    ```

5. Написати функцію, яка приймає аргумент і повертає:

- якщо аргумент примітивного типу number, то аргумент \* 3
- якщо аргумент є об'єктом типу Number, то значення об'єкту \* 2
- якщо аргумент є рядком, то число з рядка враховуючи знаки після коми. (В даному прикладі вважається, що може бути переданий тільки рядок з числом, рядок з текстом не може бути переданий.)

  ```
  console.log(numberFromObj(10));//30
  console.log(numberFromObj(new Number(20)));//40
  console.log(numberFromObj("30.45"));//30.45
  console.log(numberFromObj(["Some", "string", 20, 10]));//Invalid input. Expected a number or a string representing a number.

  ```

**_ Arrays _**

1. Написати функцію getModifiedArray(array), яка приймає довільний масив і повертає масив зі значенням першого елемента масиву, що дорівнює «Start», останнього елемента масиву, що дорівнює «End», а решта елементів має бути такими самими, як у початковому масиві. Початковий масив повинен залишитися без змін.

```
    console.log(getModifiedArray([12, 6, 22, 0, -8])); // [ 'Start', 6, 22, 0, 'End' ]
    console.log(getModifiedArray(["Kate", "Peter", "Mark", "Sam"])); //[ 'Start', 'Peter', 'Mark', 'End' ]
    console.log(getModifiedArray([false, 10, 'mail', true, 20, 30])); //[ 'Start', 10, 'mail', true, 20, 'End' ]
    console.log(getModifiedArray([100, 200])); //[ 'Start', 'End' ]

    const arr1 = [false, 10, 'mail', true, 20, 30];
    getModifiedArray(arr1)
    console.log(arr1);// [ false, 10, 'mail', true, 20, 30 ]

    const arr2 = [100, 200];
    getModifiedArray(arr2)
    console.log(arr2); //[ 100, 200 ]

```

2. Є масив:

```
    const items1 = [
    { name: 'Apple', price: 1 },
    { name: 'Orange', price: 2 },
    { name: 'Mango', price: 3 },
    ];

```

Потрібно отримати загальну суму вартості фруктів.
console.log(countTotalPrice(items1)); // 6

3. Є масив:

```
    const items2 = [
    { name: 'Apple', category: 'Fruit' },
    { name: 'Onion', category: 'Vegetable' },
    { name: 'Orange', category: 'Fruit' },
    { name: 'Lettuce', category: 'Vegetable' },
    ];
```

Потрібно згрупувати товари на основі їх значення категорії.

```
    console.log(groupItemsByCategory(items2)); // { Fruit: [ 'Apple', 'Orange' ], Vegetable: [ 'Onion', 'Lettuce' ] }

```

4. Написату функцію, яка видаляє дублікати у масиві за допомогою метода reduce().

```
    console.log(noDuplicateItems([1, 2, 3, 1, 2, 3, 7, 8, 7])); // [ 1, 2, 3, 7, 8 ]

```

5. Написати рекурсивну функцію, яка примйає масив з вкладеними масивами і виводить кожен елемент з кожного масива.

```
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
    renderArrElements(array);

    // Виводить
    1
    2
    3
    4
    5
    6
    7
    8
    9
    10
    11
    12
    13
    14
    15
    16
    17
    18
    19
    20
    twenty

```

**_ Objects _**

1. Написати функцію isEmpty(obj), яка повертає true, якщо об’єкт не має властивості, інакше false.

```
    let schedule = {};
    console.log(isEmpty(schedule)); // true
    schedule["8:30"] = "Вставай";
    console.log(isEmpty(schedule) ); // false

```

2. Є об’єкт для зберігання заробітної плати:

```
    let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
    }
    console.log(sumSalary(salaries)); //390
    console.log(sumSalary({})); //0

```

Написати функцію sumSalary для підсумовування всіх зарплат. Якщо об’єкт salaries порожній, то результат має бути 0.

3. Написати функцію multiplyNumeric(obj), яка примножує всі числові властивості об’єкта obj на 2.

```
    // до виклику функції
    let menu = {
    width: 200,
    height: 300,
    title: "Моє меню"
    };

    console.log(multiplyNumeric(menu));

    // після виклику функції
    menu = {
    width: 400,
    height: 600,
    title: "Моє меню"
    };

```

4. Написати функцію, яка приймає будь яку кількість об'єктів і повертає новий об'єкт з усіма пропертями переданих об'єктів. Якщо проперті однакові в новому об'єкті вони не повинні повторюватись.

```
    const o1 = { a: 1, b: 1, c: 1 };
    const o2 = { b: 2, c: 2 };
    const o3 = { c: 3 };
    console.log(newObject(o1, o2, o3)); //{ a: 1, b: 2, c: 3 }

```

5. Написати функцію, яка створює новий об'єкт car з переданими значеннями model та year, а також додає 2 нові проперті: salonOptions (writable: true) та color (writable: false) за допомогою Object.defineProperties. Функція повинна викликати метод print об'єкта car для виводу повідомлення в консоль.

```
    const car = {
    model: "",
    year: "",
    print: function (message) {
    console.log(message);
    },
    };

    console.log(createRedCarsWithBeigeSalon("Toyota Corolla", 2020)); //
    A red car Toyota Corolla of 2020 year was created with options: leather

    console.log(createRedCarsWithBeigeSalon("Mazda CX-5", 2023)); // A red car Mazda CX-5 of 2023 year was created with options: leather

```
