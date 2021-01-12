// JS has only one type of number. Numbers can be written with or without decimals
//JS does not define different types of numbers, like integers, short, long, floating-point etc.
// JS numbers are always stored as double precision floating point numbers, following the international IEEE 754 standard.
// This format stores numbers in 64 bits, where the number (the fraction) is stored in bits 0 to 51, 
// the exponent in bits 52 to 62, and the sign in bit 63.

var x = 3.14;    // A number with decimals
var y = 3;  //  A number without decimals.


// Precision: Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
x = 999999999999999;   // x will be 999999999999999
y = 9999999999999999;  // y will be 10000000000000000
console.log(x, y)

// The maximum number of decimals is 17, but floating point arithmetic is not always 100% accurate:
x = 0.2 + 0.1; // x will be 0.30000000000000004
console.log(x)

// Howvever, if you multiply and divide it will be accurate:
x = (0.2 * 10 + 0.1 * 10) / 10;
console.log(x) // will return 0.3


// Note: You can calculate with numbers. The four basic arithmetics adding, subtracting, multiplying and dividing 
// are represented by + - * and /.
let x1 = 6, x2 = 2;
let x3 = x1 + x2, x4 = x1 - x2;
let x5 = x1 * x2, x6 = x1 / x2;
console.log(x3, x4, x5, x6)


// Note that + operator in Js is for addition and concatenation:
// Thus, if you add two strings, it is string concatenation;
// if you add a number and a string or string and number it will concatenate not return error:
x = 10;
y = "20";
console.log(x + y, y + x);
// Also, Js interpreetr works from left to right. Thus:
x = 10;
y = 20;
console.log("The result is: " + x + y);
// This will return 1020 not 30 because 10 is added to the string before 20 except (x+y)
// And:
x = 10;
y = 20;
var z = "30";
console.log(x + y + z); // will return 3030 not 102030

// NOTE: JS tries to convert strings to numbers in all numeric operations:
x = "100";
y = "10";
console.log(x / y); // returns 10
console.log(x * y); // returns 1000
console.log(x - y); // This will return 90
console.log(x + y); // However, this will return 10010

// INCREMENT
// To increase or decrease a count by one. use the increment operator i.e ++ or --
let xa = 3;
xa++;
xa = xa * 2;
xa--;
console.log(xa) // returns 7

// MODULO - reminder - %


// BODMAS 
// In Js the rules of maths apply; multiplication and division will be done 
// before addition and substraction.


// INFINITY
// Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside 
// the largest possible number.

// Division by 0 (zero) also generates Infinity
x = 2 / 0;       // x will be Infinity
y = -2 / 0;       // x will be -Infinity
console.log(x, y);

// Hexadecimal
// JS interprets numeric constants as hexadecimal if they are preceded by 0x.
console.log(0xFF);        // will be 255
// Octal is represnented with 0 at the begining


// Farenheit:
// To calculate Farenheit(f) from celsius(c): F = 1.8 * C + 32


// Math:
// Mathematical functions are built in the Math Object; For example, Math.sqrt(x) 
// returns the square root and Math.pow(x, y) calculates x to the power of y.
let y1 = Math.sqrt(9); // 3
let y2 = Math.pow(10, 3);  // 1000 i.e 10 * 10 * 10 = 1000.
console.log(y1, y2)

// Min and Max is used to find min and maximum in a list
let min = Math.min(5, 7);
let max = Math.max(3, 9, 2);
console.log(min, max)


// Besides functions Math offers some mathematical constants.
// Math.PI gives π (roughly 3.14) and Math.E gives Euler's number e (roughly 2.71).

// Rounding 
// If you want to round a number, you can use the Math.round(), Math.floor() 
// and Math.ceil() functions.
let a = Math.round(5.49);
let b = Math.round(4.5);
let c = Math.floor(5.99);
let d = Math.ceil(4.01);
// Math.round() rounds a number to the nearest integer, Math.floor() rounds a number 
// downwards to the nearest integer and Math.ceil() rounds a number upwards to the 
// nearest integer. Therefore, the variables a to d all get the value 5.
console.log(a, b, c, d)


// Write a function dice that returns like a dice a random number between 1 and 6.
console.log(Math.floor(Math.random()* 7))
console.log(Math.floor(Math.random() * 6) + 1 )
// They both work

let style = parseInt("127+19", 10)
console.log(style)

// parseInt function
// This is used to read a number from a string: 
console.log(parseInt('19 Grad', 10));
// 