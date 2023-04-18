//Фильтрация уникальных элементов массива
function unique(arr) {
  return Array.from(new Set(arr));
}
let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];
alert(unique(values)); // Hare,Krishna,:-O

//Отфильтруйте анаграммы
function aclean(arr) {
  let map = new Map();
  for (let str of arr) {
    let sort = str.toLowerCase().split("").sort().join("");
    map.set(sort, str);
  }
  return Array.from(map.values());
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert(aclean(arr));

//Перебираемые ключи
let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
keys.push("more");
alert(keys);
