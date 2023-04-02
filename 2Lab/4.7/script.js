//«Скрытые» свойства
let user = {
  name: "Вася",
};

let id = Symbol("id");

user[id] = 1;

alert(user[id]); // мы можем получить доступ к данным по ключу-символу

//Символы игнорируются циклом for…in
let id2 = Symbol("id");
let user = {
  name: "Вася",
  age: 30,
  [id2]: 123,
};

for (let key in user) alert(key); // name, age (свойства с ключом-символом нет среди перечисленных)

// хотя прямой доступ по символу работает
alert("Напрямую: " + user[id2]);

//Symbol.keyFor
// получаем символ по имени
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// получаем имя по символу
alert(Symbol.keyFor(sym)); // name
alert(Symbol.keyFor(sym2)); // id
