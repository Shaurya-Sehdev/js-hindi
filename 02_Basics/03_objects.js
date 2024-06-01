// SINGLETON, in JavaScript, a singleton is like that special toy. It's a special object that only gets created once. Even if you try to make more of the same object, you always end up with the first one. 

// We have a special toy (instance) that we keep inside a safe place (inside the Singleton function). Constructor used to create a singleton object once and agar second time request aaye then vo if chose karke negelect kar deta hai
// The getInstance function lets us see the toy, but it makes sure that if we don't already have one, we create it first.
// Even if you ask for the toy multiple times (instance1 and instance2), you always get the same one.
//literals ki tarah declare then singleton nhi banta, constructor se banega to hamesha singleton banega.

//object.create is the constructor method to create object jisse ki singleton banta hai
//object literals -> object ko create karne ka non constructor tareeka hai(singleton not made):-

const mySym = Symbol("key1")//declared a symbol to attach with the object created down to give uniqueness to it like its badge number and to use like symbol we need to add [] around that else is treated like string

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
//key value pairs decalred in object

// console.log(JsUser.email) first method to access object properties
// console.log(JsUser["email"])2nd method requires datatype so "" are also imp if string is there...we cant access full name with 1st . method so 2nd method [] and ""can only be used with properties like full name.
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"//to change value
//Object.freeze(JsUser) to lock object so that its values are unchangable...name of object in bracket, cant add new funtions or values also
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);

//adding functions to objects

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);//to refernce same object we use this keyword
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());