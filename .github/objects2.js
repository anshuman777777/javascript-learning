// const instaUser = new Object()
// instaUser.details = {
//     name: "User",
//     email: "user123@google.com",
//     anotherObject: {
//         FullName: "User113322",
//         otherDetails: {
//             Sex: "MALE",
//             Age: 23,
//             Employment: "Private",
//             Parents: {
//                 mother: "Mommy",
//                 father: "Daddy"
//             }
//         }
//     }
// }
// console.log(instaUser.details.anotherObject.otherDetails.Parents.father);


// What we see here is that any number of objects can be nested inside an existing object and can be accessed as shown above.


// Just like we merged multiple arrays into a single one, similarly we can merge multiple objects also into a single object.


// const obj1 = {
//     1: "A",
//     2: "B"
// }

// const obj2 = {
//     3: "C",
//     4: "D"
// }


// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);


// {} is not necessary inside the assign function, but it is good practice.
// {} denotes the target where the objects are to be combined and everything else inside assign function other than {} denotes
// the source which is to be located inside the target.


// Other than this, we can use the same SPREAD method as seen in array to perform this:

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// similarly we can add more objects like this:

// const obj4 = {
//     5: "E",
//     6: "F"
// } 

// const obj3 = {...obj1, ...obj2, ...obj4}
// // console.log(obj3);





// We will now see object/objects inside an array and how to access them.

// myarray = [
//     {firstObject,
//         {secondObject,
//             {thirdObject,
//                 {fourthObject,
//                     {fifthObject,
                        
//                     }
//                 }
//             }
//         }
//     }
// ]
// myarray[0].secondObject
// myarray[1].thirdObject
// myarray[2].fourthObject
// myarray[3].fifthObject


// console.log(Object.keys(instaUser));
// console.log(Object.keys(instaUser.details));

// This is a very useful prACTICE because the keys are arranged in an array.
// We can thus perform various operations like applying a loop, conditionals etc on that array to perform various tasks.


// Similar to keys, we can also use "values"
// console.log(Object.values(instaUser));




// DESTRUCTURING OF OBJECT.  >>>>>> Extracting some particular value from an object.

// const course = {
    // name: "Javascript",
    // price: "999",
    // courseInstructor: "Hitesh"
// }

// console.log(course.courseInstructor);
// Now see how destructuring is done.

// This is the syntax>>>>>    const {value you want to extract: name change of the value(if value name is too big )} = object which needs to be destructured.

// const {courseInstructor: instructor} = course
// console.log(instructor);

// compare line 109 and 115, this is the motive of destructuring.

// we wil understand it by taking one more example:


const students = {
    college: "Sir MVIT",
    university: "VTU",
    course: "UGC",
    affiliationBy: "AICTE"

}
console.log(students.affiliationBy);

// SAY WE WANT TO EXTRACT A VALUE, say affiliationBy because it needs to be used again and again.
// Everytime, we can not write students.affiliationBy to get the value, hence what we do is:

const {affiliationBy: aff} = students
console.log(aff);


// comparing lines 129 and 135, we see extracting values is easier after destructuring.
