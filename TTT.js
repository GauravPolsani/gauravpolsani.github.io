let board = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
];
// current player
let current = 1;
let computerPiece = 2;
let humanPiece = 1;
if (Math.random() < 1/2) {
    current = 2;
    computerPiece = 1;
    humanPiece = 2;
}

let computerMode = true;

function getPlayersymbol() {
    if (current === 1){
        return 'X';
    } else {
        return 'O';
    }
}

function hasWon(board) {
    function check(a, b, c) {
        return board[a] !== 0 && board[a] === board[b] && board[b] === board[c];
    }
    //check all for 3 in a row
    return check(0, 1, 2) || check(3 ,4 ,5) || check(6, 7, 8)
    //columns
        || check(1, 4, 7) || check(0, 3 , 6) || check(2, 5, 8)
    //diagonals
        || check(2, 4, 6) || check(0 ,4 ,8)

}

function isGameOver(){
    if (hasWon(board)){
        return true;
    }
    for (let spot of board) {
        if (spot === 0) {
            return false;
        }
    }
    return true

}

function move(position) {
    // console.log("moved to",position)


    if (board[position] !== 0 || hasWon(board)) {
        return;
    }

    board[position] = current;

    // console.log(board);

    gameElement.children[position].textContent = getPlayersymbol();
    gameElement.children[position].classList.add(getPlayersymbol());

    // console.log(hasWon());

    // next turn
    if (current == 1) {
        current = 2;
    } else {
        current = 1;
    }

    updatePlayer();

    if (computerMode && current === computerPiece && !isGameOver()){
        move(calculateComputerMove());
    }

}

function findWin(piece){
    let position = 0;
    while (position < 9) {
        if (board[position] === 0){
            let newBoard = board.with(position, piece);
            if(hasWon(newBoard)){
                return position;
            }
        }
        position = position + 1;
    }
    return -1;
}

function calculateComputerMove() {
    let position = findWin(computerPiece);
    if (position !== -1){
        return position;
    }

    position = findWin(humanPiece);
    if (position !== -1){
        return position;
    }

    // position = Math.floor(Math.random()* 9);
    // while (board[position] !== 0) {
    //     position = Math.floor(Math.random() * 9);
    // }
    // return position;

    let bestPositions = [
        0, 8, 2, 6,
        4,
        1, 3, 5, 7
    ];

    for (let position of bestPositions){
        if (board[position] === 0){
            return position;
        }
    }

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

let computerCheckbox = document.getElementById("computer");

computerCheckbox.onchange = function(){
    computerMode = computerCheckbox.checked;

}

computerCheckbox.checked = computerMode;