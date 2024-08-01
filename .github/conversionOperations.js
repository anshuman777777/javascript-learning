// In this file, we are learning the data type conversion in Javascript.

// let score = 33
// We have defined a variable called score and assigned a value 33 to it.
// To check the type of 33, we use:
// console.log(typeof(score))
//  Now let us assume if score variable is given a input as :
// let score = "33abc"

// scoreNew = String(score)
// console.log(typeof score)

// Now if we try to convert it like below:

// scoreNew = Number(score)
// console.log(typeof scoreNew)

// We observe that when we are using Number class to convert 33abc from string to Number, on printing the output we get 
// NaN : Not a Number. Wheras when we try to check the typeof scoreNew, it gives the answer as Number.
// But when we try to check the value of that Number variable, it says NaN.

// We can use same method to convert other datatypes as well.

// let anshumanIsBest = "programmer"
// console.log(typeof anshumanIsBest)

// newValue = Boolean(anshumanIsBest)
// console.log(newValue)

// Remember in case of boolean, 1 is represented as true and 0 is represented as false.

// Hence, if the value is empty, and of Boolean data type, it will give us False.
// If we add any value in it, it will give us True as shown above.

// typeof anshumanIsbest variable is showing as string. But it does not contain any value, hence when converted to Boolean,
// It shows the value as False.

//                                    OPERATIONS                          //

// let a = 5
// let b = 6
// console.log(a + b)
// console.log(a - b)
// console.log(a * b);
// console.log(a / b)
// console.log(b%a)
//  these were basic ops.
// There are other ops also like gameCounter

// gameCounter = 100
// ++gameCounter
// console.log(gameCounter);

// There is also something called operator precedence in JS. Few examples are shown below:

// console.log((3 + 4) * 5);

// Just like in BODMAS, we give the highest precedence to brackets i.e. the perentheses ()
// After perentheses, second priority is given to division, then multiplication then add and lastly subtraction.


// console.log((54 / 2) - 34 + 48) 
// console.log(2 ** 4)
// The ** represent the power of. if it is 2 ** 4, it means 2 to the power 4.

// String to number conversion :
// str1 = "anshuman"
// str2 = " anand"
// console.log(str1 + str2)

// This is basically how you add 2 strings.
str1 = 1
str2 = "2"
str3 = 3
console.log(str1 + str2 + str3)
console.log(str2 + (str3 + str1))
console.log((str1 + str3) + str2)

// Usage of perentheses helps to perform operations more clearly and write a more readable code.


//                                  COMPARISION OF DATATYPES IN JS                       //


// console.log(2 > 3);
// console.log(2 < 3);
// console.log(2 == 3);
// console.log(2 != 3);
// console.log("2" < 3);
// console.log("2" == 2); >= This gives the value as true
// console.log("2" === 2); >= This gives the value as false

// == checks the value only whereas === checks the value as well as datatype before comparing.


