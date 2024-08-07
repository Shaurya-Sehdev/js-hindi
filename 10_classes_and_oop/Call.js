function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    //SetUsername(username) will make the function run but jo uska this hai vo uska hi hai and usme value store hoke it will get out of the call stack and the refernce to the outer function would be lost.
    SetUsername.call(this, username) // we say ke hamara this bhej rahe hai saath taaki isme value bhar ke waapas aajae.
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);  