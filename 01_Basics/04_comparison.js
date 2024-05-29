// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// above either return true or false


console.log("2" > 1);
console.log("02" > 1);

// line 10 and 11 mai Js automatically converts string to number for comparison and thus return true, hame hamesha same datatypes ko hi compare karna chahiye cause else will get complex unpredictable results unwanted

console.log(null > 0); //false
console.log(null == 0);//false
console.log(null >= 0);//true

//The reason is that an equality check == and comparisons > < >= <= work differently.Comparisons convert null to a number, treating it as 0.
//That's why (3) null >= 0 is true and (1) null > 0 is false.

console.log(undefined == 0);//false
console.log(undefined > 0);//false
console.log(undefined < 0);//false

/* 
******
console.log(null > 0);
console.log(undefined == 0);
NULL AND UNDEFINED ARE NEVER USED TOO COMPARE AS GIVES COMPLEX UNPREDICTABLE RESULTS AND THUS ARE AVOIDED BY PROGRAMMERS

****** 
*/


// === strict check, checks the datatype of the things getting compared and if equal then returns true

console.log("2" === 2);