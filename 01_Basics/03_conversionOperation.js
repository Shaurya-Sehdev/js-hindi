let score = "33" 

console.log(typeof score);
console.log(typeof(score));
// type of se datatype dekhna zaroori hai cause frontend form se koi value agar aaye to pata hona chaihye uska data type. Abhi to hamne define kar rakha hai but still.

let valueInNumber = Number(score)// datatype conversion or typecast 

console.log(typeof valueInNumber);

console.log(valueInNumber);
// valueInNumber values are changed according to datatype of score, if score is boolean true then number assigned is 1, if boolean false then 0, if null then upon conversion its value is 0 , if undefined or invalied like '33abc' then NaN meaning NotAObject.

// "33" => 33
// "33abc" => NaN
// true => 1; false =>0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true, 0=> false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber);

// ************ OPERATIONS *********//

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);

// console.log(2*2);
// console.log(2**3); raise to power

// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh" //1 gap before first letter given

let str3 = str1+str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32

console.log( (3 + 4) * 5 % 3); // means 35%3 = 2
//All these maybe imp for Exam Point OF View but real life is more practical and code should be simple and easy to read and ye sabh karate bhi nhi zada but should know. If want to llearn more indepth mai reasons then read documentation at EMEC else memorise the basics ones used//

console.log(+true); //1
console.log(+""); //0

// console.log(true+); 
// console.log(""+); ERROR


let num1, num2, num3 

num1 = num2 = num3 = 2 + 2 //not a smart way code should be readable.

let gameCounter = 100
++gameCounter;
console.log(gameCounter);
//prefix and postfix operator aata hai obv

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion