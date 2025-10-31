// let button = document.getElementById("nameButton");
// let nameInput = document.getElementById("name");
// let Hi = document.getElementById("hello");

// function sayHi() {
//     console.log("hello, " + nameInput.value)
//     Hi.textContent = "hello, "+ nameInput.value
// }

// sayHi();

// button.onclick = sayHi;

let x = 14;

let past = [x];

console.log ("x is equal to "+ x);

function twentyone() {
    x = x + 21;
    past.push(x);
    console.log (past)
    console.log ("x is now equal to ", x);
    if (x > 400) {
        let times = 0
        while (times < 3) {
            console.log ("x is big!");
            times = times + 1
        }
        
    }
}