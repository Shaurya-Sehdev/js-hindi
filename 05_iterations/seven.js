const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10}), MAP doesnt explicitly checks true or false and thus makes it different from filter, can be used to change values etc.


//CHAINING -> 2-3 METHODS IKKHATE USE KARNA

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)//second map ka num will get upadate value iteration as per above method ke effects ke baad.
                .filter( (num) => num >= 40)

console.log(newNums);

