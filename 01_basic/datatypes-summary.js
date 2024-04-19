// Primitive dataTypes

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3434646343534633n


// Reference dataTypes (Non primitive)

// Array, Objects, Functions

const heros = ["sharktiman", "naagraj", "doga"] // array

let myObj = {
    name: "ritik",
    age: 22,
}                   // objects

const myFunction = function(){
    console.log("Hello world");
}                   // Functions

console.log(typeof bigNumber)



// ++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "ritikrajadotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(anothername);
console.log(myYoutubename);

let user1 = {
    email: "user@google.com",
    upi: "user@ybl"
}

let user2 = user1;

user2.email = "ritik@google.com"

console.log(user1.email);
console.log(user2.email);