// An array can be made using [] or new Array()
let arr = new Array();
console.log(arr);

/* 
ARRAY METHODS
Push - add to end
Pop - remove from end 
Shift - remove from start 
Unshift - add to start
concat - merge arrays
includes - look for a value 
indexOf - just like str.indexOf 
join - creates a string from arr 
reverse - reverses an array! 
slice - copy portion of an arr 
splice - remove/replace elements 
sort - sorts an array
*/

let shopping = ["Milk", "Cheese", "Butter"];

shopping[shopping.length] = "Salt";
console.log(shopping);

// Instead use the built-in method
shopping.push("Curry");
console.log(shopping); // added to the end and returns the length of the array.
console.log(shopping.push(true));

// pop remove a value from the end and it returns the value to you.
console.log(shopping.pop());
// Note that the return value is important.

// UNSHIFT:
// It adds to start(almost like push) and returns the new length of the array
console.log(shopping.unshift("Basket"));
console.log(shopping);

// SHIFT
// Just like pop it removes and returns the removed item. However, from the start.
console.log(shopping.shift());
console.log(shopping);

// Note: you can push and unshift multiple items but it adds those multiple item as a chunck
// in the exact order regardless of position
// the order in push is different from unshift.

// CONCAT
// Used to merge 2 or more arrays.
let listOne = ["a", "b", "c"];
let listTwo = ["d", "e", "f"];
console.log(listOne.concat(listTwo));

// INCLUDES
// returns true of false
const ingredients = ["Milk", "Cheese", "Butter", "flour", "eggs", "sugar"];
console.log(ingredients.includes("fish"));
console.log(ingredients.includes("butter")); // returns false because it is case sensitive
console.log(ingredients.includes("Butter"));
// there is something fromIndex: it is a way to specify where the search will start from
console.log(ingredients.includes("Milk", 2)); // returns false but if i do this
console.log(ingredients.includes("Milk")); // returns true

// INDEXOF
// returns the position in the array or string as seen below
let n1 = "White Rabbit".indexOf("it", 3);
// The second parameter states the start position.
console.log(n1);
console.log(ingredients.indexOf("butter")); // returns -1 if it doesn't exist

// REVERSE
// Reverses an array in place. i.e It doesn't make a copy, it mutates the original array
let letters = ["T", "C", "E", "P", "S", "E", "R"];
console.log(letters.reverse());

// JOIN
// It takes an array and returns a string i.e concatenating all the elements to a
// single string.
console.log(letters.join()); // returns R,E,S,P,E,C,T //the default seperator remains
// However, to remove that
console.log(letters.join("")); // returns RESPECT

// SLICE
// Creates a substring out of the original but doesn't change the original
let animals = ["salmon", "shark", "whale", "bear", "lizard", "tortoise"];

let swimmers = animals.slice(0, 3); // note that the third index value isnt added.
console.log(swimmers);

let reptiles = animals.slice(4); // or
// let reptiles = animals.slice(4, 6) // No error because 6 isnts included.
// slice() makes a copy.
// check strings for more info.

// SPLICE
// Add to or remove from an array, an item.
// .splice(position to add/delete, item to delete, what to add)
// it returns an array of items deleted. It returns empty array if nothing is deleted.
animals.splice(1, 0, "octopus");
console.log(animals);

// it can also be used to replace
console.log(animals.splice(2, 1, "fish"));
console.log(animals);

// SORT
// mutates the array to an arranged version.
console.log(animals.sort()); // returns the sorted array

// It gets tricky if it an array of numbers
let nums = [10, 34, 22, 10000, 67, 99];
console.log(nums.sort());
// It doesnt sort based on n umeric value but converts the values to strings and then
// compares their character (UTF-16) codes.
// Thus, its not a numeric sort.

// NOTE REFEREENCE TYPES!!!
