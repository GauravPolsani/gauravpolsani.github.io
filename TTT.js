let board = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
];
// current player
let current = 1;
if (Math.random() < 1/2) {
    current = 2;
}


function getPlayersymbol() {
    if (current === 1){
        return 'X';
    } else {
        return 'O';
    }
}

function check(a, b, c) {
    return board[a] !== 0 && board[a] === board[b] && board[b] === board[c];
}

function hasWon() {
    //check all for 3 in a row
    return check(0, 1, 2) || check(3 ,4 ,5) || check(6, 7, 8)
    //columns
        || check(1, 4, 7) || check(0, 3 , 6) || check(2, 5, 8)
    //diagonals
        || check(2, 4, 6) || check(0 ,4 ,8)

}

function move(position) {
    // console.log("moved to",position)


    if (board[position] !== 0 || hasWon()) {
        return;
    }

    board[position] = current;

    // console.log(board);

    gameElement.children[position].textContent = getPlayersymbol();
    gameElement.children[position].classList.add(getPlayersymbol());

    console.log(hasWon());

    // next turn
    if (current == 1) {
        current = 2;
    } else {
        current = 1;
    }

    updatePlayer();

}
let gameElement = document.getElementById("game");

let child = 0;

while (child < gameElement.children.length) {
    gameElement.children[child].id = child;
    gameElement.children[child].onclick = function () {
        move(this.id);
        // console.log("Moved once");
    }
    child += 1;
}

function updatePlayer() {
    let playerElement = document.getElementById("player");
    playerElement.textContent = getPlayersymbol();
}

updatePlayer();