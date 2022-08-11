function add7(number) {
    return number + 7;
}
console.log(add7(-10))

function multiply(number1, number2) {
    return number1 * number2;
}

console.log(multiply(8, 4))

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

console.log(capitalize("nIcE"))

function lastLetter(string) {
    return string[string.length - 1];
}

console.log(lastLetter("nice"))