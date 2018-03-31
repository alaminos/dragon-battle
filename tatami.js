
boardConstructor = function(size) {
    let board = [];
    for (var x = 0; x < size; x++) {
        board.push([]);
        for (var y = 0; y < size; y++) {
            board[x].push([]);
        }
    }
    return board;
}

 //prints board showing marked squares when they are occupied by a dragon
printBoard = function(board) {
    let objectsFound = [];
    for (var x = 0; x < board.length; x++) {
        let line = '';
        for (var y = 0; y < board[x].length; y++) {
            if (board[x][y].length === 0) {
                line += ' . ';
            }
            else {
                line += ' x ';
                objectsFound.push(board[x][y]);
            }
        }
        console.log(line);
    }
    console.log(objectsFound);
};



module.exports = boardConstructor;
module.exports = printBoard;