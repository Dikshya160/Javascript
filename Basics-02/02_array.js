const hindi_heros =["salman","srk", "Amir"]
const nepali_heros =["Rajesh", "Nikhil", "Akash"]
// hindi_heros.push(nepali_heros)
// console.log(hindi_heros);
// console.log( hindi_heros[3][2]);
//Not a Good syntax btw --push , push existing arrow ma push garxa



//Concat - return new array so requires new name
// const all_heros= hindi_heros.concat(nepali_heros)
// console.log( all_heros)



//spread operator
// const heros = [...hindi_heros, ...nepali_heros]
// console.log(heros)


const arraay =[1,2,3,[4,5,6],7,[6,5,4,[3,2,1,]]]
const new_array= arraay.flat(Infinity)
console.log(new_array)
