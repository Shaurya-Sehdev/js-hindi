const accountId = 144553
let acountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
// global variables like line 4 can be decalared but should be avoided

let accountState

// accountId = 2 not allowed //
accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "Bengaluru"
console.log(accountId);

/*
Prefer not to use var because of issue in block scope and functional scope if,for {};
use 'let' instead*/

console.table([accountId, accountEmail,accountPassword,accountCity,accountState])
