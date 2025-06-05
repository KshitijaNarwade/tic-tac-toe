console.log("Welcome to Tic Tac Toe Game!");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");

let turn = "X";
let isGameOver = false;

// function to change the turn
const changeTurn = () => {
    return turn === "X" ? "O" : 'X'
}

// function to check for win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach((e) => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            console.log("Logic is okay!")
            document.getElementsByClassName("check-turn")[0].children[0].innerText = boxtext[e[0]].innerText + " Won";
            isGameOver = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '250px';
        }
    })
}


// Game Logic

let boxes = document.getElementsByClassName("box");
// console.log("element with box", boxes[1]);

Array.from(boxes).forEach(element => {
    element.addEventListener("click", () => {
        console.log("Button was clicked");
        if (element.children[0].innerText === '') {
            element.children[0].innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isGameOver) {
                document.getElementsByClassName("check-turn")[0].children[0].innerText = "Turn for " + turn;
            }
        }
    })
});

// Add Onclick listener to reset Button
let reset = document.querySelector('.btn');
reset.addEventListener('click', () => {

    btnTransition();
    let allBoxes = document.querySelectorAll('.boxtext');
    allBoxes.forEach((e) => {
        e.innerText = "";
    })
    turn = 'X';
    isGameOver = false;
    document.getElementsByClassName("check-turn")[0].children[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0';
});

// Button Transition

function btnTransition() {
    let btn = document.querySelector(".btn");
    btn.classList.add('btn-transition');
    setTimeout(() => {
        btn.classList.remove('btn-transition')
    }, 100)
}