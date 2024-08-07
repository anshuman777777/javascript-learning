
// WE have seen primitive data types, now we will learn about non primitive or reference data types:

// These are: objects, functions and arrays.

// let myFunction = function(){
//     console.log("Hello !!")
// }
// console.log(myFunction);
// console.log(typeof(myFunction));

// const arrFunction = ['3', '4', 'Anshuman']
// console.log(typeof(arrFunction));

// let myObj = {
//     "name": "Anshuman",
//     "Age": 25,

// }
// console.log(myObj);
// console.log(typeof(myObj));

// let id = Symbol(123)
// let anotherId = Symbol(123)

// console.log(id)
// console.log(typeof(id));

// console.log(anotherId)
// console.log(typeof(anotherId));

// let uniqueChar = Symbol('*&^%$#@1345')
// console.log(uniqueChar);

// Symbol data type is immutable and unique and can be used as identifiers for object properties.

// const mySymbol = Symbol('uniqueKey');
// const obj = {
//     [mySymbol]: 'value'
// };
// console.log(obj[mySymbol]); // 'value'
/*
Why We Need Symbols
Avoiding Property Name Collisions:

Symbols ensure that property keys are unique, preventing conflicts that might occur when using strings as property keys, especially in libraries or frameworks where naming collisions can be problematic.
Creating Hidden Properties:

Symbols can be used to create properties that are not accessible via typical object property enumeration methods. This is useful for defining internal properties that should not be exposed or modified.
Enhancing Object APIs:

Symbols can be used to define custom behavior for objects, such as custom iteration protocols (using Symbol.iterator), custom type conversion (using Symbol.toPrimitive), and other meta-programming capabilities.


*/

// Id or something unique can be saved using the data type Symbol.

// The data type of our object, it is OBJECT.>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>            
// When we check type of our function, it is Function.                                                
// When we check type of arrFunction, which is an array, It comes out to be OBJECT.



// All primitive datatypes of javascript are stored in STACK memory whereas all reference datatypes are stored in HEAP memory.

// let myName = "Anshuman" : (Primitive datatype, hence will be stored in stack)
// anotherName = myName  : ()
// anotherName = "Anand"

// What happens is that new value is stored in variable anotherName, but since it is stored in stack memory,
// a reference of variable copy is provided when changing the value. Hence the value of myName remains same but anotherName changes.


// let userOne = {
//     user: "anshuman123",
//     upi: "ansh@ybl"
// }

//  userOne is an object, i.e. a reference data type. Hence value is stored in Heap Memory.
// let userTwo = {
//     user: "anand",
//     upi: "ansh@ybl"
// }

// userTwo.user = "anshuman123"

// console.log(userOne.user);
// console.log(userTwo.user);

// We see the value of user in userTwo changes, the original value is being given as reference in Heap memory.
// Hence, the change is being done in the original value.



