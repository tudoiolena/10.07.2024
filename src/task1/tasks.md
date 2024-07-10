**_ Strings _**

1. Написати функцію, яка прймає будь-яку кількість рядків і повертає суму їх довжин.
   console.log(sumOfLen("hello", "hi")); //7
   console.log(sumOfLen("hi")); //2
   console.log(sumOfLen()); //0
   console.log(sumOfLen("hello", "hi", "my name", "is")); //16
   console.log(sumOfLen("hello", "hi", "my name", "is2")); //17
   console.log(sumOfLen("hello", "my name", "is")); //14
   console.log(sumOfLen("hello", "my name")); //12

2. Написати функцію, яка прймає рядок і сепаратор в якості аргументів і повертає масив із елементів, розділених сепаратором. Дефолтне значення сепаратора - пробіл. Пробіли зпочатку та вкінці рядка повинні бути видалені. Всі символи "&" повинні бути замінені на "@".
   console.log(stringToArray("hello, world", ","));// ["hello", "world"]
   console.log(stringToArray(" hello, world "));//["hello", "world"]
   console.log(stringToArray("hello world", ","));// ["hello world"]
   console.log(stringToArray("hello, world, my; name is", ";"));// ["hello, world", "my", "nameis"]
   console.log(stringToArray("hello, world, &my: &name &is : abc&_", ":"));//[ 'hello, world, @my', ' @name @is ', ' abc@_' ]

3. Написати функцію, яка приймає рядок та кількість повторень n та повертає рядок, кожне слово якого починається з великої літери (решта букв повинна бути у малому регістрі), додає "! " в кінці та повторює рядок n nразів.
   console.log(capitalizeRepeatWords('hello my name is olena', 2));//Hello My Name Is Olena! Hello My Name Is Olena!
   console.log(capitalizeRepeatWords("UkrainE is tHe capital of gReaT peoPLe", 3));/ /Ukraine Is The Capital Of Great People! Ukraine Is The Capital Of Great People! Ukraine Is The Capital Of Great People!

4. Написати функцію, яка приймає рядок і сепаратор в якості аргументів і повертає рядок, перетворений з camel case у рядок, слова якого розділені переданим сепаратором, всі літери у нижньому регістрі. Порядок слів повинен бути змінений у зворотньому напрямку. По дефолту сепаратор це пробіл.
   console.log(uncamelize('helloWorld'));// "world hello"
   console.log(uncamelize('helloWorld','-'));// "world-hello"
   console.log(uncamelize('helloWorld','\_')); //"world_hello"
   console.log(uncamelize('helloWorld one oneTwo SomeDummyText','--')); //text--dummy--two some--world one one--hello

5. Написати функцію, яка рахує кількість підрядків у рядку
   console.log(countSubString("The quick brown fox jumps over the lazy dog", 'the'))//2
   console.log(countSubString("The quick brown fox jumps over the lazy dog", 'fox'));//1
   console.log(
   countSubString("The quick brown fox jumps over the lazy dog", "rabbit")
   );//0

**_ Numbers _**

1. Написати функцію, яка повертає унікальний ідентифікатор (uuid) заданої довжини у форматі xxxx-xxxx. Якщо довжина не задана, id має довжину в 16 символів (4 рази по 4 в блоці xxxx-xxxx-xxxx-xxxx).
   console.log(guid());//0022-1222-2210-1313
   console.log(guid(5));//1322-0043-1020-0421-2434
   console.log(guid(15));//0cb3-58a4-1eca-7e61-3a42-2ab9-d9e9-b47a-d991-488b-d39b-e25a-3814-2bc6-cd97

2. Написати функцію, яка перевіряє чи є число цілим чи має десяткову частину. У відповіді вказати задане число зі знаком +
   console.log(numberTest(25.66));//25.66 has a decimal place.
   console.log(numberTest(10));//10 is a whole number.
   console.log(numberTest(-25)); //25 is a whole number.
   console.log(numberTest(-25.456));//25.456 has a decimal place.
   console.log(numberTest(0));//0 is a whole number.

3. Написати функцію, яка форматує число, повинно повертатись стільки цифр після коми, скільки передаємо у функію (дефолтне значення = 2).
   console.log(formatNumber(12.3453)); //12.35
   console.log(formatNumber(15.12)); //15.12
   console.log(formatNumber(32.000021221)); //32.00

