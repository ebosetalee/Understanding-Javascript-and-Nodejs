// find keys of variables from an object

const err = {}

console.log(Object.keys(err));
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}
