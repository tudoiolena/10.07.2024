let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];
let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1];
let testData3 = [{"name":"Vasya","email":"vasya@example.com","age":20,"skills":{"php":0,"js":-1,"madness":10,"rage":10}},{"name":"Dima","email":"dima@example.com","age":34,"skills":{"php":5,"js":7,"madness":3,"rage":2}},{"name":"Colya","email":"colya@example.com","age":46,"skills":{"php":8,"js":-2,"madness":1,"rage":4}},{"name":"Misha","email":"misha@example.com","age":16,"skills":{"php":6,"js":6,"madness":5,"rage":2}},{"name":"Ashan","email":"ashan@example.com","age":99,"skills":{"php":0,"js":10,"madness":10,"rage":1}},{"name":"Rafshan","email":"rafshan@example.com","age":11,"skills":{"php":0,"js":0,"madness":0,"rage":10}}]
let testData4 = [{"name":"Vasya","email":"vasya@example.com","age":20},{"name":"Dima","email":"dima@example.com","age":34},{"name":"Colya","email":"colya@example.com","age":46},{"name":"Misha","email":"misha@example.com","age":16},{"name":"Ashan","email":"ashan@example.com","age":99},{"name":"Rafshan","email":"rafshan@example.com","age":11},1,2,1990,85,24,"Vasya","colya@example.com","Rafshan","ashan@example.com",true,false,[[[[1,2,1990,85,24,"Vasya","colya@example.com","Rafshan","ashan@example.com",true,false,[{"name":"Rafshan","email":"rafshan@example.com","age":11}]]]]]]

8. Сделать функцию которая обрезает массив до указанного значения.
   Синтаксис: array_skip_until(arr: array, value: any): any[]
   Пример:
   let result = array_skip_until(testData, 2) // [2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false]
   let result2 = array_skip_until(testData, "Rafshan") // ["Rafshan", "ashan@example.com", true, false]
   let result3 = array_skip_until(testData, "asd") // []

9. Создать функцию которая нормализует данные в массиве исключая или преобразуя не подходящие.
   Доступные шаблоны:
   'string' => строки,
   'number' => числа,
   'int' => целые числа,
   'float' => числа с плавающей точкой,
   'bool' => true | false,
   'function' => функция,
   'array' => массив,
   Object => объект {name: 'string'}
   Синтаксис: array_normalize(arr: array, shema: string|Object[, transform: bool = false]): any[]
   Пример:
   let result = array_normalize(testData4, 'string') // ['Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
   let result2 = array_normalize(testData4, 'string', true) // ['1', '2', '1990', '85', '24', 'Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
   let result3 = array_normalize(testData4, {age: 'float'}) // []
   let result4 = array_normalize(testData4, {age: 'float'}, true) // [{age: 20}, {age: 34}, {age: 46}, {age: 16}, {age: 99}, {age: 11}]

10. Сделать функцию которая сможет делать срез данных с ассоциативного массива.
    Синтаксис: array_pluck(arr: array, path: string): any[]
    Пример:
    let result = array_pluck(testData3, 'name') // ["Vasya", "Dima", "Colya", "Misha", "Ashan", "Rafshan"]
    let result2 = array_pluck(testData3, 'skills.php') // [0, 5, 8, 6, 0, 0]

11. Создать функцию которая создает объект на основании двух представленных массивов используя один как ключи, а другой как значения. Не подходящие ключи массивов должны быть исключены.
    Синтаксис: array_combine(keys: array, values: array): Object
    Пример:
    let result = array_combine(testData, testData2) // {1: 1, 2: 2, 1990: 1990, 85: 85, 24: 24, "Vasya": 5, "colya@example.com": 7, "Rafshan": 8.1, "ashan@example.com": undefined}
