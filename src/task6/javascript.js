//Напишіть функцію, яка приймає рядок тексту і повертає обернений рядок без
//зміни порядку слів, але з оберненими символами в межах кожного слова

function converWords(string) {
  return string
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

console.log(converWords("Hello World")); //olleH dlroW

//Нечётные числа должны отсортироваться по возрастанию, а чётные должны остаться на своих местах:
//const nums = [1,9,4,2,3,6,7,1,5];
//console.log(sortOddNumbers(nums))// [1,1,4,2,3,6,5,7,9]

function sortOddNumbers(arrayOfNumbers) {
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

//Як відобразити HTML заголовок h1 з вмістом "Hello World!" за допомогою Express?
const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  const htmlContent = `<html><body><h1>Hello World!</h1></body></html>`;
  res.send(htmlContent);
});

app.listen(port, () => {
  console.log("Server is running on port ${port}");
});

//Описати маршрут, який обробляє запит GET-запит за допомогою Express
// Запит:
// Метод: GET
// URL: http://localhost:8000/users/123

// Відповідь:
// Статус: 200 OK
// Тіло: User id: 123

const express = require("express");
const app = express();
const port = 8000;

app.get("users/:userId", (req, res) => {
  const userId = req.params.userId;
  res.status(200).send(`User id: ${userId}`);
});

//Створити простий HTTP-сервер за допомогою Node.js.
//Якщо URL кореневий, сервер відправляє HTTP - відповідь із HTML - кодом, що містить заголовок "Node JS Server".
const http = require("http");
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    return res.end("<html><body><h2>Node JS Server</h2></body></html>");
  }
});

server.listen(8000, () => {
  console.log("Server is running on port 8000");
});

// Написата 2 глобальні мідлвари за допомгою Express для логування інформації про запити.
// Перша middleware виводить у консоль метод запиту та URL-адресу
// Друга middleware виводить у консоль поточну дату та час у форматі UTC
const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use((req, res, next) => {
  console.log(new Date().toUTCString());
  next();
});

app.listen(8000);

// Написати 3 НЕ глобальні мідлвари за допомгою Express та застосувати їх до запитів.
// Перша middleware виводить у консоль заголовки запиту
// Друга middleware виводить у консоль метод запиту
// Ці дві мідлвари застосувати до запиту Get '/'
// Третя middleware виводить у консоль статус відповіді
// Цю мідлвару застосувати до запиту Post '/user'
const express = require("express");
const app = express();

function logRequestHeader(req, res, next) {
  console.log(req.headers);
  next();
}

function logRequestMethod(req, res, next) {
  console.log(req.method);
  next();
}

function logStatusCode(req, res, next) {
  console.log(res.statusCode);
  next();
}

app.get("/", logRequestMethod, logRequestHeader, (req, res) => {
  res.send("Hello from /");
});

app.post("/user", logStatusCode, (req, res) => {
  res.send("Hello from /user");
});

app.listen(8000);
