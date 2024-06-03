const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
//object mai this keyword works and refers to scope ke anther ke variables
// user.welcomeMessage()
// user.username = "sam" as decalared globally and later on thus value of username will change inside object as well as global baki ke scopes ko bhi overwrite kar deta hai
// user.welcomeMessage()

// console.log(this); this when run globally on console give a Window object which is the most common global object, but when standalone js runners like node pe run karte hain this globally then it returns an empty object.

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }
//function ke anther this.username doesn't work and gives undefined aise
//if you only do console.log(this); inside a function then you receive a large number of parameter values global, performance evaluation,fetch etc, so this mai kuch rakha hua hai and is accessible
// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

//declaration of arrow functions similiar to above
const chai =  () => {
    let username = "hitesh"
    console.log(this);//arrow function mai bhi this.username gives undefined BUT console.log(this); gives EMPTY {} LIKE GLOBAL THIS VALUE CHECKING.
}

// chai()

//Arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2
// } standard way and easy

// const addTwo = (num1, num2) =>  num1 + num2 implict one liners in which {} and return keyword are not to be used and it assumes them but arrow ke baad same line mai likho cheezein

// const addTwo = (num1, num2) => ( num1 + num2 ) this is same like above no need of {} and return

const addTwo = (num1, num2) => ({username: "hitesh"})
//() ye brackets are important around an object when we want a function to return an object

console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach() loops and how to use them with differnt forms of functions will be seen by us later.