const score = 400
console.log(score);

const balance = new Number(100)
//NUMBER DECLARED AS OBJECT NOW HAS MANY METHODS LIKE STUDIES IN OOPS, CAN SEE ALL METHODS WHEN WE OPEN CONSOLE IN BROWSER
console.log(balance);

console.log(balance.toString().length);//CONVERTED TO STRING USING THIS METHOD AND NOW MUCH MORE METHODS OF STRING CAN BE ACCESSED//

console.log(balance.toFixed(1));//fixes number of decimal places

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4)); //rounds off starting from left as 4 so rounds of 8 to 9 i.e 123.9...if used like 12345.272 pe then 4 lands on 4 and rest 5.27 is given after a weird exponential format so should be used carefully.

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));
//adds , between number as per indian style of 10,00,000
//Number.max-value, Number.min-value etc se can check their safe range from console for dsa

// +++++++++++++ Maths +++++++++++++++++++++++++++++ is a library in js M capital

console.log(Math);
//Math is type of object having its own library like string and have differnt methods to do mathy stuff can check from console
console.log(Math.abs(-4));
//absoulute converts -ve values to +ve

console.log(Math.round(4.6));//rounds off
console.log(Math.ceil(4.2));//rounds with nearest top value i.e 5
console.log(Math.floor(4.9));//rounds with nearest lower value i.e 

const sqrtResult = Math.sqrt(16);
console.log(sqrtResult);//4

const powerResult = Math.pow(base, exponent);
console.log(powerResult);


console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));


console.log(Math.random());//every time node.js compiles, a differnt value between 0 and 1 is returned by 
console.log((Math.random()*10) + 1);//to ensure that 0.02 vala case mai bhi value between mai dhang se rahe
console.log(Math.random()*10) + 1;
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)// formula to generate a random number between 2 specifies numbers, end vala + min ensures a starting point and the remaining formula adds a number to that doesnt cross the max value(max-min) and is in range,+1 to ensures the cases