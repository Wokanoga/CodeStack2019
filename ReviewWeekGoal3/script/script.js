let chessGrid = [
    ["A8", "B8", "C8", "D8", "E8", "F8", "G8", "H8"],
    ["A7", "B7", "C7", "D7", "E7", "F7", "G7", "H7"],
    ["A6", "B6", "C6", "D6", "E6", "F6", "G6", "H6"],
    ["A5", "B5", "C5", "D5", "E5", "F5", "G5", "H5"],
    ["A4", "B4", "C4", "D4", "E4", "F4", "G4", "H4"],
    ["A3", "B3", "C3", "D3", "E3", "F3", "G3", "H3"],
    ["A2", "B2", "C2", "D2", "E2", "F2", "G2", "H2"],
    ["A1", "B1", "C1", "D1", "E1", "F1", "G1", "H1"]
];

let square = {
    index: 'A8',
    threatened: false,
    occupied: 'Empty',
    lightSquare: true,

}

let boardArea = document.getElementById('boardArea');
let color = 'white';
function generateBoard() {
    boardArea.innerHTML = '';
    for (let r = 0; r < chessGrid.length; r++) {
        let div = document.createElement('div');
        for (let c = 0; c < chessGrid[r].length; c++) {
            let button = document.createElement('button');
            button.setAttribute('id', chessGrid[r][c]);
            button.innerText = chessGrid[r][c];
            if (color === 'white' && c === 7) {
                button.setAttribute('class', 'white-square');
            } else if (color === 'white' && c !== 7) {
                button.setAttribute('class', 'white-square');
                color = 'black';
            } else if (color === 'black' && c === 7) {
                button.setAttribute('class', 'black-square');
            } else {
                button.setAttribute('class', 'black-square');
                color = 'white';
            }
            button.addEventListener('click', function () {
                generateBoard();
                bishopSquares(r, c);
            });
            div.appendChild(button);
        }
        boardArea.appendChild(div);
    }
}

function knightSquares(row, column){
    console.log(`${row}, ${column} ${chessGrid[row][column]}`);
    try {
        document.getElementById(chessGrid[row-2][column-1]).className += ' highlight';
    } catch {
        
    }
    try {
        document.getElementById(chessGrid[row-2][column+1]).className += ' highlight';
    } catch {
        
    }
    try {
        document.getElementById(chessGrid[row-1][column+2]).className += ' highlight';
    } catch {
        
    }
    try {
        document.getElementById(chessGrid[row+1][column+2]).className += ' highlight';
    } catch {
        
    }
    try {
        document.getElementById(chessGrid[row+2][column+1]).className += ' highlight';
    } catch {
        
    }
    try {
        document.getElementById(chessGrid[row+2][column-1]).className += ' highlight';
    } catch {
        
    }
    try {
        document.getElementById(chessGrid[row+1][column-2]).className += ' highlight';
    } catch {
        
    }
    try {
        document.getElementById(chessGrid[row-1][column-2]).className += ' highlight';
    } catch {
        
    }
}

function rookSquares(row, column) {
    console.log(`${row}, ${column} ${chessGrid[row][column]}`);
    for (let i = 0; i < 8; i++) {
        document.getElementById(chessGrid[row][i]).className += ' highlight';
        document.getElementById(chessGrid[i][column]).className += ' highlight';
    }
}

function bishopSquares(row, column) {
    console.log(`${row}, ${column} ${chessGrid[row][column]}`);
    for (let i = 0; i < 8; i++) {
        try {
            console.log('try working');
            document.getElementById(chessGrid[row + i][column + i]).className += ' highlight';
        } catch {

        }

        try {
            console.log('try working');
            document.getElementById(chessGrid[row + i][column - i]).className += ' highlight';
        } catch {

        }

        try {
            console.log('try working');
            document.getElementById(chessGrid[row - i][column + i]).className += ' highlight';
        } catch {

        }

        try {
            console.log('try working');
            document.getElementById(chessGrid[row - i][column - i]).className += ' highlight';
        } catch {

        }
    }
}

function kingSquares(row, column) {
    console.log(`${row}, ${column} ${chessGrid[row][column]}`);
    try {
        console.log('try working');
        document.getElementById(chessGrid[row - 1][column]).className += ' highlight';
    } catch {

    }

    try {
        console.log('try working');
        document.getElementById(chessGrid[row - 1][column + 1]).className += ' highlight';
    } catch {

    }

    try {
        console.log('try working');
        document.getElementById(chessGrid[row][column + 1]).className += ' highlight';
    } catch {

    }

    try {
        console.log('try working');
        document.getElementById(chessGrid[row + 1][column + 1]).className += ' highlight';
    } catch {

    }

    try {
        console.log('try working');
        document.getElementById(chessGrid[row + 1][column]).className += ' highlight';
    } catch {

    }

    try {
        console.log('try working');
        document.getElementById(chessGrid[row + 1][column - 1]).className += ' highlight';
    } catch {

    }

    try {
        console.log('try working');
        document.getElementById(chessGrid[row][column - 1]).className += ' highlight';
    } catch {

    }

    try {
        console.log('try working');
        document.getElementById(chessGrid[row - 1][column - 1]).className += ' highlight';
    } catch {

    }
}

function queenSquares(row, column) {
    console.log(`${row}, ${column} ${chessGrid[row][column]}`);
    for (let i = 0; i < 8; i++) {
        document.getElementById(chessGrid[row][i]).className += ' highlight';
        document.getElementById(chessGrid[i][column]).className += ' highlight';
    }
    for (let i = 0; i < 8; i++) {
        try {
            console.log('try working');
            document.getElementById(chessGrid[row + i][column + i]).className += ' highlight';
        } catch {

        }

        try {
            console.log('try working');
            document.getElementById(chessGrid[row + i][column - i]).className += ' highlight';
        } catch {

        }

        try {
            console.log('try working');
            document.getElementById(chessGrid[row - i][column + i]).className += ' highlight';
        } catch {

        }

        try {
            console.log('try working');
            document.getElementById(chessGrid[row - i][column - i]).className += ' highlight';
        } catch {

        }
    }
}


generateBoard();