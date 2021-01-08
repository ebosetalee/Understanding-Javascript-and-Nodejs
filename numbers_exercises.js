// Write a function add that takes two numbers and returns their sum.
// Example: add(1, 2) should return 3.
function add(a, b){
    return a + b
}
console.log(add(1, 2))


// Write a function onesDigit that takes a natural number and returns the ones digit of that number.
// Example: onesDigit(2674) should return 4. Note: use 10.
function onesDigit(numeral){
    return numeral % 10
}
console.log(onesDigit(2674))


// Write a function mean that takes 2 numbers and returns their mean value.
// Example: mean(1, 2) should return 1.5.
function mean(num1, num2){
    return (num1 + num2) / 2
}
console.log(mean(1, 2))


// Write a function toFahrenheit that converts a temperature from Celsius to Fahrenheit.
// Example: toFahrenheit(0) should return 32.
function toFahrenheit(c){
    var f = (1.8 * c) + 32;
    return f
}
console.log(toFahrenheit(0))


// Write a function hypotenuse that calculates the length of the hypotenuse of a right triangle. 
// The length of the two legs is passed to the function. Tip: In a right triangle the Pythagorean 
// theorem is valid. If a and b are the lengths of the two legs and c is the length of the hypotenuse,
// the following is true: a² + b² = c². Since 3² + 4² = 5² applies, hypotenuse(3, 4) should return 5.
function hypotenuse(l, b){
    var area = Math.pow(l, 2) + Math.pow(b, 2);
    return Math.sqrt(area)
}
console.log(hypotenuse(3,4))