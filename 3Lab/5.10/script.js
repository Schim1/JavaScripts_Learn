//Деструктурирующее присваивание
let user = { name: "John", years: 30 };
let { name, years: age, isAdmin = false } = user;
alert(name); // John
alert(age); // 30
alert(isAdmin); // false

//Максимальная зарплата
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
function TopSalary(salaries) {
  let maxsal = 0;
  let namemxsal = null;
  for (const [name, salary] of Object.entries(salaries)) {
    if (maxsal < salary) {
      maxsal = salary;
      namemxsal = name;
    }
  }
  return namemxsal;
}
alert(TopSalary(salaries));
