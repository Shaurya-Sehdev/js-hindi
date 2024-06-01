// const tinderUser = new Object() Construtor method to create object...constructor se banao then this , this karke properties likho joki uss template ke instance mai constructor ke anther values deke obj banta
const tinderUser = {}//ye to abhi literals way and nesting of obj inside obj dekhenge

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname); accessing objects inside objects

//Studying the use of object. assign method 

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true

//SIMILIARLY :-
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}//MAJORLY USED THIS EASIER SPREAD WAY TO COMBINE
// console.log(obj3);

// Database se values aati hain then users etc ARRAY OF OBJECTS KE FORM mai aate like:-

const users = [
    {
        id: 1,
        email: "h1@gmail.com"
    },
    {
        id: 2,
        email: "h2@gmail.com"
    },
    {
        id: 3,
        email: "h3@gmail.com"
    },
]

users[1].email// way to access object then value from array

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));//returns an ARRAY with all the keys only
// console.log(Object.values(tinderUser));//same like keys
// console.log(Object.entries(tinderUser));// creates array ke anther arrays of key-value pairs

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); tells whether a particular property or key is included in obj
