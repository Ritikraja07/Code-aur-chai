const user = {
    username: "Ritik",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "ritik"
//     console.log(this.username);
// }

// chai()

// const chai = function() {
//     let username = "ritik"
//     console.log(this.username);
// }

const chai = () => {
    let username = "ritik"
    console.log(this);
}

// chai();

() => {}  //arrow function

const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3, 4));