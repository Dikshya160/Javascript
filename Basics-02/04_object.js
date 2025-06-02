//const tinderuser = new object()

const tinderuser ={}
tinderuser.id="404",
tinderuser.name="Dikshya"
tinderuser.isLoggedIn= false

console.log(tinderuser);


const regularuser= {
    email:"someone@gmail.com",
    fullname: {
        userfullname:{
            firstname:"Dikshya",
            lastname:"sharma"
        }
    }
}
//console.log(regularuser.fullname);



// //object combine cases
// const obj1 = {1:"a", 2:"b"}
// const obj2 = {3:"a", 4:"b"}
// const obj4 = {8:"a", 9:"b"}
// //const obj3 = {obj1, obj2}
// //const obj3 = Object.assign({}, obj1, obj2, obj4)
// const obj3 = {...obj1,...obj2,...obj4}
// //console.log(obj3)



// //value from database 
//    //syntax- array of objects
// const users=[
//     {
//         id:1,
//         email:"d@gmail.com"
    
//     },
//       {
//         id:2,
//         email:"s@gmail.com"
    
//     },
// ]
 
// users[1].email
// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
 

// console.log(tinderuser.hasOwnProperty('isLoggedIn'))
// console.log(tinderuser.hasOwnProperty('logout'))


// const course = {
//     coursename:"js in nepali",
//     price:"999",
//     courseInstructor:"Ramesh"
// }

// const{courseInstructor} = course
//  console.log(courseInstructor);

// const{courseInstructor:Instructor} = course
// console.log(Instructor); 



