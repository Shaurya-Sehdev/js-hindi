function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {//this matlab poora data of execution context of User and .defineProperty allows to add new functions and modify old ones.
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email);