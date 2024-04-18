let score = "33abc";

console.log(typeof (score));

let valueNumber = Number(score);
console.log(typeof (valueNumber));
console.log(valueNumber);

// "33" => 3
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);

// 1 => ture; 0 => false
// "" => false
// "ritik" => true

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof(stringNumber));