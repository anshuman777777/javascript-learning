// HERE WE WILL LEARN TO DECLARE FUNCTIONS, HOW TO CALL THEM, ALSO ABOUT PARAMETERS AND ARGUMENTS OF FUNCTIONS:

// DECLARATION:


// function nameOfFunction(){
    // console.log("This is how we declare and call a function and it returns the value or operation that is meant to be executed");
    
// }

// nameOfFunction()


// AFTER LEARNING HOW TO DECLARE, NOW WE WILL SEE WHAT ARE PARAMETERS / ARGUMENTS IN A FUNCTION:


// function addNumbers(num1, num2){
    // console.log(num1 + num2);
    
// }

// addNumbers(5,9)
// What if we provide a different datatype ??

// addNumbers(2, "g")

// clearly it wont understand the difference until we specify the condition which must be met before executing the operation.


// function addTwoNumbers(number1, number2){
//     let result = number1 + number2
//     return result
// }

// addTwoNumbers(5, 7)

// HERE, KEEP IN MIND THAT console.log IS JUST USED TO PRINT SOMETHING WHEREAS RETURN IS USED TO GIVE US THE OPERATIONAL OUTPUT WHICH WE CAN FURTHER PASS IN AS AN INPUT ORVARIABLE.

// const result = addTwoNumbers(5, 67)
// console.log("Result: ", result);







// LET US UNDERSTAND PARAMETERS A BIT MORE:


// function sayGeeting(username){
//     result = console.log(`${username} just logged in!! Hey ${username}`);
//     return result
// }


// sayGeeting() >>>>>>> if we do not pass a parameter when calling the function, it will say "undefined"


// sayGeeting("Anshuman")





//THERE IS ALSO A CASE WHERE WE CAN DEINE THE PARAMETER DURING DECLARATION OF FUNCTION ITSELF. LATER IF ANOTHER VALUE IS PASSED, THEN NEW VALUE OVERWRITES THE DEFAULT VALUE. 
// function sayGeeting(username = "Anshuman"){
//     result = console.log(`${username} just logged in!! Hey ${username}`);
//     return result
// }

// sayGeeting() >>>> will automatically take username input as default i.e. Anshuman

// sayGeeting("Anand")










// +++++++++++++++++++++++++++++++++++++++  FUNCTIONS WITH OBJECTS AND ARRAY(as parameter) IN IT +++++++++++++++++++++++++++++++++++++++++++++++++


// function shoppingCart(...num1){
//     return num1

// }

// say if we are building a shopping cart or any other type of cart, we dont knw how many items different users will add.
// But we have to write a function that adds up the total value and shows it to the user.

// This is where a REST operator(...) comes in. it puts all the parameters in an array and later we use that array to perform various calculations/operations.

// console.log(shoppingCart(1200, 365, 450, 654, 225));




// passing OBJECTS as parameter in a function


// const user = {
//     name: "Anshuman",
//     place: "Patna"
// }


// const anotherUser = {
//     name: "Shrawan",
//     place: "Delhi"
// }

// when creating a function, we will use "anyobject" in the parameter section of function.
// function functionWithObject(anyobject){
//     console.log(`Username is ${anyobject.name} and place is ${anyobject.place} `);
    
// }
// when calling a function, we will use the actual name of object that we want to pass in as the parameter.
// functionWithObject(anotherUser)
// functionWithObject(user)
// functionWithObject() >>>>> if it is left empty it will produce an error.





// +++++++ NOTE: it is not necessary to pass in the object as specified above, we can also directly create an object inside that fumction's parameter section.


// functionWithObject({
//     name: "Anshuman",
//     place: "Patna"
// })

// Like this as shown above.



// NOW LET US SEE HOW WILL WE PASS AN ARRAY AS PARAMETER IN FUNCTION: iT IS SIMILAR TO OBJECT.


myArray = [1, 2, 3, 9, 8, 7]
function functionWithArray(getArray){
    return getArray[3]
}

console.log(functionWithArray(myArray));