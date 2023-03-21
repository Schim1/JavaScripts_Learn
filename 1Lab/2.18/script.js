//Структура кода
alert("Привет");
alert("Мир");

//Переменные
let x = 5;
x = "Вася";

//Взаимодействие с посетителем
let userName = prompt("Введите имя", "Алиса");
let isTeaWanted = confirm("Вы хотите чаю?");

alert("Посетитель: " + userName); // Алиса
alert("Чай: " + isTeaWanted); // true
//Операторы
alert("1" + 2); // '12', строка
alert(1 + "2"); // '12', строка

//Циклы
// 1
while (condition) {}

// 2
do {} while (condition);

// 3
for (let i = 0; i < 10; i++) {}

//Конструкция «switch»
let age = prompt("Сколько вам лет?", 18);

switch (age) {
  case 18:
    alert("Так не сработает"); // результатом prompt является строка, а не число

  case "18":
    alert("А так сработает!");
    break;

  default:
    alert("Любое значение, неравное значению выше");
}

//Функции
//Function Declaration
function sum(a, b) {
  let result = a + b;
  return result;
}
//Function Expression
let sum = function (a, b) {
  let result = a + b;
  return result;
};
// Стрелочные функции:
let sum = (a, b) => a + b;
let sum = (a, b) => {
  return a + b;
};
let sayHi = () => alert("Привет");
let double = (n) => n * 2;
