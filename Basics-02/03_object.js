// singleton
 const mysym = Symbol("key1");
//object literals
const jsuser ={
    name: "Dikshya",
    age: 20,
    location: "Butwal",
    email: "dikshya@gmail.com",
    isloggedin: false,
    lastloginDays: ["Monday", "Saturday"],


    //  for string and symbol : we need to access by []
    "full name": "Dikshya sharma",
    [mysym]: "mykey1",

}


console.log(jsuser.name)
console.log(jsuser ["name"])
console.log (jsuser ["full name"])
console.log(jsuser [mysym])
console.log(jsuser.email)


//change data
jsuser.email= "manakamana@gmail.com"
console.log(jsuser.email)
//Object.freeze(jsuser)
console.log(jsuser);


jsuser.greeting = function(){
    console.log("Hello js user");
}
jsuser.greetingtwo =function() {
    console.log(`Hello js user, ${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());