//Создайте дату
let dt = new Date(2012, 1, 20, 3, 12);
alert(dt);

//Покажите день недели
function getWeekDay(date) {
  let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
  return days[date.getDay()];
}
let date = new Date(2012, 0, 3);
alert(getWeekDay(date));

//День недели в европейской нумерации
function getLocalDay(date) {
  let day = date.getDay();
  if (day == 0) day = 7;
  return day;
}
let date1 = new Date(2012, 0, 3);
alert(getLocalDay(date1));

//Какой день месяца был много дней назад?
function getDateAgo(date, days) {
  let cpDate = new Date(date);
  cpDate.setDate(date.getDate() - days);
  return cpDate.getDate();
}
let date2 = new Date(2015, 0, 2);

alert(getDateAgo(date2, 1)); // 1, (1 Jan 2015)
alert(getDateAgo(date2, 2)); // 31, (31 Dec 2014)
alert(getDateAgo(date2, 365)); // 2, (2 Jan 2014)

//Последнее число месяца?
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}
alert(getLastDayOfMonth(2014, 0)); // 31
alert(getLastDayOfMonth(2016, 1)); // 29
alert(getLastDayOfMonth(2018, 1)); // 28

//Сколько сегодня прошло секунд?
function getSecondsToday() {
  let DateNw = new Date();
  return (
    DateNw.getHours() * 3600 + DateNw.getMinutes() * 60 + DateNw.getSeconds()
  );
}
alert(getSecondsToday());

//Сколько секунд осталось до завтра?
function getSecondToTomorrow() {
  let now = new Date();
  let secToday =
    now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
  let secInDay = 86400;
  return secInDay - secToday;
}
alert(getSecondToTomorrow());

//Форматирование относительной даты
function formatDate(date) {
  let dayOfMonth = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let diffMs = new Date() - date;
  let diffSec = Math.round(diffMs / 1000);
  let diffMin = diffSec / 60;
  let diffHour = diffMin / 60;
  year = year.toString().slice(-2);
  month = month < 10 ? "0" + month : month;
  dayOfMonth = dayOfMonth < 10 ? "0" + dayOfMonth : dayOfMonth;
  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  if (diffSec < 1) {
    return "прямо сейчас";
  } else if (diffMin < 1) {
    return `${diffSec} сек. назад`;
  } else if (diffHour < 1) {
    return `${diffMin} мин. назад`;
  } else {
    return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`;
  }
}
