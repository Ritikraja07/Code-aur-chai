const name = "ritik"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //used to add two strings

const gameName = new String('ritikrr')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(1));
console.log(gameName.indexOf('t'));


const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-7, 4)
console.log(anotherString);

// trim


const url = "https://ritik.com/ritik%20raja"

console.log(url.replace('%20', '-'));

console.log(url.includes('ritik'));

console.log(gameName.split(' '));