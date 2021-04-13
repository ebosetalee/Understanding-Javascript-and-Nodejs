// For loop
// To run the same code over and over again, each time with a different value.
// Js supports different types of for loops:
// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object

// for (statement 1; statement 2; statement 3) {
// code block to be executed
// }
// Statement 1 is executed (one time) before the execution of the code block.
// This is normally used to initialize the variable used in the loop (i = 0).
// In other words, it is the initial expressioon
// However, it is optional, it can be left blank if the variable is initialized
// before the loop and the statement can initialize more than one variable.

// Statement 2 defines the condition for executing the code block.
// If it returns true, the loop continies, if false, the loop.
// i.e whent to run the loop
// However, it is also optional. If not provided, a break must be provided or
// the loop continues non-stop

// Statement 3 is executed (every time) after the code block has been executed.
// i.e how to change the value each time
// Also optional. It could be increment(i++) or decrement(i--)
let cars = ["BMW", "Volvo", "Mini"];
for (let i = 0, len = cars.length, text = ""; i < len; i++) {
    text += cars[i];
    console.log(text);
}

// or
let i = 0;
for (; i < 5; i++) {
    console.log(i);
}
// For In:
// This loops through the properties or an object(dict, array etc)
let person = { fname: "John", lname: "Doe", age: 25 };

var text = "";
for (x in person) {
    text += person[x];
    console.log(text);
}

// For of: 
// This statement loops through the values of an iterable objects. It lets you loop
// over data structures that are iterable such as Arrays, Strings, Maps, NodeLists, and more.
// The for/of loop has the following syntax:
// for (variable of iterable) {
// code block to be executed
// }
// Note variable - For every iteration the value of the next property is assigned to the variable.
// Variable can be declared with const, let, or var.
// iterable - An object that has iterable properties.
// objects i.e dicts aren't iterable
for (x of cars) {
    console.log(x);
}

const moviesReview = {
    Arrival: 9,
    Alien: 9,
    Amelie: 8,
    "In Bruges": 9,
    Amadeus: 10,
    "Kill Bill": 8
};

for (movie of Object.keys(moviesReview)){
    console.log(movie, moviesReview[movie]);
}
// however, it is better to use for in for this

for (m in moviesReview){
    console.log(m)
}

// While loop
// There are two types of while loop:
// while - loops through a block of code while a specified condition is true.
// while (condition) {
// code block to be executed
// }
// do/while - also loops through a block of code while a specified condition is true.
// This loop will execute the code block once, before checking if the condition is true,
// then it will repeat the loop as long as the condition is true.
// do {
// code block to be executed
// }
// while (condition);
i = 0;
while (i < 10) {
    text += " The number is " + i;
    i++;
    console.log(text);
}
// or
i = 0;
do {
    text += " The number is " + i;
    i++;
} while (i < 10);

// There's while(!gameOver){

//}

// remember this sign ! means not


// break
// To end a loop
// Continue
// To restart the loop while breaking out of the present condition.
const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while(true){
    if (target === guess) break; // 
    console.log(`Target: ${target}, Guess: ${guess}`)
    guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target}, Guess: ${guess}`)
console.log("CONGRATS YOU WIN")

/* Switch
This is used to perform different actions based on different conditions.
Use the switch statement to select one of many code blocks to be executed:

switch(expression) {
    case x:
      // code block
      break;
    case y:
      // code block
      break;
    default:
      // code block
}
The switch expression is evaluated once.
The value of the expression is compared with the values of each case.
If there is a match, the associated block of code is executed.
If there is no match, the default code block is executed. */

// random
const months = ["January", "February", "March", "April", "May", "June", "July"];
const random = Math.floor(Math.random() * months.length);
console.log(random, months[random]);
