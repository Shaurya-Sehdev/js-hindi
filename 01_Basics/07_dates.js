 // in future Date will be treated like object like Math and will have its own functions, a proposal made called Temporal associates with date The  Temporal.Instant ( . . . ) returns current system exact time etc,
//ALL THIS IS IN FUTURE RIGHT NOW WE WILL HAVE TO STUDY THE TRADITIONAL METHO//

//Dates

let myDate = new Date()//Date an object with properties is created
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)// 0 represents month of JAN as 0 se month start in this format 11 means DEC
// let myCreatedDate = new Date("2023-01-14") YY/MM/DD format motth starts with 1
let myCreatedDate = new Date("01-14-2023")//MM/DD/YY
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
//returns a long millisecond value starting from the standard 1st Jan 1970 as steciified  in EMEC rules as the current timestamp...future mai alag tareeka hoga

// console.log(myCreatedDate.getTime()); returns the timestamp in millesecond when this date was created so this value will be lesser than myTimeStamp ki value as that was created later
/* console.log(Math.floor(Date.now()/1000)); 
to convert value received in millisecond to seconds*/

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);//0 se JAN hota so +1 se 1-12 ki range aati
console.log(newDate.getDay());//returns a number 1 - monday 7 - sunday of acc. to current time and date

// `${newDate.getDay()} and the time` , people use string interpolation or baptics to print the values recieved or returned by functions.

newDate.toLocaleString('default', {
    weekday:"long",
})
//to customize the standard date returned by toLocaleString function...'default' specifies internationalisation type, baki fir kya chahiye and kaisa chahiye in bracket













