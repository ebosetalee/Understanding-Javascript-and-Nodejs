// Write a function firstChar, which returns the first character that is not a space when a string is passed.
function firstChar(string) {
    let result = string.trim();
    return result.charAt(0);
}
console.log(firstChar(" Thomas Kings "));

// Write a function indexOfIgnoreCase taking two strings and determining the first occurrence of the second
// string in the first string. The function should be case insensitive.
function indexOfIgnoreCase(text1, text2) {
    text1 = text1.toLowerCase();
    text2 = text2.toLowerCase();
    var result = text1.indexOf(text2);
    return result;
}

// Write a function secondIndexOf, taking two strings and determining the second occurrence of the
// second string in the first string. If the search string does not occur twice, -1 should be returned.
function secondIndexOf2(string1, string2) {
    return string1.lastIndexOf(string2);
}
// This is wrong if the string2 is bit, it will return 10, instead of -1.
function secondIndexOf(string1, string2) {
    var answer = string1.indexOf(string2);
    if (answer == -1) {
        return answer;
    } else if (answer != -1) newString = string1.slice(answer + 1);
    answer2 = newString.indexOf(string2);
    if (answer2 == -1) {
        return answer2;
    } else {
        return answer2 + answer + 1;
    }
}
console.log(secondIndexOf("White Rabbit", "it"));

// Write a function firstWord, taking a string and returning the first word in that string.
// The first word are all characters up to the first space.
function firstWord(text) {
    var i = 0;
    var firstWord = "";
    while (text[i]) {
        if (text[i] == " ") {
            break;
        } else {
            firstWord += text[i];
        }
        i++;
    }
    return firstWord;
}

console.log(firstWord("see and stop"));

// Write a function normalize, that replaces '-' with '/' in a date string.
// Example: normalize('20-05-2017') should return '20/05/2017'.
function normalize(text) {
    var result = text.replace(/-/g, "/");
    return result;
}
console.log(normalize("20-05-2017"));
