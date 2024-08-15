// for loop:

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);
// }

// for (let i = 1; i < 11; i++){
//     const myNum = i;
//     console.log(myNum);
    
// }

// for(i=11; i > 0; i--){
//     const myNum = i;
//     console.log(myNum);
    
// }

// LOOPING THROUGH AN ARRAY:

// myArray = [1, 3, 4, 5]
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    





// using if-else inside a for loop:





// for (let index = 1; index <= 10; index++) {
//     const element = index;
    
//     if (element == 5){
//         console.log(`number ${5} is printed exclusively`);
        
//     }
//     console.log(element);
    
// }






// NESTED LOOP: LOOP INSIDE A LOOP:





// for(let i = 1; i <= 5; i++){
//     console.log(`This is outer loop number ${i}`);
    
//     for (let j = 1; j <= 5; j++){
//         console.log(`This is inner loop number ${j}`);
//     }
//     // console.log(`${i} is of the outer loop`);
        
// }
    



// BREAK AND CONTINUE:

// for (let i = 1; i <= 10; i++) {
//     if (i == 5){
//         console.log("5 detected");
//         break
        
//     }
//     console.log(i);
    
    
// }

// BREAK stops the execution and the control flow breaks and the loop stops.









for (let i = 1; i <= 10; i++) {
    if (i == 5){
        console.log("5 detected");
        continue
        
    }
    console.log(i);
    
    
}
// CONTINUE keyword let the code execution take place and does not stop the whole execution.