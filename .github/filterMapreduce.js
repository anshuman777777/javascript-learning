// we saw FOR-EACH loop and its usage to extract values.
// .But it does not return the value so that it can be used further:









// FILTER:>>>>>>>>>>>>>>>>>>>>>>







// const coding = ["java", "python", "javascript", "c++"]
// newValue = coding.forEach( (value) => {
    // return value
    
// })
// console.log(newValue); >>> gives output: UNDEFINED.
// TO SOLVE THIS ISSUE, WE USE FILTER method instead of FOR-EACH

// otherApproach = coding.filter( (value) => {
//     return value
// })
// console.log(otherApproach);



// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// newNums = myNums.filter( (num) => (num > 4))
// console.log(newNums);



// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// newValues = myNums.filter( (value) => {
//     return value > 4 

// })
// console.log(newValues)




// const newNums = []
// myNums.filter( (num) => {
//     if(num > 4){
//         newNums.push(num)

//     }
    
// })
// console.log(newNums);


// BOTH THE ABOVE METHODS FILTER AND FOR EACH CAN BE USED TO GET THE VALUES FROM MYNUMS ARRAY.
// ONLY THE SYNTAX AND LOGIC VARIES, OTHERWISE BOTH ARE EFFECTIVE.







// MAP:>>>>>>>>>>>>>>>>>>>>>>>>>..










// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// say we want to add 10 to each of the element in the array.


// const newNums = myNums.map( (num) => num + 10)
// console.log(newNums);



// whenever you open a scope i.e. {}, you must use the return keyword inside it to get the returned value.
// if you do not open a scope, no need to use return keyword.


// const newNums = myNums.map( (num) => {return num + 10})
// console.log(newNums);

// what happens if we do not use return>>>>>
// const newNums = myNums.map( (num) => {num + 10})
// console.log(newNums);

// wil give output "Undefined"





// METHOID OF CHAINING:>>>>>> USING MULTIPLE METHODS TOGETHER


// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNumbers.map( (num) => num * 10).map( (num) => num + 2)

// console.log(newNums);

// const newNums = myNumbers.map( (num) => num * 10).map( (num) => num + 2).filter( (num) => num >= 40)
// console.log(newNums);














// REDUCE    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.

// const nums = [1, 2, 3 ]
// const numTotal = nums.reduce( function(accumulator, currentValue)  {
//     console.log(`${accumulator} is the accumulator value and the current value is ${currentValue}`);
    
//     return accumulator + currentValue;
    

// }, 0)
// console.log(numTotal);




const shoppingCart = [
    {
        courseName: "js course",
        coursePrice: 999
    },
    {
        courseName: "java course",
        coursePrice: 2999
    },
    {
        courseName: "python course",
        coursePrice: 1999
    },
    {
        courseName: "dsa course",
        coursePrice: 3999
    },
    {
        courseName: "data science course",
        coursePrice: 2999
    },
    
]

const totalPrice = shoppingCart.reduce( (accumulator, item) => accumulator + item.coursePrice, 0)
console.log(totalPrice);
