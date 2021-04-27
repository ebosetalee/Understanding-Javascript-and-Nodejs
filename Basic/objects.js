/**
Objects are collections of properties. like a dictionary or json object
Properties are a key- value pair of information
Rather than accessing data using an index, we use custom keys.
they aren't iterable
*/
// {} is used to create an object.
const data = {
    avgCalorieBurnage: 211.7,
    username : "Bella Naija",
    45 : "Forty five"
}
// to access a  data with key use:
console.log(data.username)
console.log(data[45])// This is better if the key is a number
// Not this console.log(data.45)

// Another object
const moviesReview = {
    Arrival: 9,
    Alien: 9,
    Amelie: 8,
    "In Bruges": 9,
    Amadeus: 10,
    "Kill Bill": 8
};

console.log(Object.keys(moviesReview));
console.log(Object.values(moviesReview));

// In js, theres no way to check equality of values in an array 
// because items in js are stored to a reference number.
// == or === will check equality of reference not equality of contents.