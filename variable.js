// In Javascript, there are 3 ways to assign a variable
// `var`, `const` and `let`. const means that the identifier can’t be reassigned
// `const` is a signal that the identifier won’t be reassigned.
// `let` is a signal that the variable may be reassigned, such as a counter in a loop, or a value swap in an algorithm.
// `var` is now the weakest signal available when you define a variable in JavaScript.
// The variable may or may not be reassigned, and the variable may or may not be used for an entire function.

function assigning() {
    var greeting = "Welcome !";
    return greeting;
}
console.log(assigning());

let x = "Zain";
let y = "Maple";
let z = y;
y = x;
x = z;
console.log(x);

const a = "Anaconda";
const b = "Balloon";

// b = a;
// a = "stranger";
console.log(a, b);
// return a TypeError: Assignment to a constant variable

function hello() {
    return "Hello World!";
}

function greet_a() {
    return "Hello a!";
}
function greet_b() {
    return "Hello b!";
} // note the position of the semi colon.

// to get the length of  string or list type length
console.log(b.length);

// to get index location
var numberList = [3, 7, 9, 10, 23, 8, 4];
console.log(numberList[4]);
console.log(numberList.indexOf(10));

// there is also lastIndexOf: returns the position of the last occurrence of a specified text
var stringList = "Please locate where 'locate' occurs!";
console.log(stringList.lastIndexOf("locate"));
// It returns 21, i.e the start of where "locate" is

// also, where the item to be searched dosen't exist in the text, it returns -1
let n2 = "bit".indexOf("js");
console.log(n2);
// It also returns -1 if the case isn't the same i.e IndexOf is case sensitive
let n3 = "bit".indexOf("IT");
console.log(n3);

// note the = is for assignment, == is to check if a == b;
// strict equal === or !== which expects equality in both type and value.
var beta = 16;
console.log(beta === 23);

var candid = 26;
console.log(candid !== 23);

var alpha = 3;
if (2 < 3) {
    alpha = 5;
}
console.log(alpha + 1);

if (3 < 5) {
    var data = 3;
} else {
    var data = 2;
}
console.log(data + 2);

// this is how to write else if
if (2 > 11) {
    var element = 1;
} else if (7 < 8) {
    var element = 4;
} else {
    var element = 3;
}
// note the brackets for the if statements
console.log(element + 1);

function hi(a, b) {
    return a * b;
}

function hello(a, b) {
    return a + b;
}

console.log(hello(hi(2, 2), 4));

// This confused me at first glance
function rate(a, b) {
    return a * b;
}

function bate(a, b) {
    return rate(a, b + 1);
}

console.log(bate(2, 3));
