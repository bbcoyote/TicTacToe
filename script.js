const X_CLASS = "X";
const CIRCLE_CLASS = "circle";
let player1;
let player2;
let currentClass;
let circleTurn;
const chooseClass = document.getElementById("class-btns");
const squares = Array.from(document.querySelectorAll("[id^='square']"));
const endGameDiv = document.getElementById("end-game");
const winMessage = document.getElementById("win");
const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset");
const WINNING_ARRAY = [
  [0, 1, 2], //horizontal
  [3, 4, 5], //h
  [6, 7, 8], //h
  [0, 3, 6], //vertical
  [1, 4, 7], //v
  [2, 5, 8], //v
  [0, 4, 8], //diagonal
  [2, 4, 6], //d
];

const Gameboard = (function () {
  const board = ["", "", "", "", "", "", "", "", ""];
  const player = [];

  return { board, player };
})();

function updateBoard() {
  squares.forEach((square, index) => {
    square.classList.remove(X_CLASS, CIRCLE_CLASS);
    if (Gameboard.board[index] === "X") {
      square.classList.add(X_CLASS);
    } else if (Gameboard.board[index] === "O") {
      square.classList.add(CIRCLE_CLASS);
    }
  });
}

function createPlayer(playerName, playerMark) {
  return {
    playerName: playerName,
    playerMark: playerMark,
    getPlayer() {
      return playerName + " " + playerMark;
    },
  };
}

//click event function for each square in UI
function playGame(e) {
  const square = e.target;
  currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
  placeMark(square, currentClass);
  //check for win
  if (checkWin(currentClass)) {
    endGame(false);
    //check for draw
  } else if (isDraw()) {
    endGame(true);
  } else {
    //switch turns
    switchTurn();
  }
}

startBtn.addEventListener("click", startGame);

chooseClass.addEventListener("click", (event) => {
  if (event.target.id === "player-1") {
    //here we will call the createPlayer function, set playerName to
    //player 1 with mark X
    if (!player1) {
      player1 = createPlayer("player 1", "X");

      Gameboard.player.push(player1);
      console.log(Gameboard.player);
      console.log(player1.getPlayer());
    } else {
      alert("Player 1, (X), has already been chosen!");
    }
  } else if (event.target.id === "player-2") {
    //also call the createPlayer function, set playerName to
    //player 2 with mark O
    if (!player2) {
      player2 = createPlayer("Player 2!", "O");
      Gameboard.player.push(player2);
      console.log(Gameboard.player);
      console.log(player2.getPlayer());
    } else {
      alert("Player 2, (O), has already been chosen!");
    }
  }

  currentClass = player1;
  updateBoard();
});

function placeMark(square, currentClass) {
  square.classList.add(currentClass);
}

function startGame() {
  circleTurn = false;
  endGameDiv.hidden = true;
  squares.forEach((square) => {
    square.classList.remove(X_CLASS);
    square.classList.remove(CIRCLE_CLASS);
    square.removeEventListener("click", playGame);
  });
  squares.forEach((square) => {
    square.addEventListener("click", playGame, { once: true });
  });
}

function switchTurn() {
  circleTurn = !circleTurn;
  currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
}

function checkWin(currentClass) {
  return WINNING_ARRAY.some((combination) => {
    return combination.every((index) => {
      return squares[index].classList.contains(currentClass);
    });
  });
}

function endGame(draw) {
  if (draw) {
    winMessage.textContent = `No more moves! Game is a draw`;
    document.getElementById("reset").hidden = false;
    endGameDiv.hidden = false;
  } else {
    winMessage.textContent = `The Winner is ${
      circleTurn ? "O's" : "X's"
    }. Please Play Again 😁`;
    document.getElementById("reset").hidden = false;
    endGameDiv.hidden = false;
  }
}

function isDraw() {
  return [...squares].every((square) => {
    return (
      square.classList.contains(X_CLASS) ||
      square.classList.contains(CIRCLE_CLASS)
    );
  });
}

resetBtn.addEventListener("click", () => {
  startGame();
});

//add event listener to each square and call updateBoard as the event function?
// squares.forEach((square) => {
//   square.addEventListener("click", playGame, { once: true });
// });
/* 
TicTacToe
a game on a 3 by 3 square where 2 players mark X's and O's.
first person with 3 marks in a row horizontally, vertically or diagonally
wins.

how would a computer know when or where to put those marks?
The Assignment says that you're going to store the game board as an array inside
of a object. Your players are also going to be stored in objects and you're probably
going to want an object to control the flow of the game itself.
What does this mean? 


*/
