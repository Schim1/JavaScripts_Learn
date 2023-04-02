//Опциональная цепочка
let user = {}; // пользователь без адреса

alert(user?.address?.street); // undefined (без ошибки)

//Сокращённое вычисление
let user2 = null;
let x = 0;

user?.sayHi(x++); // нет "user", поэтому выполнение не достигает вызова sayHi и x++

alert(x); // 0, значение не увеличилось

//Другие варианты применения: ?.(), ?.[]
let userAdmin = {
  admin() {
    alert("Я админ");
  },
};

let userGuest = {};

userAdmin.admin?.(); // Я админ

userGuest.admin?.(); // ничего не произойдет (такого метода нет)
