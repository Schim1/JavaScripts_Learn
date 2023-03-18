let str = "123";
alert(typeof str); // string

let num = Number(str); // 123

alert(typeof num); // number

alert(Number("   123   ")); // 123
alert(Number("123z")); // NaN
alert(Number(true)); // 1
alert(Number(false)); // 0

alert(Boolean(1)); // true
alert(Boolean(0)); // false

alert(Boolean("Привет!")); // true
alert(Boolean("")); // false
