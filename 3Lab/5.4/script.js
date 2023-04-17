//Скопирован ли массив?
//Что выведет следующий код?
let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert(fruits.length); // 4

//Операции с массивами
let music = ["Джаз", "Блюз"];
music.push("Рок-н-ролл");
music[Math.floor((music.length - 1) / 2)] = "Классика";
alert(music.shift());
music.unshift("Рэп", "Регги");

//Вызов в контексте массива
//Каков результат? Почему?
let arr = ["a", "b"];

arr.push(function () {
  alert(this);
});

arr[2](); // a,b,function() { alert( this ); }

//Сумма введённых чисел
function sumInput() {
  let numbers = [];
  while (true) {
    let newNum = prompt("", 0);
    if (newNum === "" || newNum === null || !isFinite(newNum)) break;
    numbers.push(+newNum);
  }
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}
alert(sumInput());

//Подмассив наибольшей суммы
function getMaxSubSum(arr) {
  let maxSum = 0;
  let Sum = 0;
  for (let item of arr) {
    Sum += item;
    maxSum = Math.max(maxSum, Sum);
    if (Sum < 0) Sum = 0;
  }
  return maxSum;
}
alert(getMaxSubSum([-1, 2, 3, -9]));
alert(getMaxSubSum([2, -1, 2, 3, -9]));
alert(getMaxSubSum([-1, 2, 3, -9, 11]));
alert(getMaxSubSum([-2, -1, 1, 2]));
alert(getMaxSubSum([100, -9, 2, -3, 5]));
alert(getMaxSubSum([1, 2, 3]));
