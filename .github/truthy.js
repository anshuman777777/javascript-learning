// when we do not need the condition to be true and if there is a value inside the "" string, it is automatically considered TRUE.
// This is called Truthy value.


// userEmail = "abcd@1234.com" 
// if(userEmail){
//     console.log('Got user email');
    
// }else {
//     console.log('No email found');
    
// }

// if userEmail has no string inside "", it is automatically considered false and is called Falsey value

// false, 0, -0, BigInt 0n, "", null, undefined, Nan >>>>> These all are FALSY values.


// userEmail = ""
// if(userEmail){
//     console.log('Got user email');
    
// }else {
//     console.log('No email found');
    
// }


// zero inside a string is a TRUTHY value. 


// userEmail = "0"
// if(userEmail){
//     console.log('Got user email');
    
// }else {
//     console.log('No email found');
    
// }

// false inside a string is a TRUTHY value.
// empty array and empty object i.e. [] and {} are TRUTHY values.

// function(){} is a TRUTHY value .



// userEmail = "false"
// if(userEmail){
//     console.log('Got user email');
    
// }else {
//     console.log('No email found');
    
// }





// EMPTY OBJECT AND EMPTY ARRAYS, HOW TO CHECK WITH THE CONDITION?


//const emptyArray = []
// if(emptyArray.length === 0){
//     console.log('Array is empty');
    
// }


// const empObj = {}
// if(Object.keys(empObj).length === 0){
//     console.log('Object is empty');
    
// }


// NULLISH COALESCING OPERATOR (??) : null undefined


// let val1;
// val1 = 5 ?? 10
// val1 = 20 ?? 4
// val1 = null ?? 15
// val1 = undefined ?? 7
// val1 = 9 ?? undefined
// val1 = undefined ?? null ?? 20
// val1 = null ?? 10 ?? 20
// console.log(val1);



// TERNIARY OPERATOR

// condition ? true : false


const price = 100
price <= 80 ? console.log('Price less than 80') : console.log('Price less than 110');

