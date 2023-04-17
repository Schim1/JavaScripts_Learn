//Сделать первый символ заглавным
//Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
let word = "вася";
alert(word[0].toUpperCase() + word.slice(1));

//Проверка на спам
//Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
function checktoSpam(str) {
  let lowstr = str.toLowerCase();
  return lowstr.includes("viagra") || lowstr.includes("xxx");
}
alert(checktoSpam("buy ViAgRA now")); //true
alert(checktoSpam("free xxxxx")); //true
alert(checktoSpam("innocent rabbit")); //false

//Усечение строки
//Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
function truncate(str, maxlength) {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
}
alert(truncate("Здесь надо обрезать", 10));

//Выделить число
function extractCurrencyValue(price) {
  let number = price.slice(1);
  return +number;
}
alert(extractCurrencyValue("$160") === 160);
