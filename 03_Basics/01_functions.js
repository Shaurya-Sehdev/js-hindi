function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName() calling or using a function

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}
//return ke baad koi line execute nhi hoti
const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage()) call directly then undefined just logged in hota hai but because we have added an if statement then please enter a username aata.

//sam default value hai which is ONLY WHEN NO VALUE IS PASSED, If value is passed then it Overwrites the default value.

//suppose a shopping cart situation comes where you dont know number of parameters that should be added then

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000)) val1 ->200, val2->400, remaining jitne bhi hain unka ...REST OR SPREAD OPERATOR ek bundle/array bana deta hai and that can be added using loops etc so will see later.

//objects mai:-


const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

//can directly pass while creating object as well

handleObject({
    username: "sam",
    price: 399
})

//array passing:-
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));