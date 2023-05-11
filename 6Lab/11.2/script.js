/*
Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, использующую промисы.
Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд, так чтобы мы могли добавить к нему .then:
 */

function delay(ms) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

delay(3000).then(() => console.log("выполнилось через 3 секунды"));

/*
Перепишите функцию showCircle, написанную в задании Анимация круга с помощью колбэка таким образом, чтобы она возвращала промис, вместо того чтобы принимать в аргументы функцию-callback.

Новое использование:

showCircle(150, 150, 100).then(div => {
  div.classList.add('message-ball');
  div.append("Hello, world!");
});

Возьмите решение из Анимация круга с помощью колбэка в качестве основы.
 */
