//Независимы ли счётчики?
function makeCounter() {
  let count = 0;
  return function () {
    return count++;
  };
}
let counter = makeCounter();
let counter2 = makeCounter();
alert(counter()); // 0
alert(counter()); // 1
alert(counter2()); // 0
alert(counter2()); // 1

//Объект счётчика
function Counter() {
  let count = 0;
  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
}
let counter3 = new Counter();
alert(counter3.up()); // 1
alert(counter3.up()); // 2
alert(counter3.down()); // 1

//Функция в if
let phrase = "Hello";
if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}
sayHi(); // ошибка

//Сумма с помощью замыканий
function sum(a) {
  return function (b) {
    return a + b;
  };
}
alert(sum(1)(2)); // 3
alert(sum(5)(-1)); // 4

//Фильтрация с помощью функции
function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  };
}
function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  };
}
let arr = [1, 2, 3, 4, 5, 6, 7];
alert(arr.filter(inBetween(3, 6))); // 3,4,5,6
alert(arr.filter(inArray([1, 2, 10]))); // 1,2

//Сортировать по полю
let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];
function byField(field) {
  return (a, b) => (a[field] > b[field] ? 1 : -1);
}
users.sort(byField("name"));
users.forEach((user) => alert(user.name)); // Ann, John, Pete
users.sort(byField("age"));
users.forEach((user) => alert(user.name)); // Pete, Ann, John

//Армия функций
function makeArmy() {
  let shooters = [];
  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function () {
      alert(j);
    };
    shooters.push(shooter);
    i++;
  }
  return shooters;
}
let army = makeArmy();
army[0](); // 0
army[5](); // 5
