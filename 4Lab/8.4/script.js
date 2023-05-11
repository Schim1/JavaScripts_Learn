/*
Имеется объект dictionary, созданный с помощью Object.create(null) для хранения любых пар ключ/значение.
Добавьте ему метод dictionary.toString(), который должен возвращать список ключей, разделённых запятой.
Ваш toString не должен выводиться при итерации объекта с помощью цикла for..in.
Вот так это должно работать:
 */

let dictionary = Object.create(null);

dictionary.toString = function() {
    let keys = Object.keys(this);
    return keys.join();
}

Object.defineProperty(dictionary, 'toString', {
    enumerable: false,
    writable: true,
    configurable: true
});

// добавляем немного данных
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// только apple и __proto__ выведены в цикле
for(let key in dictionary) {
    console.log(key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
console.log(String(dictionary)); // "apple,__proto__"
