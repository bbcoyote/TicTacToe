const chooseClass = document.getElementById("class-btns");
let player1;
let player2;

const Gameboard = (function () {
  const board = ["", "", "", "", "", "", "", "", ""];
  const player = [];

  return { board, player };
})();

function createPlayer(playerName, playerMark) {
  return {
    playerName: playerName,
    playerMark: playerMark,
    getPlayer() {
      return playerName + " " + playerMark;
    },
  };
}

const playGame = (function () {
  // Handle gameplay here.
  // We will set innderText for each cell with X's and O's here.
  // We will also checkFor winner each time we place a mark.
  //
})();

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
});

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
