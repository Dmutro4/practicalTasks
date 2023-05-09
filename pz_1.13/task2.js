function ChessBoard(width, height) {
    this.width = width;
    this.height = height;
}

ChessBoard.prototype.drawBoard = function() {
    for (let i = this.height; i >= 1; i--) {
        let row = '';
        for (let j = 1; j <= this.width; j++) {
            if ((i + j) % 2 === 0) {
                row += '#';
            } else {
                row += '@';
            }
        }
        console.log(i, row);
    }
    let columnLabels = '';
    for (let i = 1; i <= this.width; i++) {
        columnLabels += ' ' + String.fromCharCode(64 + i);
    }
    console.log(' ', columnLabels);
}
const board1 = new ChessBoard(8, 8);
board1.drawBoard();

const board2 = new ChessBoard(4, 6);
board2.drawBoard();