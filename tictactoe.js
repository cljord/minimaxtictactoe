let cells = [];
let currentPlayer = 'X';
let winner = null;

function initializeBoard() {
  const board = document.querySelector('.board');
  board.innerHTML = '';
  cells = [];
  winner = null;

  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.index = i;
    cell.addEventListener('click', handleCellClick);
    cells.push(cell);
    board.appendChild(cell);
  }
}

function handleCellClick(event) {
  if (winner || event.target.textContent) return;
  const index = event.target.dataset.index;
  event.target.textContent = currentPlayer;
  console.log(getFreeCells())
  checkWinner();
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  // if (!winner) makeComputerMove();
}

function makeComputerMove() {

}

function minimax(depth, maximisingPlayer) {

}

function getFreeCells() {
  freeCells = []
  for (let i = 0; i < 9; i++) {
    if (!cells[i].textContent) freeCells.push(i);
  }
  return freeCells;
}

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
      cells[a].style.color = 'red';
      cells[b].style.color = 'red';
      cells[c].style.color = 'red';
      winner = cells[a].textContent;
      alert(`Player ${winner} wins!`);
      break;
    }
  }
}

document.getElementById('reload-button').addEventListener('click', initializeBoard);

initializeBoard();