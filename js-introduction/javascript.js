// let Name = 'John';
// let admin = Name;

// let ourPlanet = 'Earth';
// let currentVisitor = 'John';

// let greetings = `Hello, ${Name}`;
// console.log(greetings)

const button = document.querySelector('button');

function greet() {
    const name = prompt('What is your name?');
    alert(`Hello ${name}, nice to see you!`);
}

button.addEventListener('click', greet);