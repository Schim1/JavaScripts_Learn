//Вывод каждую секунду
function printNumbers(from, to) {
  let current = from;
  function go() {
    alert(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }
  go();
  let timerId = setInterval(go, 1000);
}
printNumbers(5, 10);

//Что покажет setTimeout?
let i = 0;
setTimeout(() => alert(i), 100); // 100000000
// предположим, что время выполнения этой функции >100 мс
for (let j = 0; j < 100000000; j++) {
  i++;
}
