// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )WE CANNOT RETURN VALUES USING FOR EACH ANYWAYS

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

/*Iteration: The filter method iterates over each element of the array. For each element, it executes the provided callback function once.

Callback Function: The callback function takes up to three arguments:

element: The current element being processed in the array.
index (optional): The index of the current element being processed in the array.
array (optional): The array filter was called upon.

Handling Arrays with Different Data Types

const mixedArray = [1, "two", 3, true, 5, null, 7, undefined, 9, {}];

const filteredArray = mixedArray.filter((item) => {
    return typeof item === 'number' && item > 4;
});

console.log(filteredArray); // Output: [5, 7, 9]*/





// Filteration using forEach loop works using .push keyword

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})//return keyword is important when talking about scope 
  console.log(userBooks);