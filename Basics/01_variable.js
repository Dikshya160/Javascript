const accountId=13579
let accountEmail="dikshya@gmail.com"
var accountPassword="dikshya1"
accountCity="Butwal"
let accountstate;

// accountId=12345 //not allowed beacause there's const in accountID which means to be stable

accountEmail="sharma@gmail.com"
accountPassword="56789"
accountCity="kathmandu"


//One print at a time//
console.log(accountEmail)

//prefer not to use var because of issue in black scope and functinal scope
//not declear without using and variable or constant too eg:accountcity

//if let or var is not decleard in here then it give output as undefined
// eg:accountstate
// but in case of const it need decleration at an inital time


//print all at a time
console.table([accountId, accountEmail, accountPassword, accountCity, accountstate])
