const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this); THIS WHEN CALLED IN GLOBAL SCOPE RETURNS AN EMPTY OBJECT IN NODE ENVIRONMENT AS NOTHING IN GLOBAL SCOPE BUT WHEN RUN ON BROWSER RETURNS A WINDOW OBJECT.


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);// this tells that constructor is a function only when run on terminal so tells ke self referencing function hai
//console.log(userTwo); this will print the whole object2 as new keyword se new instance was made using the constructor. The greeting function ke anther ka wont be displayed as it has to be called separately to run.