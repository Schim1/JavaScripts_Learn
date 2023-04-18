//Вычислить сумму чисел до данного
//Решение с помощью цикла:
function sumToCycle(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}
alert(sumToCycle(100));
//Решение через рекурсию:
function sumToRec(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}
alert(sumToRec(100));
//Решение по формуле:
function sumToForm(n) {
  return (n * (n + 1)) / 2;
}
alert(sumToForm(100));

//Вычислить факториал
function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}
alert(factorial(5));

//Числа Фибоначчи
function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757

//Вывод односвязного списка
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
function printList(list) {
  alert(list.value);
  if (list.next) {
    printList(list.next);
  }
}
printList(list);

//Вывод односвязного списка в обратном порядке
let list1 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
function printReverseList(list) {
  if (list.next) {
    printReverseList(list.next);
  }
  alert(list.value);
}
printReverseList(list1);
