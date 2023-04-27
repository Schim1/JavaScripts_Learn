//Связанная функция как метод
function f() {
  alert(this); // null
}
let user = {
  g: f.bind(null),
};
user.g();

//Повторный bind
function f() {
  alert(this.name);
}
f = f.bind({ name: "Вася" }).bind({ name: "Петя" });
f(); // Вася

//Свойство функции после bind
function sayHi() {
  alert(this.name);
}
sayHi.test = 5;
let bound = sayHi.bind({
  name: "Вася",
});
alert(bound.test); // undenfinded

//Исправьте функцию, теряющую "this"
function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}
let user2 = {
  name: "Вася",
  loginOk() {
    alert(`${this.name} logged in`);
  },
  loginFail() {
    alert(`${this.name} failed to log in`);
  },
};
askPassword(user.loginOk.bind(user2), user.loginFail.bind(user2));
