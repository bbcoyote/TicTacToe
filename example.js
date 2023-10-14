// Gameboard module
const Gameboard = (() => {
  // Define your game board array and rendering function
  const board = ["", "", "", "", "", "", "", "", ""];

  //select the html cells once not on every render call
  const cell = document.querySelectorAll("[id^='cell']");

  const render = () => {
    // Update the HTML to display the current state of the board
    for (let i = 0; i < cell.length; i++) {
      cell[i].textContent = board[i];
    }
  };

  return { render };
})();

// Player module
const Player = (name, marker) => {
  // Player properties and methods
  const makeMove = (position) => {
    // Logic to add the player's marker to the board
  };

  return { makeMove };
};

// Game module
const Game = (() => {
  // Event listeners to capture player clicks
  // Game flow logic (checking for a win, tie, switching players, etc.)
})();
