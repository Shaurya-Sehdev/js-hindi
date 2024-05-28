"use strict"; //treat all JS code as newer version

// alert(3+3) we are using Node.js not browser

// 2 types of documentations are important tc.39 (ECMA) (Helpful sometimes, indepth reading only for browser/engine devs) , 2nd is MDN.

let name = "Shaurya"
let age = 18
let isLoggedIn = false

// number => 2^53 itne bade number tak ki range holds
// bigint for bigger than number
// string =>""
// boolean => true/false
// null => standalone value shows emptyness
// undefined => value not assigned/defined

//symbol -> uniqueness find for figma etc ke liye useful.

//object

console.log(typeof "Shaurya");//returns the type of specified stuff
console.log(typeof null) //null is an object
console.log(typeof undefined)

//see ecma, mdn for documentation of these keyword//