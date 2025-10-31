// computer vs user
let results = {
    "rock-rock": "tie",
    "rock-paper": "win",
    "rock-scissors": "loss",
    "paper-paper": "tie",
    "paper-rock": "loss",
    "paper-scissors": "win",
    "scissors-scissors": "tie",
    "scissors-paper": "loss",
    "scissors-rock": "win",
}

function play(choice) {
    let random = Math.random();

    let computer;

    if (random < 1/3) {
        computer = "rock";
    } else if (random < 2/3) {
        computer = "paper"
    } else {
        computer = "scissors"
    }
    console.log("Computer chose",computer);
    console.log("Your chose",choice);

    let result = results[computer + "-" + choice];

    if(result === "tie") {
        console.log("It's a Tie!")
    } else if(result === "loss") {
        console.log("You Lose...")
        cwin = cwin + 1;
    } else {
        console.log("You Win!")
        pwin = pwin + 1;
    }
console.log("Computer Wins:",cwin);
console.log("Player Wins:",pwin);
    
}
let cwin = 0;
let pwin = 0;