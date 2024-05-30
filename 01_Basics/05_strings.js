// On Console (web ka inspect vala)
// "hello"+ " World"
// output -> hello World concatinated no need to use variables like in js file.

//IN FILE//
const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value"); works and concatinates all
//NO ONE USES + OR , TO CONCATINATE ANYMORE, PEOPLE USE ``(baptics and string interpolation)

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')
//STRING DECLARED AS OBJECT NOW HAS MANY METHODS LIKE STUDIES IN OOPS, CAN SEE ALL METHODS WHEN WE OPEN CONSOLE IN BROWSER

// gameName
// 0: "h"
// 1: "i"
// 2: "t"
// 3: "e"
// 4: "s"
// 5: "h"
// 6: "-"
// 7: "h"
// 8: "c"
// 9: "-"
// 10: "c"
// 11: "o"
// 12: "m"
//not array but key value pair
// length: 13
// <primitive value>: "hitesh-hc-com"
/* <prototype> has ALL THE DEFIENED USABLE METHODS WITH THAT OBJECT CLASS */

console.log(gameName[0]);
console.log(gameName.__proto__);//double underscore hai


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);
//peeche last letter of string se start and 8 character tak then vha se jha tak vo pahuncha 3 more as 4th not included so ite aaya and 4th h not included//

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());//removes additional spaces, trim start and trim end are 2 additional ways of trimming

const url = "https://hitesh.com/hitesh%20choudhary"//browser automatically adds %20 as doesnt understand spaces, to remove/change this you can:-

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))//returns true or false upon includation or not

console.log(gameName.split('-'));//returns an array based on splitting specifier 
/* <protypes> se check methods and do research at MDN about usage */


