//Декоратор-шпион
function spy(func) {
  function wrapper(...args) {
    // мы используем ...args вместо arguments для хранения "реального" массива в wrapper.calls
    wrapper.calls.push(args);
    return func.apply(this, args);
  }
  wrapper.calls = [];
  return wrapper;
}

//Задерживающий декоратор
function f(x) {
  alert(x);
}
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);
f1000("test"); //  1000 мс
f1500("test"); //  1500 мс
function delay(f, ms) {
  return function (...args) {
    let savedThis = this; // сохраняем this в промежуточную переменную
    setTimeout(function () {
      f.apply(savedThis, args); // используем её
    }, ms);
  };
}

//Декоратор debounce
let f = debounce(alert, 1000);
f(1); // выполняется немедленно
f(2); // проигнорирован
setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout(() => f(4), 1100); // выполняется
setTimeout(() => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)
function debounce(f, ms) {
  let isCooldown = false;
  return function () {
    if (isCooldown) return;
    f.apply(this, arguments);
    isCooldown = true;
    setTimeout(() => (isCooldown = false), ms);
  };
}
