//Использование "this" в литерале объекта

//Каким будет результат при обращении к свойству объекта ref?
function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();

alert(user.ref.name); // ошибка

//Создайте калькулятор
let calculator = {
  read() {
    this.num1 = +prompt("Введите первое число", 0);
    this.num2 = +prompt("Введите второе число", 0);
  },
  sum() {
    return this.num1 + this.num2;
  },
  mul() {
    return this.num1 * this.num2;
  },
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());

//Цепь вызовов
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    // показывает текущую ступеньку
    alert(this.step);
    return this;
  },
};
ladder.up().up().down().showStep().down().showStep();
