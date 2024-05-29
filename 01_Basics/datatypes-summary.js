//In programming, call by value means you give a function a copy of your data (the cookie), so changes inside the function don't affect the original data. Call by reference means the function gets a direct link to your data (the whole box), so any changes it makes are reflected in the original data.


//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100 
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;//undefined
//This means that the data type of a variable is determined by the value it holds at runtime, rather than being declared beforehand. You don't need to explicitly specify what type of data a variable can hold (like numbers or text), and the variable can even change types throughout your program.

//Symbol declaration (gives uniqueness to things of frontend and others like buttons etc by wrapping)
const id = Symbol('123') // returns a datatype called symbol
const anotherId = Symbol('123')
//Symbol datatype ka nature hai ke even if you give same value to 2 different datas then also it will make then different and unique and upon comparison of both will give false(value same di but RETURN VALUE JO MILA IS NOT SAME)

console.log(id === anotherId);//false

const bigNumber = 3456543576654356754n // end mai n lagane se automatically bigint hi given by js


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "hitesh",
    age: 22,
}
//datatype inside an object can be any even another object

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// typeof Data Type ->	Return Type
// typeof number	->	number

// typeof string	->	string

// typeof boolean	->	boolean

// typeof null	     ->	OBJECT AS UNIQUE

// typeof undefined ->	undefined

// typeof object->OBJECT-function

// typeof array->	OBJECT

// typeof function	->	OBJECT-function

// NON-PRIMITIVE DATATYPE-> OBJECT


// https://262.ecma-international.org/5.1/#sec-11.4.3


