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