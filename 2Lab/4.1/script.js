//https://playcode.io/1318892

//Привет, object

//Создайте пустой объект user.
let user = {};
//Добавьте свойство name со значением John.
user.name = "John";
alert(user.name);
//Добавьте свойство surname со значением Smith.
user.surname = "Smith";
alert(user.surname);
//Измените значение свойства name на Pete.
user.name = "Pete";
alert(user.name);
//Удалите свойство name из объекта.
delete user.name;

//Проверка на пустоту

//Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.]
function isEmpty(obj) {
  for (key in obj) {
    return false;
  }
  return true;
}
let test = {};
alert(isEmpty(test));

//Объекты-константы?
const user2 = {
  name: "John",
};

// это будет работать?
user.name2 = "Pete"; // Pete так как константа защищает от изменений только саму переменную  а не ее содержимое
alert(user2.name);

//Сумма свойств объекта

//У нас есть объект, в котором хранятся зарплаты нашей команды:
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
//Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
let sum = 0;
for (key in salaries) {
  sum += salaries[key];
}
alert(sum);

//Умножаем все числовые свойства на 2

//Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
function multiplyNumeric(obj) {
  for (key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}

let salaries1 = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
multiplyNumeric(salaries1);
for (key in salaries1) {
  alert(salaries1[key]);
}
