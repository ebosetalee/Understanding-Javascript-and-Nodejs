const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

numbers.forEach(function (num) {
    console.log(num * 3);
});

// or we can do
console.log("");

function logTriple(n) {
    console.log(n * 3);
}

numbers.forEach(logTriple);

// using a more complex object:
const books = [
    {
        title: "Good Omens",
        authors: ["Terry Pratchett", "Neil Gaiman"],
        ratings: 4.25
    },
    {
        title: "Bone: The Complete Edition",
        authors: ["Jeff Smith"],
        ratings: 4.42
    },
    {
        title: "American Gods",
        authors: ["Neil Gaiman"],
        ratings: 4.11
    },
    {
        title: "A Gentleman in Moscow",
        authors: "",
        ratings: 4.36
    }
];

books.forEach(function (book) {
    console.log(book.title.toUpperCase());
});

// The difference betweeb forEach and For of is:
// you can log the index in forEach

books.forEach(function (book, index) {
    console.log(index, book.title.toUpperCase());
});
