// It is the same way as writing a function expression but without the
// function keyword. So, if using function expression it goes like

// const square = function (x) {
//     return x * x
// }
//console.log(square(4))

// whereas for arrow its:
const square = (x) => {
    return x * x;
};
console.log(square(4));

// Another example
// const isEven = (num) => {
//     return num % 2 === 0;
// };

// or two parameters
const multiply = (x, y) => {
    return x * y;
};

// MORE RULES:
// 1.  when using arrow function and having just one parameter the () isn't necessary:
const isEven = (num) => {
    return num % 2 === 0;
};
console.log(isEven(8));

// 2. where it requires no parameter, we need the ():
const greeting = () => {
    console.log("Welcome!!!");
};
greeting();

// 3. Implicit return: Here, you don't need to write the return keyword
// This is used when a single expression is being returned. using our square example above:
// const simpSquare = num => (
//     num * num
// )
// however, it'll be rewritten by vscode to:
const simpSquare = (num) => num * num;
console.log(simpSquare(5));
// Just one line: realise the () was added but it isn't necessary
// using isEven example

const isEvened = (num) => num % 2 === 0;
console.log(isEvened(9));

// Another example using map
const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

const double = numbers.map(num => num * 2);
console.log(double);

// Another example:
// here we want to return odd or even
const numero = [1, 2, 3, 4, 5, 6, 7, 8];

const parityList = numero.map(n => {
    if (n % 2 === 0) return "even";
    return "odd";
});
console.log(parityList);

// However, if we intend use one line, it must be one expression 
// i.e implicit return then we use a tenary operator
const parityList1 = numero.map(n => (n % 2 === 0 ? "even" : "odd"));
console.log(parityList1);

// FIND
const movies = [
    "The Fantastic Mr. Fox",
    "Mr. and Mrs. Smith",
    "Mrs. Doubtfire",
    "Mr. Deeds"
];

const movie = movies.find(m => m.includes("Mrs"));
console.log(movie);

// Other Array methods that need callback
// Filter
// Every
// Some
// Sort = arr.sort(compareFunc(a, b))
// reduce:
const grades = [87, 64, 92, 88, 99, 73, 70, 64];

const maxGrade = grades.reduce((max, currvalue) => (Math.max(max, currvalue)));
console.log(maxGrade);

const minGrade = grades.reduce((min, currvalue) => (Math.min(min, currvalue)));
console.log(minGrade);

// with reduce, you can specify an initial value. eg: 1000
const sum = numbers.reduce((sum, currvalue) => (sum + currvalue), 1000);
console.log(sum);

// Using reduce to tally different values in an array using an object: Thus, the
// initial value will be an object {}

const votes = ["y", "n", "y", "n", "n", "y", "n", "y", "y", "y", "y", "y", "n", "absent"];

const results = votes.reduce((tally, val) => {
    if (tally[val]) {
        tally[val]++;
    } else {
        tally[val] = 1;
    }
    return tally;
}, {})
console.log(results);

// we can write the conditonal in a short form
const result = votes.reduce((tally, val) => {
    tally[val] = (tally[val] || 0) + 1;
    return tally;
}, {})
console.log(result);

