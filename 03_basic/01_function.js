function sayMyname() {
    console.log("R");
    console.log("I");
    console.log("T");
    console.log("I");
    console.log("K");
}

// sayMyname();

/*

function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
} 

*/

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // console.log("Ritik");
    // return result

    return number1 + number2
}

// addTwoNumbers(3, 5);

const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);

function loginUserMessage(username) {
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("ritik"));
console.log(loginUserMessage());