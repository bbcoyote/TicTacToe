const Gameboard = (function () {
  const board = ["", "", "", "", "", "", "", "", ""];

  return { board };
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
