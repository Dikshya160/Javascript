const name ="Dikshya"
let age= 21
// console.log(name + age + " value");        // outdated-syntax

// console.log(`Hello my name is ${name} and I'm ${age} years old`)


//In js, if New key word is used: object is used

// const gameName = new String("dikshya")
// console.log(gameName[0])
// console.log(gameName[3])

// console.log(gameName.__proto__);   //output {}
// console.log(gameName.length)      //output-7
// console.log(gameName.charAt(2))  //output-k
// console.log(gameName.indexOf('a')) //output-6



const content = new String("samiksh-ya")
//  console.log(content.toUpperCase())  //SAMIKSH-YA

// const newstring= content.substring(0, 4) //3 character apper 0123 i.e.sami 
console.log(content.substring(0,4))  //3 character apper 0123 i.e.sami
console.log(content.slice(-8,5))        //out-mik



// const newStringOne = "    sambhav   "
// console.log(newStringOne);   // space is seen
// console.log(newStringOne.trim()); // space is not seen

// const url="http://dikshya.com/dikshya%99sharma"
// console.log(url.replace("%99", "-")) 

// console.log(url.includes('dikshya'))   //ask que- output-true
// console.log(url.includes('chocolate'))    //false


//to split based on -   //need separator or limit for splitting
// const anotherstring= new String("dikshya-ds-com")
// console.log(anotherstring.split('-'))
