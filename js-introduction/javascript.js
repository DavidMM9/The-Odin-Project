function add7(number) {
    return number + 7;
}
// console.log(add7(-10))

function multiply(number1, number2) {
    return number1 * number2;
}

// console.log(multiply(8, 4))

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// console.log(capitalize("nIcE"))

function lastLetter(string) {
    return string[string.length - 1];
}

// console.log(lastLetter("nice"))



function fizzBuzz() {
    let number = parseInt(prompt("Please enter the number you would like to FizzBuzz to: "));
    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz")
            continue;
        }
        if (i % 3 === 0) {
            console.log("Fizz")
            continue;
        }
        if (i % 5 === 0) {
            console.log("Buzz")
            continue;
        }
        console.log(i)
    }
}

fizzBuzz();