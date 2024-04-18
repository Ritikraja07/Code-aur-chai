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

// ******************************* Operations *************************

let value = 3;
let negValue = -value;
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " ritik"
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");


console.log(+true);
console.log(+"");

let gameCounter = 100;
++gameCounter; //(++) prefix & postfix (++)
console.log(gameCounter);