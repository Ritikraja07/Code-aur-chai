const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-In'));


// +++++++++++++++++++ Maths +++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));  // abs will change negative to positive

// console.log(Math.round(4.6));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.7));
// console.log(Math.min(4,6,3,2,22));


// Math random value

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);