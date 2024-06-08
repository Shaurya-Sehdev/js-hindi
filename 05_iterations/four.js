const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
//FOR IN LOOP
for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}//works good for objects key and values

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}//console.log(key); prints 0,1,2,3,4,5 as are keys of array

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }
//SO MAPS CANT BE ITERATED WITH FOR IN LOOP AND ABOVE GIVES ERROR

//FOR IN LOOP EASIER ON OBJECTS AND FOR KEYS OF STUFF, FOR OF FOR MAPS AND VALUES OF STUFF.