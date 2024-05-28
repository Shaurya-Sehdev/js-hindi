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