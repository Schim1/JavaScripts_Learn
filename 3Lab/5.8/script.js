//Хранение отметок "не прочитано"
let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];
let readMessages = new WeakSet();
readMessages.add(messages[0]);
readMessages.add(messages[1]);
alert("Прочитано ли сообщение 0: " + readMessages.has(messages[0]));
alert("Прочитано ли сообщение 2: " + readMessages.has(messages[2]));

//Хранение времени прочтения
let messages1 = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];
let whenRead = new WeakMap();
whenRead.set(messages1[0], new Date(2023, 4, 18));
