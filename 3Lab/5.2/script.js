//Сумма пользовательских чисел
//Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
let firstNum = prompt("Введите первое число", "0");
let secondNum = prompt("Введите второе число", "0");
alert(+firstNum + +secondNum);

//Почему 6.35.toFixed(1) == 6.3?
//Методы Math.round и toFixed, согласно документации, округляют до ближайшего целого числа: 0..4 округляется в меньшую сторону, тогда как 5..9 в большую сторону.
//Как правильно округлить 6.35?
alert(Math.round(6.35 * 10) / 10);

//Ввод числового значения
function GetNumber() {
  let num;
  do {
    num = prompt("Введите число", 0);
  } while (!isFinite(num));
  if (num === "" || num === null) return null;
  return +num;
}
alert(`Число: ${GetNumber()}`);

//Бесконечный цикл по ошибке
let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) alert(i); //9.9999999 && 10.199999
}

//Случайное число от min до max
function random(min, max) {
  return min + Math.random() * (max - min);
}

alert(random(1, 5));
alert(random(1, 5));
alert(random(1, 5));

//Случайное целое число от min до max
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

alert(randomInteger(1, 3));
