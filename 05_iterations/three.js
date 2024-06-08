// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}//(const ITERATOR of OBJECTS), iterator CAN BE NAMED ANYTHING and object can be ANY DATATYPE NOT NECESSARILY OBJECT ONLY

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const key of map) {
    // console.log(key);
}

//OUTPUT:-
/*[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'Fr', 'France' ]*/

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}//can write any variables instead of key and value also but this is a good way to ITERATE MAPS BUT NOT OBJECTS.

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// } ERROR GIVEN NO ITERATION DONE




