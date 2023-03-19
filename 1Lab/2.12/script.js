let user;
alert(user ?? "Аноним"); // Аноним

let firstName = null;
let lastName = null;
let nickName = "Суперкодер";
alert(firstName ?? lastName ?? nickName ?? "Аноним"); // Суперкодер

//Сравнение с ||
let height = 0;
alert(height || 100); // 100
alert(height ?? 100); // 0

//Приоритет
let heigh = null;
let width = null;
let area = (heigh ?? 100) * (width ?? 50); // правильно, а так - let area = height ?? 100 * width ?? 50; - ошибка
alert(area); // 5000

//Использование ?? вместе с && или ||
let x = (1 && 2) ?? 3; // так работает, а так let x = 1 && 2 ?? 3; - ошибка
