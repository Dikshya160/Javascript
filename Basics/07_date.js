// console.log(Date)

let MyDate = new Date()
// console.log(MyDate.toDateString()); //week name include include
// console.log(MyDate.toISOString())
// console.log(MyDate.toLocaleDateString())  //give local/today date
// console.log(MyDate.toLocaleString()); //give local date and time
// console.log(MyDate.toLocaleTimeString()) //give local time only
// console.log(MyDate.toTimeString())

// console.log(typeof MyDate) //date is obj



let myCreatedDate = new Date(2025,00,06) //here month is start by count 0 so 0 is january
// console.log(myCreatedDate)
// console.log(myCreatedDate.toDateString());


// let myCreatedDate = new Date(2025,1,7,13,8) //1-12= Am , 12-24=Pm
// console.log(myCreatedDate.toLocaleString());

let anotherDate= new Date(myCreatedDate)
// console.log(anotherDate.toString())


// ++++++In MM-DD-YYYY  ++++++++++
let Dateone = new Date("2-12-2022")
// console.log(Dateone.toLocaleString())



// let myTimestamp = Date.now()
// console.log(myTimestamp); //time till 1970 jan1 to now in millisecond
// console.log(Dateone.getTime()) //value used for comparing

// console.log(Date.now()); //give exact date
//**to transfrom millisecond to second ****/
// console.log(Math.floor(Date.now()/1000));  //Math.floor is used for bot getting decimal value


// ++++++Get exact day month date++++
// let newDate = new Date()
// console.log(newDate); //get today date : 2025-01-29
// console.log(newDate.getDate()) //today date- 29
// console.log(newDate.getDay()) //week sunday=0 , wed= 3
// console.log(newDate.getMonth()) //0=jan


let newDate = new Date()
// console.log(newDate.getMonth()+1)  //0ut- 1:feb



// let birthDate = new Date(2025-1-23) // valid 0-jan in output only
// console.log(`I was born in month ${birthDate.getMonth()}, day is ${birthDate.getDay()} `)