4. Написати функцію, яка знаходить число у рядку і округляє його в залежності від того чи вого є додатнім. Якщо число додатнє округлити його в меншу сторону, якщо десяткове округлити в більшу сторону. Якщо чисел у рядку декілька, то вивести інформацію по останньому з них.
   console.log(roundPositiveNegative("The numbers are 12.345 and -3.48"));//-4
   console.log(roundPositiveNegative("The number is 15.12"));//15
   console.log(roundPositiveNegative("The numbers are 48.234 and -15.6"));//-16
   console.log(roundPositiveNegative("The numbers of zero, 15.01 and 49.99"));//49
   console.log(roundPositiveNegative("The number is 15.51"));//15
   console.log(roundPositiveNegative("The number is 1"));//1

5. Написати функцію, яка повертає найменщу відстань з двох заданих. Відстань обчислюється у іншій функціі за формулою по координатам.
   const distance1_2 = calculateDistance(point1.x, point1.y, point2.x, point2.y);//4.242640687119285
   const distance3_4 = calculateDistance(point3.x, point3.y, point4.x, point4.y);//5.830951894845301
   const shortestDist = shortestDistance(distance1_2, distance3_4);//4.2

**_ Arrays _**

1. Написати функцію filterByN, котра отримує масив чисел як перший аргумент, число num як другий аргумент і параметр "greater" або "less" як третій аргумент.Функція повинна повернути новий масив, де всі елементи будуть більшими або меншими за передане число num. По дефолту num = 0, а параметр = "greater".

console.log(filterNums([-3, 3, 4, 0, 44, -11, 5], 11, "greater")); //[ 44 ]
console.log(filterNums([-3, 3, 4, 0, 44, -11, 5], 5, "less")); //[ -3, 3, 4, 0, -11 ]
console.log(filterNums([-3, 3, 4, 0, 44, -11, 5], -30, "less")); //[]
console.log(filterNums([-3, 3, 4, 0, 44, -11, 5])); //[ 3, 4, 44, 5 ]
console.log(filterNums([-3, 3, 4, 0, 44, -11, 5], 9)); //44

2. Знайти максимальний інтервал між двома послідовними аргументами в масиві чисел.

console.log(maxInterv(3, 5, 2, 7)); //5
console.log(maxInterv(3, 5, 2, 7, 11, 0, -2)); //11
console.log(maxInterv(3, 5)); //2
console.log(maxInterv(3)); //0
console.log(maxInterv(3, 5, 2, 8)); //6
console.log(maxInterv(3, 5, 2, 37, 11, 0, -2)); //35

3. Напишсати функцію combineArray(arr1, arr2), яка приймає 2 масиви як аргументи і повертає новий масив, що складається тільки з числових значень масивів arr1 and arr2.

console.log(combineArray([12, "User01", 22, true, -8], ["Index", 6, null, 15])); //[ 12, 22, -8, 6, 15 ]
console.log(
combineArray(
["User01", "User02", "User03", "User04"],
["Data1", 33, "Data2", 44]
)
); //[ 33, 44 ]
console.log(
combineArray([10, 20, 30], ["Data1", "Data2", "Data3", "Data4", "Data5"]) //[ 10, 20, 30 ]
);
console.log(combineArray([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(combineArray(["1", "2", "3", "4"], ["first", "second", "third"])); //[]

4. Написати функцію longestString(list), яка приймає масив рядків і повертає найдовший. Якщо рядки однакових довжин, то повертається рядок з найбільшим індексом.
   console.log(longestString(["maxxx", "NewUser", "admin111", "Administrator"])); //Administrator
   console.log(longestString(["User123", "Steven Dobson", "qwerty12345"])); //Steven Dobson
   console.log(longestString(["Carl1999", "ivan@gmail.com", "nick-name"])); //ivan@gmail.com
   console.log(longestString(["user1", "user2", "333", "user4", "aa"])); //user4
   console.log(
   longestString(["larian", "questttt", "longest_user_name", "Nick Nickson"])
   ); //longest_user_name

5. Є масив студентів:
   let students = [{
   name: 'Anna',
   languages: ['English', 'Ukrainian'],
   age: 21
   }, {
   name: 'Bob',
   languages: ['Polish', 'Spanish'],
   age: 26
   }, {
   name: 'Alice',
   languages: ['Italian', 'Korean'],
   age: 18
   }]
   Написати функцію getLanguages, яка приймає масив студентів як перший аргумент і умову (функцію) як другий аргумент. Функція getLanguages повинна повертати масив мов із масиву студентів, який задовольнятиме умові.
   getLanguages(students, student => student.age < 26) // ['English', 'Ukrainian', 'Italian', 'Korean']
   getLanguages(students, student => student.name === 'Alice') // ['Italian', 'Korean']
   getLanguages(students) // ['English', 'Ukrainian','Polish', 'Spanish', 'Italian', 'Korean']
