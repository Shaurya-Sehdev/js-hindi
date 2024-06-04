// Immediately Invoked Function Expressions (IIFE)
//we want immediate execution of functions so that they dont get polluted by global variables or for any other reason(global scope pollution prevent by iffe)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();//SEMICOLON imp else compiler doest know where to end running function
//first() for defination of func and 2nd () for exec of func

//for arrow functions see syntax neeche
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
} )('hitesh');
//1st () mai function defined and parameter() used with arrow syntax, last() for execution so argumrnt hitesh passed.
