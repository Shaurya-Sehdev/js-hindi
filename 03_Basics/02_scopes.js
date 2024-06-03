//var c = 300
let a = 300 // global scope ke values are available inside scopes of others also
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);//10
    
}
//each function created by different programmers should be allowed to take the names of same variables and values given to them are retained within the SCOPE{} of that function or if/else and not let out of the scope. It is let out if you take var instead of const and let which is bad so var should never be used.  


// console.log(a);//300
// console.log(b);
// console.log(c);

//scope of code seen from console on webpage and scopes seen using node on terminal are differnt and will see later

//Nested scopes:-

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

//Child can use variables of parent but parent cant use variables of child, vo anther ke anther hi rhe jaate hain, this is kinda closure only.

//another eg try finding points of error below

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting concept++++++++++++++++++

console.log(addone(5))

function addone(num){
    return num + 1
}
//above way of declaring function will not lead to error if that function is called above declaration

//the way below is 2nd way to declare funtion where value is stored in a variable while declaring function and calling function above declaration leads to error
addTwo(5)
const addTwo = function(num){
    return num + 2
}
