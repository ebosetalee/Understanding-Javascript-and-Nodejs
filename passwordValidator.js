// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - not contain spaces
//  - not contain the username
// If all requirements are met, return true.
// Otherwise: false

// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false

function isValidPassword(password, username) {
    if (password.length < 8 || password.search(username) != -1) {
        return false;
    } else if (password.search(" ") != -1) {
        return false;
    }
    return true;
}
/* Another way to write this is:
function isValidPassword(password, username) {
    const tooShort = password.length < 8;
    const hasSpace = password.search(" ") !== -1;
    const hasUsername = password.search(username) != -1;
    if (tooshort || hasSpace || hasUsername) return false;
    return true;
}

or we can do
function isValidPassword(password, username) {
    const tooShort = password.length < 8;
    const hasSpace = password.search(" ") !== -1;
    const hasUsername = password.search(username) != -1;
    return !tooshort && !hasSpace && !hasUsername;
}
*/

console.log(isValidPassword("89Fjj1nms", "dogLuvr"));
console.log(isValidPassword("dogLuvr123!", "dogLuvr"));
console.log(isValidPassword("hello1", "dogLuvr"));
