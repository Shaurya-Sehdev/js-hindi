//npm install jsvu -g
/*eshost --add 'Chakra' ch ~/.jsvu/chakra
eshost --add 'JavaScriptCore' jsc ~/.jsvu/javascriptcore
eshost --add 'SpiderMonkey' jsshell ~/.jsvu/spidermonkey
eshost --add 'V8 --harmony' d8 ~/.jsvu/v8 --args '--harmony'
eshost --add 'V8' d8 ~/.jsvu/v8*/

// ~/.jsvu/bin/v8-debug --allow-natives-syntax is the command which allows us to run % commands in javascript like %DebugPrint(arr) , now can write commands on d8 to check

const myArr = []
%DebugPrint(myArr)

// continuous, Holey

// SMI (small integer)
// Packed element
// Double (float, sting, function)
const arrTwo = [1, 2, 3, 4, 5]
// PACKED_SMI_ELEMENTS

arrTwo.push(6.0)
// PACKED_DOUBLE_ELEMENTS

arrTwo.push('7')
// PACKED_ELEMENTS

arrTwo[10] = 11
// HOLEY_ELEMENTS

console.log(arrTwo);
console.log(arrTwo.length);

console.log(arrTwo[9]);

// bound check
// hasOwnProperty(arrTwo, 9)

// hasOwnProperty(arrTwo.prototype, 10)
// hasOwnProperty(Object.prototype, 10)

// holes are very expensive in js
const arrThree = [1, 2, 3, 4, 5];
console.log(arrThree[2]);

// SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED

const arrFour = new Array(3);//***ONCE YOU DOWNGRADE THEN YOU CANT GO BACK SO INITITIALISING AS LESS OPTIMIZED WOULD NEVER BE PREFFERED */
// just 3 holes. HOLEY_SMI_ELEMENTS

arrFour[0] = '1'; // HOLEY_ELEMENTS
arrFour[1] = '2'; // HOLEY_ELEMENTS
arrFour[2] = '3'; // HOLEY_ELEMENTS

const arrFive = [];
arrFive.push('1'); // PACKED_ELEMENTS
arrFive.push('2'); // PACKED_ELEMENTS
arrFive.push('3'); // PACKED_ELEMENTS

const arrSix = [1, 2, 3, 4, 5]

arrSix.push(Infinity)// will convert array to double and lesser optimized

// for, for-of, forEach, These loops ki optizization changes based on the type of array and elements inside it.
