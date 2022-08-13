/* Method 2 */
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World!");

/* Method 3  */
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
    alert("Hello World!");
})

function alertFunction() {
    alert("YAY! YOU DID IT!");
}

/* Method 2 with function */
const btn3 = document.querySelector("#btn3");
btn3.onclick = alertFunction;

/* Method 3 with function */
const btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", alertFunction);

/* Prints the target button in the console */
btn.addEventListener("click", function (e) {
    console.log(e.target);
});

/* Makes the button blue after clicking */
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});


const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    });
});