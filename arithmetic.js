// Boolean Values
// It has only two possible values: true and false
// Boolean operators:
// JavaScript has three Boolean operators: && (and), || (or) and ! (not).
// && links two Boolean values. If both values are true, the result is true.
// In all other cases it is false. With || the result is true, if at least
// one of the two input values is true. If both input values are false, the
// result is false. ! is applied to a single Boolean value and inverts this value:
// !true is false and !false is true.
//
console.log([3] == [3]);

let x1 = true && false;
let x2 = !x1;
let x3 = x1 || x2;
console.log(x1, x2, x3);

/*
Write a function nand that takes two Boolean values. If both values are true, 
the result should be false. In the other cases the return should be true.

I.e.: The call nand(true, true) should return false. The calls nand(true, false), 
nand(false, true) and nand(false, false) should return true.
*/
function nand(bool1, bool2) {
    if (bool1 && bool2 == true) {
        return false;
    } else {
        return true;
    }
}

/*
Write a function nor that takes two Boolean values. If both values are false, 
the result should be true. In the other cases the return should be false.
*/
function nor(bool1, bool2) {
    if (bool1 == true && bool2 == true) {
        return false;
    } else if (bool1 === bool2) {
        return true;
    } else {
        return false;
    }
}
console.log(nor(true, true));
/* 
Write a function xor that takes two Boolean values. If both values are different, 
the result should be true. If both values are the same, the result should be false.
*/

function xor(bool1, bool2) {
    if (bool1 === bool2) {
        return false;
    } else {
        return true;
    }
}

// STRICT EQUALITY
/*
let language = 'JavaScript';
let x = 10;
let c1 = language === 'Java';
let c2 = x === 10;
let c3 = x === '10';
The first comparison results in false, because language does not have the value 'Java'. 
So c1 is false. The second comparison results in true, because the value of x equals 10. 
So c2 is true. In the case of strict equality, it is also important that the two compared 
values have the same data type. c3 is false, because different data types are compared here. 
On the left side of the comparison is a number, on the right side a string.
*/

/* 
Write a function equals that checks two values for strict equality.
Example: equals(1, 1) should return true and equals(1, 2) should return false.
*/
function equals1(val1, val2) {
    return val1 === val2;
}

/* 
Write a function equals that checks 3 values for strict equality. The function should
only return true if all 3 values are equal.
Example: equals(1, 1, 1) should return true and equals(1, 2, 1) should return false.
*/
function equals(val1, val2, val3) {
    return val1 === val2 && val2 === val3;
}

// set
let list = [1, 2, 1, 3, 4, 5, 4, 6, 4];
list = [new Set(list)];
console.log(list);
