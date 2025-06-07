// Immediately Invoked Function Expresssions (IIFE)

//named iife
(function chilly(){
console.log(`DB CONNECTED`);
})();




//Unnamed iife
(()=> {
    console.log(`DB CONNECTED TWO `);
})();



//parameter passed iife
((name)=> {
    console.log(`DB CONNECTED TWO ${name}`);
})("Dikshya");



//two iife at a time 
    //must rewuire ; in between two to distinguish and execute
 (function chilly(){
console.log(`DB CONNECTED`);
})();


(()=> {
    console.log(`DB CONNECTED TWO `);
})();    