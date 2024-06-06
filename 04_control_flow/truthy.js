const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " "(even a space inside string makes truthy), [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}
//(Object.keys(emptyObj) returns array with keys and if those keys ki array ka length = 0 means object is empty so yeah.

//false = 0 = ''

// Nullish Coalescing Operator (??): works on understanding of null and undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 ,usually aise 10 nhi likha hota balki ek function hota hai jo kisi jagah se ek value fetch karke laye so then take.
// val1 = undefined ?? 15 , works similiar to the null case and value will be alloted if a number comes else undefined
val1 = null ?? 10 ?? 20
//in such a case first value that comes assuming 10 in this case will be alloted. If no value comes only then null we be alloted.

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")