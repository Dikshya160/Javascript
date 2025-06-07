const user = {
    username: "Dikshya",
    price:999,

    welcomeMessage:function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this) ;
    }
}


// user.welcomeMessage()
// user.username ="DS"
// user.welcomeMessage()


//console.log(this)


// function choco(){
//     let username="Dikxya"
//     console.log(this.username);
// }


//choco()
// const choco = function(){
//     let username = " Deekshya"
//     console.log(this.username);
//}

const choco = () => {
    let username = " Deekshya"
  //  console.log(this.username);
}


//const addTwo = (num1, num2) => {
   // return num1 + num2
//}
//console.log(addTwo(3, 4))




//const addTwo = (num1, num2) =>  num1 + num2
    
//const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  ({username:"Dikshya"})

console.log(addTwo(3, 4)) 


// const myArray =[2,5,3,7,8]
// myArray.forEach()