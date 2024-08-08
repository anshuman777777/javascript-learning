// const arrayOne = [];>>> This is an array, it is a object data type which can store multiple items like string, number, boolean etc.
// Javascript arrays are resizable.

// const myArray = [0, 1, 3, "anshuman", true];
// console.log(myArray);

// we can also declare array by following way:
// const secondArray = new Array(1,2,3,4,5);
// console.log(secondArray);

// TO ADD VALUES IN ARRAY:

// myArray.push(4)
// console.log(myArray);

// TO REMOVE THE LAST ELEMENT OF AN ARRAY:

// myArray.pop();
// console.log(myArray);
// secondArray.pop();
// console.log(secondArray);




// TO ADD OR REMOVE ELEMENT AT OR FROM STARTING OF ARRAY:

// myArray.shift() >>>>>> used to remove 1st element from Array.

// myArray.unshift(77) >>>>>> used to add an element at 1st position in array

// To check whether an element is present in the given array or not:

// console.log(myArray.includes(25)) >>>>>>> Will give the output as FALSE since the array does not contain the asked value i.e. 25


// TO CHECK THE INDEX OF A GIVEN ELEMENT IN AN ARRAY:

// console.log(myArray.indexOf(true));
// console.log(secondArray.indexOf(111)); >>> will give output as -1 since the given element is not present in secondArray.



// TO JOIN ALL THE ELEMENTS IN AN ARRAY AND CONVERT IT INTO A SINGLE STRING, WE USE JOIN METHOD:

// const joinedArray = secondArray.join()
// console.log(joinedArray);
// console.log(typeof(joinedArray));
// console.log(secondArray);






// SLICE AND SPLICE OPERATOR:









// console.log("A ", secondArray)
// const slicedArray = secondArray.slice(1, 4)
// console.log(slicedArray);
// console.log(secondArray);


// console.log("B ", secondArray);

// const splicedArray = secondArray.splice(1, 4)
// console.log(splicedArray);
// console.log(secondArray);










// >>>>>> WHAT WE SEE HERE IS THAT WHEN WE USE THE SLICE OPERATOR, THE ORIGINAL ARRAY DOES NOT GET AFFECTED.
// >>>>>> AND WHEN USING SLICE(1, 4): then index 1,2,3 are sliced out of original array and 4 is exclusive.



// >>>>>> WHEREAS WHEN WE USE SPLICE, THE ORIGINAL ARRAY GETS CHANGED.
// >>>>>> ALSO WHEN USING SPLICE(1, 4): THEN INDEX 1,2,3 & 4 ARE SPLICED OUT OF ORIGINAL ARRAY, i.e. 4 is inclusive.






// const myArray = new Array(0, 1, 2, 3, 4);
// const newArray = new Array(5, 6, 7, 8, 9);






// joinedArray = myArray.concat(newArray);
// console.log(joinedArray);


// >>>>>> TO JOIN TWO DIFFERENT ARRAYS INTO A SINGLE ARRAY, WE USE concat.

// There is another method called SPREAD, 




// const joinedArray = [...myArray, ...newArray]




// console.log(joinedArray);

// There is a case in which there is array inside another array.  



// const anotherArray = new Array(1, 2, 3,[4, 5, 6], 7, [6, 7, [4, 5]])




// console.log(anotherArray);
// If we want to seperate the values and make it as a single array, we will use FLAT method

// spreadedArray = anotherArray.flat(Infinity);
// console.log(spreadedArray);

// We are using infinity here but the parameter that is provided inside flat(>>here<<) method will be number of depth.
// By depth we mean how many arrays are actually present inside the main array, for e.g. we have 3 arrays inside anotherArray.

// spreadedArray = anotherArray.flat(2);
// console.log(spreadedArray);







// If we want to convert any iterable value into a  array, we use FROM method:


// console.log(Array.from("ANSHUMAN"));
// OR
// console.log(Array.of(98434435)); >>> Array.of is used to make a new array out of given elements.
const score1 = 100;
const score2 = 200;
const score3 = 300;
console.log(Array.of(score1, score2, score3));





// console.log(Array.isArray("ANSHUMAN"));  >>>> isArray is used to check whether the given value is array or not.

