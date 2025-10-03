let button = document.getElementById("nameButton");
let nameInput = document.getElementById("name");
let Hi = document.getElementById("hello");

function sayHi() {
    console.log("hello, " + nameInput.value)
    Hi.textContent = "hello, "+ nameInput.value
}

sayHi();

button.onclick = sayHi;

