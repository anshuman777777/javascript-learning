// we will learn more array specific loops in this section.

// 1 :> for of loop:


// const charArray = ["a", "b", "c", "d"]
// for (const char of charArray) {
//     // console.log(char);
    
    
// }


// const numeric = [2, 3, 4, 5, 6]
// for (const num of numeric) {
//     // console.log(num);
    
    
// }

// const greeting = "Hello World";
// for (const greet of greeting){
//     console.log(greet);
    
// }



// MAPS: >> it is an OBJECT that holds KEY:VALUE pairs and remembers the original INSERTION ORDER of the keys

// const map = new Map()
// map.set('IN', 'INDIA')
// map.set('USA', 'UNITED STATES OF AMERICA')
// map.set('FR', 'FRANCE')
// console.log(map);

// say if we try to insert the same key value pair, it wont accept.
// MAPS are known for its unique value .


// map.set('IN', 'INDIA') 
// console.log(map);

// WE SEE HERE THE KEY VALUE PAIR 'IN', 'INDIA' does not get inserted as the map already holds the same value in it.


// for (const [key, value] of map) {
//     // console.log(key, ':-', value);
    
// }


// let myObj = {
//     py: "python",
//     js: "javascript",
//     cpp: "c++",
//     rb: "ruby",
//     swift: "swift"
// }

// for (const [key] of myObj) {
    // console.log(key);
    
// }

// myObj is not iterable >>> hence the above code will give error.
// we can use for-in loop insted of for-of in the case of OBJECTS.






// >>> 2:> FOR-IN LOOPS:




// for (const key in myObj) {
    // console.log(`${key} is the key for ${myObj[key]}`);
    
        
        
    
// }


// myArr = ["js", "python", "ruby", "goLang", "c++", "java"]
// for (const key in myArr){
    // console.log(key);
    // console.log(key); >>>>>> it prints 0, 1, 2, 3, 4, 5 i.e the index value/key for the given values in array.
    

// }




// for (const key of myArr){
//     console.log(key);


    // console.log(key); >>>>>> directly prints the value
    
// }



// >>>>>THE DIFFERENCE HERE IS THAT WHEN WE ARE USIN for-of LOOP FOR THE ARRAY, IT IS DIRECTLY PRINTING THE VALUE.
// >>>>> WHEREAS THE for-in LOOP IS PRINTING THE KEY i.e. THE INDEX OF THE VALUES IN THE GIVEN ARRAY.




// >>>>>>>> 3:> FOR-EACH LOOP:


const myArr = ["js", "python", "ruby", "goLang", "c++", "java"]
// myArr.forEach( function ( item){
//     console.log(item);
    
// })


// myArr.forEach( (item) => {
//     console.log(item);
    
// } )


// myArr.forEach((value, index, arr) => {
//     console.log(value, index, arr);
    
// })



// OBJECT INSIDE AN ARRAY:

const newArr = [
    {
        langName: "javascript",
        abbreviation: "js"
    },
    {
        langName: "python",
        abbreviation: "py"
    },
    {
        langName: "goLang",
        abbreviation: "go"
    },
    


]
newArr.forEach((item) => {
    // console.log(item);
    console.log(item.langName);
    
    
})

// THIS IS USED TO EXTRACT A VALUE FROM AN OBJECT INSIDE AN ARRAY.