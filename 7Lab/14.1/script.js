/*
Обычно при чтении несуществующего свойства из объекта возвращается undefined.

Создайте прокси, который генерирует ошибку при попытке прочитать несуществующее свойство.

Это может помочь обнаружить программные ошибки пораньше.

Напишите функцию wrap(target), которая берёт объект target и возвращает прокси, добавляющий в него этот аспект функциональности.

Вот как это должно работать:

let user = {
  name: "John"
};

function wrap(target) {
  return new Proxy(target, {

});
}

user = wrap(user);

alert(user.name); // John
alert(user.age); // Ошибка: такого свойства не существует
 */

let user = {
  name: "John",
};

function wrap(target) {
  return new Proxy(target, {
    get(target, prop) {
      if (prop in target) {
        return target[prop];
      } else {
        throw new Error("Ошибка: такого свойства не существует");
      }
    },
  });
}

user = wrap(user);

console.log(user.name); // John
console.log(user.age); // Ошибка: такого свойства не существует

/*
В некоторых языках программирования возможно получать элементы массива, используя отрицательные индексы, отсчитываемые с конца.

Вот так:

let array = [1, 2, 3];

array[-1]; // 3, последний элемент
array[-2]; // 2, предпоследний элемент
array[-3]; // 1, за два элемента до последнего

Другими словами, array[-N] – это то же, что и array[array.length - N].

Создайте прокси, который реализовывал бы такое поведение.

Вот как это должно работать:

let array = [1, 2, 3];

array = new Proxy(array, {

});

alert( array[-1] ); // 3
alert( array[-2] ); // 2

// вся остальная функциональность массивов должна остаться без изменений
 */

let array = [1, 2, 3];

array = new Proxy(array, {
  get(target, index) {
    if (target.length >= -index) {
      return target.at(index);
    }
  },
});

console.log(array[-1]); // 3
console.log(array[-2]); // 2

// вся остальная функциональность массивов должна остаться без изменений

/*
Создайте функцию makeObservable(target), которая делает объект «наблюдаемым», возвращая прокси.

Вот как это должно работать:

function makeObservable(target) {

}

let user = {};
user = makeObservable(user);

user.observe((key, value) => {
  alert(`SET ${key}=${value}`);
});

user.name = "John"; // выводит: SET name=John

Другими словами, возвращаемый makeObservable объект аналогичен исходному, но также имеет метод observe(handler), который позволяет запускать handler при любом изменении свойств.

  При изменении любого свойства вызывается handler(key, value) с именем и значением свойства.

  P.S. В этой задаче ограничьтесь, пожалуйста, только записью свойства. Остальные операции могут быть реализованы похожим образом.
 */

let handlers = Symbol("handlers");

function makeObservable(target) {
  target[handlers] = [];

  target.observe = function (handler) {
    this[handlers].push(handler);
  };

  return new Proxy(target, {
    set(target, property, value, receiver) {
      let success = Reflect.set(...arguments);
      if (success) {
        target[handlers].forEach((handler) => handler(property, value));
      }
      return success;
    },
  });
}

let user1 = {};
user = makeObservable(user1);

user.observe((key, value) => {
  console.log(`SET ${key}=${value}`);
});

user1.name = "John"; // выводит: SET name=John
