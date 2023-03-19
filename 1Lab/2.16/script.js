//Функция – это значение
function sayHi() {
  alert("Привет");
}

let func = sayHi;

func(); // Привет
sayHi(); // Привет

//Функции-«колбэки»
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function showOk() {
  alert("Вы согласны.");
}

function showCancel() {
  alert("Вы отменили выполнение.");
}

// использование: функции showOk, showCancel передаются в качестве аргументов ask
ask("Вы согласны?", showOk, showCancel);

//Function Expression в сравнении с Function Declaration
let age = prompt("Сколько Вам лет?", 18);

let welcome;

if (age < 18) {
  welcome = function () {
    alert("Привет!");
  };
} else {
  welcome = function () {
    alert("Здравствуйте!");
  };
}

welcome(); // теперь всё в порядке
