document.body.onload = (event) => {
    document.getElementById('start').addEventListener('click', startGame);
    console.log("did it");
    document.getElementById('restart').addEventListener('click', restartGame);
};


let turn;

function startGame() {
    setTurn();
    setTableListeners();
    document.getElementById('start').removeEventListener('click', startGame);
}

function restartGame() {
    location.reload();
}

// Add click event listeners to cells
function setTableListeners() {

    const cells = document.getElementsByTagName('td');
    for (let c of cells) {
        c.addEventListener('click', setContent);
        c.addEventListener('click', function () {
            handleMove(c);
        });
        c.addEventListener('mouseover', enter);
        c.addEventListener('mouseout', exit);
    }
}

function handleMove() {
    const cells = document.getElementsByTagName('td');
    const rowCount = 5;
    const colCount = 5;

    // Horizontal check
    for (let i = 0; i < rowCount; i++) {
        for (let j = 0; j <= colCount - 4; j++) {
            if (cells[i * colCount + j].textContent !== '' &&
                cells[i * colCount + j].textContent === cells[i * colCount + j + 1].textContent &&
                cells[i * colCount + j].textContent === cells[i * colCount + j + 2].textContent &&
                cells[i * colCount + j].textContent === cells[i * colCount + j + 3].textContent) {
                alert('Player ' + cells[i * colCount + j].textContent + ' wins horizontally!');
                return true;
            }
        }
    }

    // Vertical check
    for (let i = 0; i <= rowCount - 4; i++) {
        for (let j = 0; j < colCount; j++) {
            if (cells[i * colCount + j].textContent !== '' &&
                cells[i * colCount + j].textContent === cells[(i + 1) * colCount + j].textContent &&
                cells[i * colCount + j].textContent === cells[(i + 2) * colCount + j].textContent &&
                cells[i * colCount + j].textContent === cells[(i + 3) * colCount + j].textContent) {
                alert('Player ' + cells[i * colCount + j].textContent + ' wins vertically!');
                return true;
            }
        }
    }

    // Diagonal check (top-left to bottom-right)
    for (let i = 0; i <= rowCount - 4; i++) {
        for (let j = 0; j <= colCount - 4; j++) {
            if (cells[i * colCount + j].textContent !== '' &&
                cells[i * colCount + j].textContent === cells[(i + 1) * colCount + j + 1].textContent &&
                cells[i * colCount + j].textContent === cells[(i + 2) * colCount + j + 2].textContent &&
                cells[i * colCount + j].textContent === cells[(i + 3) * colCount + j + 3].textContent) {
                alert('Player ' + cells[i * colCount + j].textContent + ' wins diagonally (top-left to bottom-right)!');
                return true;
            }
        }
    }

    // Diagonal check (top-right to bottom-left)
    for (let i = 0; i <= rowCount - 4; i++) {
        for (let j = 3; j < colCount; j++) {
            if (cells[i * colCount + j].textContent !== '' &&
                cells[i * colCount + j].textContent === cells[(i + 1) * colCount + j - 1].textContent &&
                cells[i * colCount + j].textContent === cells[(i + 2) * colCount + j - 2].textContent &&
                cells[i * colCount + j].textContent === cells[(i + 3) * colCount + j - 3].textContent) {
                alert('Player ' + cells[i * colCount + j].textContent + ' wins diagonally (top-right to bottom-left)!');
                return true;
            }
        }
    }

    // If no win is found, return false
    return false;
}

function setColor(node, color) {
    node.style.backgroundColor = color;
}

function setTurn() {
    const x = document.getElementById('x');
    const o = document.getElementById('o');
    if (turn === 'x') {
        turn = 'o';
        setColor(o, 'lightgreen');
        setColor(x, 'lightgrey');
    } else {
        turn = 'x';
        setColor(x, 'lightgreen');
        setColor(o, 'lightgrey');
    }
}

function setContent() {
    this.textContent = turn;
    setTurn();
    this.removeEventListener('click', setContent);
    this.removeEventListener('mouseover', enter);
    this.removeEventListener('mouseout', exit);
    setColor(this, 'lightgrey');
}

function exit() {
    setColor(this, 'lightgrey');
}

function enter() {
    setColor(this, 'lightgreen');
}

// JavaScript code for the game

  // Game variables
  let currentPlayer = 'X';
  let player1Score = 0;
  let player2Score = 0;
  const winningCombinations = [
    // Add your winning combinations for a 5x5 board here
  ];

  // Function to check for a win
  function checkWin() {
    // Implement your win checking logic here
  }

  // Function to update score
  function updateScore(winner) {
    if (winner === 'X') {
      player1Score++;
      document.getElementById('player1-score').textContent = player1Score;
    } else if (winner === 'O') {
      player2Score++;
      document.getElementById('player2-score').textContent = player2Score;
    }
  }

  // Function to handle player moves
  function playerMove() {
    // Implement your player move logic here
  }

  // Function to reset the game
  function resetGame() {
    // Implement your game reset logic here
  }

  // Initialize the game board
  function initGameBoard() {
    // Implement your game board initialization logic here
  }

  // Call the function to initialize the game board
  initGameBoard();