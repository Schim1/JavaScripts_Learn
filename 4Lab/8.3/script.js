/*
Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.
После этого должен работать такой код:
 */

Function.prototype.defer = function (ms) {
  setTimeout(this, 1000, this);
};

function f() {
  console.log("Hello!");
}

f.defer(1000); // выведет "Hello!" через 1 секунду

/*
Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.
Например, должно работать так:...

Пожалуйста, заметьте, что аргументы должны корректно передаваться оригинальной функции.
 */

Function.prototype.defer = function (ms) {
  let func = this;

  function wrapper(...arguments) {
    setTimeout(() => func.apply(this, arguments), 1000);
  }

  return wrapper;
};

function f(a, b) {
  console.log(a + b);
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
