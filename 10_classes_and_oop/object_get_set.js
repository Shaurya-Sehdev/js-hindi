const User = {
    _email: 'h@hc.com',
    _password: "abc",
    //In JavaScript, the underscore prefix (e.g., _email and _password) is a naming convention used to indicate that these properties are intended to be private or for internal use within the object.Ham bas maante hai apne reference ke liye ke _se likh ke private ki tarah ab se treat karenge usse

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);// not to be called like tea.email() as that is when used with functions and classes but with Objects these methods by syntax have to be called like their properties so tea.email actually access the get method called email.
//the setter is used when tea.email(something) jaise kuch ho
console.log(tea._email);// will simply return that property of tea called _email so simply h@hc.com will print but cause hamne private for our own use declare kara thha to aisa karna nhi chahiye as calling outside the scope.

