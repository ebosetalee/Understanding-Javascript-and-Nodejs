// this is how to write a comment
// This is just a random learning. Structured later.

var new_variable = "Volvo";
// Thats a variable named new_variable with a string Volvo passed to it

var x = 5;
var y = 10;
z = x + y;
console.log(z);

var find_date = new Date();
console.log("The year", find_date.getFullYear())
var daylist;
daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
console.log("Today is " + daylist[find_date.getDay()] + ".") // this prints according to the days 
// in the week i.e sunday, monday, etc Monday being the first day in the week.

console.log("The hour is " + find_date.getHours() + " and the minute is " + find_date.getMinutes())
// Note: I didn't type var for the console to know its a variable. Although you can name a variable
// without using it immediately.

// define a function
function add(a, b){
    result = a + b;
    console.log(a, " + ", b, " = ", result)
    console.log(`${a} + ${b} = `, result)
    // this is for formatting.
}
add(3, 6)

