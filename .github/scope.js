let a = 300
if(true){
    let a= 10
    const b = 20
    let c = 30
}
// console.log(a);
// console.log(b);
// console.log(c);




// ++++++++++++++++++++ NESTED SCOPE +++++++++++++++++++

// function one(){
    // const username = "Anshuman"

    // function two(){
        // const website = "youtube.com"
        // console.log(username);
    // }
    // console.log(website) >>>> cannot be accessed since it is inside the scope of function two and hence can be accessed inside two's scope only.
    // two()
// }
// two() >>>>> function two() cant be accessed outside of scope of function one(). 
// one()


// if we do not call function one(), function two() also will not be executed.



// Two types of declaring a function::::

// TYPE 1:

addOne(5)
function addOne(num){
    return num + 1
}




// TYPE 2:

// addTwo(5)
const addTwo = function(num){
    return num + 2
}



// THE MAIN DIFFERENCE BETWEEN TYPE 1 DECLARATION AND TYPE 2 DECLARATION OF FUNCTION IS THAT TYPE 2 declaration does not allow 
// to call the function before initialization as shown above. e.g.: addTwo(5) >>>>> gives error in the output.

// whereas TYPE 1 declaration allows to call the function before initialization.





// +++++++++++++++++++++++ THIS IS A CONCEPT IN JS CALLED "HOISTING".


