// This is functionn expression
const square = function (num) {
    return num * num;
};
// The function doesn't have a name
// this is because functions are object and we can put them in a variable
// or pass them around as arguments. To cal it you do:
console.log(square(7));

// However, you can name a function thats inside a variable:
const product = function multiply(x, y) {
    return x * y;
};

// You can still call it by calling product but not by calling multiply
console.log(product(5, 9));

// MORE ON FUNCTIONS:
// Since functions are objects, you can put it in an array:
function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

const multiply = function (x, y) {
    return x * y;
};

const divide = function (x, y) {
    return x / y;
};

const operations = [add, subtract, multiply, divide];

// To call the functions inside operations we do:
operations[1]; // returns subtract function

// then to use the functions we pass the parameters after the index:
operations[1](20, 5);
console.log(operations[1](20, 5)); // 15

// The reason for putting functions in an array could be to loop over them:
for (func of operations) {
    console.log(func(30, 5));
}

// you can also put a function in an object:
// i.e assign a function to a property within an object:
const thing = {
    doSomething: multiply
};

// you can return the function:
thing.doSomething;
console.log(thing.doSomething); // returns [Function: multiply]

// you can run the function:
thing.doSomething(); // then add the parameters
console.log(thing.doSomething(50, 2));

// FUNCTIONS THAT OPERATE WITH OTHER FUNCTIONS:
// 1. they accept functions as arguments (callback function)
// 2. they return functions.

// 1.
function callThrice(func) {
    func();
    func();
    func();
}

function scream() {
    console.log("AHHHHH AHHHHHHHHHHH !!!!!!");
}
// With this, you can use scream and also callThrice
callThrice(scream);

// you can write a function to call it N number of times
// or you can write a function to call a function randomly between an array of functions.

// 2.
function multiplyBy(num) {
    return function (x) {
        return x * num;
    };
}

// it simply means
function multiplyByV2(num) {
    const f = function (x) {
        return x * num;
    };
    return f;
}
// so if you call it this way:
const triple = multiplyBy(3);
// this creates a function called triple with an argument X
// then to use x * num
triple(5); // 5 is x
console.log(triple(5));

// can also do:
const halve = multiplyBy(0.5);
console.log(halve(7));

// In this lets create function that returns a boolean, checking if the value falls between two parameters:
function inBetween(x, y) {
    return function (num) {
        return num >= x && num <= y;
    };
}
const isChild = inBetween(1, 18);

console.log(isChild(15)); //true

// CALLBACK FUNCTION:
// It's a function passed into another function as an argument, which is invoked inside the outer function.
//  Most times, callbacks are anonymous(can also be arrow function) as seen below:
callThrice(
    function () {
        console.log("happy");
    } /* if theres a second parameter, add , then it*/
); // an anonymous function i.e no name.
/* e.g
setTimeout(function () {
    alert("Welcome!");
}, 5000);
*/

// HOISTING
// works for var
// functions can be called before they are named or assigned e.g:
howl();
function howl() {
    console.log("AWOOOOOOOO!");
}
// however, it will not work for a function expression