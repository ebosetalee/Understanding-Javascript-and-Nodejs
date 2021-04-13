let number = 7;

if (number === 7) {
    console.log("lucky!!!");
} else {
    console.log("BAD!");
}
// Instead we can do
// condition ? expIfTrue : expIfFalse

let num = 2;
num === 7 ? console.log("lucky!!!") : console.log("BAD!");

// Another example:
let status = "offline";

let color;
if (status === "online") {
    console.log((color = "red"));
} else {
    console.log((color = "green"));
}
// instead
let disColor = status === "offline" ? "red" : "green";
console.log(disColor);
