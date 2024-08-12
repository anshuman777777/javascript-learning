// First control flow is:
// if statement:


// if(condition>>>> will always be either true or false.){

// }
// condition should be true for the code inside the scope to be executed.


// const isUserLoggedIn = true
// if(isUserLoggedIn){
//     console.log('User logged in');
    
// }


// if(3 == 2){
//     console.log('True');
    
// }

// we can see if condition is fulfilled then only the code inside the block gets executed.
// if(3 == 2){
//     console.log('True');
    
// }

// In above case, condition is not being fulfilled hence the code iside the block will not get executed.



// const score = 200
// if(score > 100){
//     let power = "fly"
//     console.log(`User power is to ${power}`);
    
// }



// if-else statements:


// const userBalance = 1000
// if(userBalance > 1000){
//     console.log('Greater than 1000');
    
// } else{
//     console.log('Less than 1100');
    
// }



// NESTING( if-else if- else)

// const balance = 1000
// if(balance < 500){
//     console.log('Less than 500');
    
// } else if(balance < 800){
//     console.log('Less than 800');
    
// } else if(balance < 990){
//     console.log('Less than 990');
    
// } else{
//     console.log('Less than 1100');
    
// }





// We know <,>, ==, ===, !=, >=, <= operators. Let us now see if we have to check multiple conditions simultaneously.


// const userLoggedIn = true
// const userCreditCard = true

// if(userCreditCard && userLoggedIn){
//     console.log('User access sucessful');

    
// } else{
//     console.log('User access denied');
    
// }

// Here, && checks both the condition and runs the code inside the scope only when all conditions are true.
// even if one condition is false, it wont run the code in the if scope.


// if(userCreditCard && userLoggedIn && 2===3){
//     console.log('User access sucessful');

    
// } else{
//     console.log('User access denied');
    
// }


// Opposite to && operator, we have or( || ) operator which checks if even one condition is true, it will run the code.


// hasDebitCard = true
// hasCreditCard = false
// logInEmail = true
// logInGoogle = false

// if(hasCreditCard || hasDebitCard){
//     console.log('Proceed to pay');
    
// }
// if(logInEmail || logInGoogle){
//     console.log('User logged in');
    
// }














// SWITCH CASE:

// switch (key) {
//     case value:

//         break;


//     default:
//         break;    
// }

// key >>> VALUE WHICH WE WANT TO CHECK EVERYTIME
// value >>> value with which we are comparing the key to

// const month = 3
// switch (month) {
//     case 1:
//         console.log('january');
        
//         break;
//     case 2:
//         console.log('february');
        
//         break;
//     case 3:
//         console.log('march');
        
//         break;


//     default:
//         console.log('Default case ');
        
//         break;    
// }   


// IF WE HAVE TO CHECK A STRING KEY, THEN WE WILL WRITE case "january":
//                                                         break;








                                                            

