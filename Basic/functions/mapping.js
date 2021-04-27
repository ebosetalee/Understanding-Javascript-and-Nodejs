// Map is used to create an array from existing array or duplicate an array
// or to extract portions of an array or to transform an array to a new array
// this is done by calling a callback function on every element in the array.
// Note: It doesnt mutate the original array

const texts = ["rofl", "lol", "omg", "lmaoo", "ttyl"];
// Convert these texts to caps to another array
const caps = texts.map(function (t) {
    return t.toUpperCase();
});

console.log(caps);

// Another example, here you can return an object
const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

// return an object that has the number and state whether even or not
const even = numbers.map(function (num) {
    return {
        value: num,
        isEven: num % 2 === 0
    };
});
console.log(even);

// Another example:
// using our texts array, I'll capitalize each letter and having a full stop e.g L.O.L
const abb = texts.map(function (word) {
    return word.toUpperCase().split("").join(".");
});
console.log(abb);
