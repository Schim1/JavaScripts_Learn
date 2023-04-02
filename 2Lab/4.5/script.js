//Две функции - один объект
let obj = {};
function A() {
  return obj;
}
function B() {
  return obj;
}
alert(new A() === new B());

//Создайте калькулятор при помощи конструктора, new Calculator
function Calculator() {
  this.read = function () {
    this.num1 = +prompt("Введите первое число", 0);
    this.num2 = +prompt("Введите второе число", 0);
  };
  this.sum = function () {
    return this.num1 + this.num2;
  };
  this.mul = function () {
    return this.num1 * this.num2;
  };
}
let calculator = new Calculator();
calculator.read();
alert("Сумма : " + calculator.sum());
alert("Прозведение : " + calculator.mul());

//Создайте new Accumulator
function Accumulator(stringValue) {
  this.Value = stringValue;
  this.read = function () {
    this.Value += +prompt("Сколько добавить?", 0);
  };
}
let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.Value);
