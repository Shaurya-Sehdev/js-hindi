// array

const myArr = [0,1,2,3,4,5]//datatype inside an array need not be same
//js array are resizeable
//array-copy-operations make shallow copies of arrays- copy whose copy shared the same refernce point as refernced datatype non primitive...deep copies mai not same reference point

const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);
//array now created as an object and has many methos can be seen from prototype on console

//Array methods

myArr.push(6)
myArr.push(7)
myArr.pop//removes last value
myArr.unshift(9)//inserts value 9 at the start of the array and hence all the elements had to be shifted
myArr.shift()//pops or removes the first element of the arrray

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join()//.join adds all the elements of array into a string so newArr is a string

//slice,splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
//slice gives a copy of range between 2 numbers specifies
//splice changes the orignal array like cutting a cake so those values including the one in the range upper is removed and given





