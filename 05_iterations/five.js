//FOR EACH LOOP
//inspect elements array pe jaake kiya to prototype mai ek function tha for each loop ka and others which can directly be used

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } ) foreach requires a call back function inside it and call back function is a function without name and parameter passed inside can be named anything will simply iterate over array and return the value ek-ek karke.

//arrow function to do the same
// coding.forEach( (item) => {
//     console.log(item);
// } )


// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe) , printMe function ko execute nhi karna only reference dena hai

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } ) apart from value, index and whole arr can also be printed aise using for each.


// [{}, {}, {}] many objects inside array case

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
//database se value aise format mai aati hai thus imp hai

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )
//har iteration mai item means object and object ke methods directly item ke saath apply karke finish karo.