class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());

/*Static Methods and Properties:
They are associated with the class itself.
You don't need to create an object (instance) of the class to use them.
They can be called directly using the class name.*/

/*User.createId() will work because createId is a static method.
hitesh.createId() would not work because createId is not available on instances of User.*/