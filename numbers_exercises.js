// Write a function add that takes two numbers and returns their sum.
// Example: add(1, 2) should return 3.
function addition(a, b){
    return a + b
}
console.log(addition(1, 2))


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


// Write a function midrange, that calculates the midrange of 3 numbers. 
// The midrange is the mean of the smallest and largest number.
// Example: midrange(3, 9, 1) should return (9+1)/2 = 5.
function midrange(a, b, c){
    function mean(num1, num2){
        return (num1 + num2) / 2;
    }
    let mini = Math.min(a, b, c), maxi = Math.max(a, b, c);
    return mean(mini, maxi)
}
console.log(midrange(3, 9, 1))


// Write a function area that calculates the area of a circle. 
// The function is given the radius of the circle.
// Example: area(1) should return π and area(2) should return 4 * π.
// area of a circle is pi r square i.e 3.14 * (r**2)
function area(r){
    return Math.PI * (r **2);
}
console.log(area(2))


// Write a function round100 that rounds a number to the nearest hundred.
// Example: round100(1749) should return 1700 and round100(856.12) should return 900.
function round100(numb){
    let ans = numb / 100;
    return Math.round(ans)* 100
}
console.log(round100(1749));
console.log(round100(856.12));

// Write a function dice that returns like a dice a random number between 1 and 6.
function dice(){
    return Math.floor(Math.random() * 6) + 1;
}

// Write a function add that takes a string with a summation task and returns its result as a number. 
// Two natural numbers should be added. The summation task is a string of the form '102+17'.
// Example: add('102+17') should return 119.
// - Hint
// Determine the first summand with parseInt. Use indexOf to determine the position of the plus sign. 
// Determine with substr the substring after the plus sign. Use parseInt to determine the second summand from this substring.
function addString(words){
    let firstNum = parseInt(words);
    let indexs = words.indexOf("+");
    let secondNum = parseInt(words.substr(indexs));
    return firstNum + secondNum
}
console.log(addString("102+17"))