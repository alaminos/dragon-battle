
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

/*-----testing object----
myobj = {
    name : 'Pep',
    position : {
        x : 0,
        y : 0,
    },
    onBoard() {
        board[this.position.x][this.position.y] = this.name;
    }
}

myobj.onBoard();
/*---------------*/

 //prints board showing marked squares when they are occupied by a dragon
printBoardinConsole = function(board) {
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