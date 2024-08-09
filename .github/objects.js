// OBJECTS CAN BE DECLARED IN TWO FOLLOWING WAYS:
// 1. as literals >>> when declared by this method, OBJECT HAS MULTIPLE INSTANCES.
// 2. as constructor >>> OBJECT IS CREATED AS SINGLETON i.e. IT DOES NOT HAVE MULTIPLE INSTANCES.

// In this file, we will learn about declaring objects as literals. In object2.js, we will see constructor(singleton) declaration.


const mySym = Symbol("key1")
const firstObject = {
    name: "Anshuman",
    email:"ansh1212@google.com",
    [mySym]: "myKey1",
    age: 21,
    "full name": "Anshuman Anand"
};

// console.log(firstObject["full name"]);
// console.log(firstObject.age);
// console.log(firstObject.name);
// console.log(firstObject["email"]);
// console.log(firstObject[mySym]);
// console.log(firstObject);

// >>>TO FREEZE AN OBJECT, i.e. YOU DONT WANT TO ADD MORE KEY:VALUE PAIR TO YOUR OBJECT:

// Object.freeze(firstObject)

// TO ADD A FUNCTION IN AN OBJECT:

firstObject.greeting = function(){
    console.log("Hello Anshuman");
}




firstObject.secondGreeting = function(){
    console.log(`Hello user, you go by the name ${this.name}`);
    
}

// >>>> "this" is a keyword which is used to give reference to that particular object whose property we are trying to access. 

console.log(firstObject.greeting());


console.log(firstObject.secondGreeting());

// >>>> why are we getting undefined as output?? We will come here again to inspect.


// we can use directly firstObject.greeting() and firstObject.secondGreeting()  instead of putting it in console.log()

