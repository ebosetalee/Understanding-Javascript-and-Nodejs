// this is how to write a comment
// This is just a random learning. Structured later.

var newVariable = "Volvo";
// Thats a variable named new_variable with a string Volvo passed to it

var x = 5;
var y = 10;
z = x + y;
console.log(z);

var findDate = new Date();
console.log("The year", findDate.getFullYear());
var daylist;
daylist = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
console.log("Today is " + daylist[findDate.getDay()] + "."); // this prints according to the days
// in the week i.e sunday, monday, etc Monday being the first day in the week.

console.log(
    "The hour is " +
        findDate.getHours() +
        " and the minute is " +
        findDate.getMinutes()
);
// Note: I didn't type var for the console to know its a variable. Although you can name a variable
// without using it immediately.

// define a function
function add(a, b) {
    result = a + b;
    console.log(a, " + ", b, " = ", result);
    console.log(`${a} + ${b} = `, result);
    // this is for formatting.
}
add(3, 6);
