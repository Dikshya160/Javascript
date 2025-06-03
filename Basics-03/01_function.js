// function myname(){
//     console.log("D")
//     console.log("i")
//     console.log("k")
//     console.log("s")
//     console.log("h")
//     console.log("y")
//     console.log("a")
// }
//   myname();




//   function addtwonumber(number1 , number2) {
//     // console.log(number1 + number2)

//   }
//     addtwonumber(5, 8)
    




//   function addtwonumber(number1 , number2) {
//     let result = number1 + number2
//    return result;

//   }
//   const result= addtwonumber(5, 8)
//   console.log("Result:", result);





//   function loginUserMessage (username){
//     return `${username} just logged in`
  
//   console.log(loginUserMessage("Dikshya"))



function out(username){
  if(username==undefined){
    console.log("Please enter a username")
    return
  }
  return `${username} is going out for trip`

} 
//console.log(out("Dikshya"))
//console.log(out())


function out(username){
  if(!username){
    console.log("Please enter a username")
    return
  }
  return `${username} is going out for trip`

} 
//console.log(out("Dikshya"))
//console.log(out())





//rest operator use
function calculatecartprice(...num1){
return  num1
}
//console.log(calculatecartprice(200,400,500))




//passing object
const food={
  foodname:"c-momo",
  price :160
}
function handleobject(anyobject){
 console.log(`foodname is ${anyobject.foodname} and price is ${anyobject.price}`)
}
handleobject(food)
//or 


handleobject( {
  foodname:"jhol-momo",
  price :260

} )



//passing Array
const mynewArray= [200,400,600,800]

function returnsecondvalue(getArray) {
  return getArray[1]
}
//console.log(returnsecondvalue(mynewArray));
console.log(returnsecondvalue([200,400,600,800]))