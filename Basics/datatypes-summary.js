// Types of data types**
//     1. primitive : 7type- String, number, boolean, null, undefined, BigInt, symbol
//     2. Reference(Non-primitive) : 3type- Array, Function, Objects 

// //symbol
const Id = Symbol('123')
const anotherId = Symbol('123')
console.log(Id === anotherId) 



// Array, obj

// Const fastfood = ["momo", "pizza", "burger"];  // Array- ["",""];

let myobj ={          //all inside {} are object & need comma(,) too
    name:"Dikshya",
    age: 21
}

// Datatype of all non-primitive are functions
   // and function's return specialist called objectfunction


// ***************************************Memory******************************

//Stack(primitive), Heap(Non-primitive)

// let oldname= "Dikshya sharma"
//stack use copy refrenece of the memory
// let newname= oldname      
// newname= "Dikxu Acharya"
// // console.log(newname)


// console.log(oldname)
// console.log(newname)


//heap use direct refrence of the memory i.e. original value

let userone = {
    name:"pooza",
    age: 22
}

 let usertwo= userone
console.log(usertwo.name);
usertwo.name= "poojasharma"

console.log(userone);
console.log(usertwo);














