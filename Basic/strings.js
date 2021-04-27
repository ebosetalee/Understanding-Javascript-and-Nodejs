var b = [5, 6, 9, 8, 3, 2];
console.log(b.length);

// .toUpperCase(); .toLowerCase();
var a = "mathHna";
console.log(a.toUpperCase());

console.log(a.toLowerCase());

function toCase(string) {
    var result = string.toLowerCase() + "-" + string.toUpperCase();
    return result;
}
console.log(toCase("shine"));

// How to escape a character, use \
var characts = "It's alright.";
console.log(characts);
characts = 'We are the so-called "Vikings" from the north.';
console.log(characts);
// other uses of backslash is:
// \b	Backspace
// \f	Form Feed
// \n	New Line
// \r	Carriage Return
// \t	Horizontal Tabulator
// \v	Vertical Tabulator

// using index to get a character
//charAt(index)
let char0 = "Frants".charAt(0);
console.log(char0);
// It is also the same as
let char = "Frants";
console.log(char[0]);
// Write a function shortcut that takes two strings and returns the initial letters of theses strings.
function shortcut(string1, string2) {
    return string1[0] + string2.charAt(0);
}
console.log(shortcut("Amnesty", "International"));

// Also, There's charCodeAt() method returns the unicode of the character at a specified index in a string:
// The method returns a UTF-16 code (an integer between 0 and 65535).
char = "HELLO WORLD";
console.log(char.charCodeAt(0)); // returns 72

// trim() method removes whitespaces from both ends of a string.
char = " Rosa Parks ";
console.log(char.trim());

// replace() method replaces a specified value with another value in a string:
var strings = "Please visit Microsoft and Microsoft!";
console.log(strings.replace("Microsoft", "W3Schools"));
// Note that by default, the replace() method replaces only the first match
// Also note that it is case sensitive. Thus, better to use a regular expression as seen below:
// to use regex with an i flag (insensitive):
console.log(strings.replace(/MICROSOFT/i, "W3Schools"));
// Note that Note that regular expressions are written without quotes.
// to use regex for all matches not just first match:
console.log(strings.replace(/Microsoft/g, "W3Schools"));

// The indexOf method also allows you to specify the position from which the search should start.
// This is done with a second parameter.
let n1 = "White Rabbit".indexOf("it", 3);
console.log(n1);

n1 = "White Rabbit".indexOf("it", 1);
console.log(n1);

// The search() method searches a string for a specified value and returns the position of the match.
var stringList = "Please locate where 'locate' occurs!";
console.log(stringList.search("locate"));
// it returns 7, because its the 7th word using space as a word

// Note that the search() and indexOf() methods aren't equal:
// The search() method cannot take a second start position parameter.
// The indexOf() method cannot take powerful search values (regular expressions).

// Extracting String Parts
// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)
// The slice() extracts a part of a string and returns the extracted part in a new string.
// The method takes 2 parameters: the start position, and the end position (end not included),
console.log(stringList.slice(10));

var res = stringList.slice(-12);
console.log(res);

// The substring() is similar to slice().
// The difference is that substring() cannot accept negative indexes
res = stringList.substring(7, 13);
console.log(res);

// substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part
// Also, If the second parameter is not set, all the characters from start position to the
// end of the string are extracted.
let see = "see and stop".substr(0, 3);
let and = "see and stop".substr(4, 3);
let stopp = "see and stop".substr(8);
console.log(see, and, stopp);

// The concat() method joins two or more strings:
var text1 = "Hello";
var text2 = "World";
console.log(text1.concat(" ", text2));

// random
const randomWords = [
    "Shine",
    "bright",
    "like",
    "a",
    "diamond",
    "in",
    "the",
    "sky",
    "fill",
    "the",
    "earth",
    "with",
    "your",
    "beautiful",
    "heart",
    "make",
    "your",
    "happiness",
    "glow",
    "always"
];

let randomSentence = "";
for (let i = 0; i < 10; i++) {
    const random = Math.floor(Math.random() * randomWords.length) + 1;
    randomSentence += randomWords[random] + " ";
}

// regex
let sentence = "abd fhe kdj";
let words = [];
words = sentence.match(/\S+/g); //find words before space.
