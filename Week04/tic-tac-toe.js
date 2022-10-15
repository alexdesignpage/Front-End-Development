const row = document.getElementById('row');
const row1 = document.getElementById('row1');
const row2 = document.getElementById('row2');
const button = document.getElementById('reset');
const player1 = 'X';
const player2 = 'O';
let player = player1;

function addAction(action) {
    action.target.innerHTML = player
    if (player === player1) player = player2; 
    else player = player1;
}

row.addEventListener('click', addAction)
row1.addEventListener('click', addAction)
row2.addEventListener('click', addAction)

function resetButton() {
    for (let i=0; i < row.cells.length; i++) {
        row.cells[i].innerHTML = "";
        row1.cells[i].innerHTML = "";
        row2.cells[i].innerHTML = "";
    }
}

button.addEventListener('click', resetButton);