//Переведите текст вида border-left-width в borderLeftWidth
function camelize(str) {
  return str
    .split("-") // разбивает 'my-long-word' на массив ['my', 'long', 'word']
    .map(
      // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
      // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
      (word, index) =>
        index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(""); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
}

//Фильтрация по диапазону
function filterRange(arr, a, b) {
  // добавлены скобки вокруг выражения для улучшения читабельности
  return arr.filter((item) => a <= item && item <= b);
}
let arr1 = [5, 3, 8, 1];
let filtered = filterRange(arr1, 1, 4);
alert(filtered); // 3,1 (совпадающие значения)
alert(arr1); // 5,3,8,1 (без изменений)

//Фильтрация по диапазону "на месте"
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    // удалить, если за пределами интервала
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
alert(arr); // [3, 1]

//Сортировать в порядке по убыванию
let arr2 = [5, 2, 1, -10, 8];
arr2.sort((a, b) => b - a);
alert(arr2);

//Скопировать и отсортировать массив
function copySorted(arr) {
  return arr.slice().sort();
}
let ar3 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(ar3);
alert(sorted);
alert(ar3);

//Создать расширяемый калькулятор
function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };
  this.calculate = function (str) {
    let split = str.split(" "),
      a = +split[0],
      op = split[1],
      b = +split[2];
    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };
  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

//Трансформировать в массив имён
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let users = [vasya, petya, masha];
let names = users.map((item) => item.name);
alert(names); // Вася, Петя, Маша

//Трансформировать в объекты
let vasy = { name: "Вася", surname: "Пупкин", id: 1 };
let pety = { name: "Петя", surname: "Иванов", id: 2 };
let mash = { name: "Маша", surname: "Петрова", id: 3 };

let user = [vasya, petya, masha];

let usersMapped = user.map((use) => ({
  fullName: `${use.name} ${use.surname}`,
  id: use.id,
}));
alert(usersMapped[0].id); // 1
alert(usersMapped[0].fullName); // Вася Пупкин

//Отсортировать пользователей по возрасту
function sortByAge(arr) {
  arr.sort((a, b) => (a.age > b.age ? 1 : -1));
}
let vasya1 = { name: "Вася", age: 25 };
let petya1 = { name: "Петя", age: 30 };
let masha1 = { name: "Маша", age: 28 };
let arr4 = [vasya1, petya1, masha1];
sortByAge(arr);
// теперь отсортировано: [vasya, masha, petya]
alert(arr4[0].name); // Вася
alert(arr4[1].name); // Маша
alert(arr4[2].name); // Петя

//Перемешайте массив
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
let arr5 = [1, 2, 3];
shuffle(arr5);
alert(arr5);

//Получить средний возраст
function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
let vasya2 = { name: "Вася", age: 25 };
let petya2 = { name: "Петя", age: 30 };
let masha2 = { name: "Маша", age: 29 };
let arr6 = [vasya2, petya2, masha2];
alert(getAverageAge(arr6)); // 28

//Оставить уникальные элементы массива
function unique(arr) {
  let result = [];
  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}
let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];
alert(unique(strings)); // кришна, харе, :-O

//Создайте объект с ключами из массива
function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {});
}
let users1 = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users1);
