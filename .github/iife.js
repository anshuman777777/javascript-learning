// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE):

// >>>>>>>>>>>>>>>> FUNCTION WHICH CAN BE EXECUTED/INVOKED IMMEDIATELY.
// >>>>>>>>>>> TO PREVENT POLLUTION FROM GLOBAL SCOPE VARIABLES OR DECLARATIONS, WE USE IIFE.

// ALL WE HAVE TO DO IS TO WRAP THAT FUNCTION INSIDE ().

// BELOW IS AN EXAMPLE OF NAMED IIFE(since it has a name "iifeUse")
(function iifeUse(){
    console.log(`DB CONNECTED`);
    

})(); 

// We can also write it as ARROW function.

( () => {
    console.log(`DB CONNECTED`);
    
})();
// how will we pass a parameter in iife is shown below:
( (name) => {
    console.log(`DB CONNECTED ${name}`);
    

})('Anshuman')


