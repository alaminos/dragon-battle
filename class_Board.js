class Board {
    constructor(size)
    {
        this.size = size;

        let board = [];
        for (var x = 0; x < size; x++) {
            board.push([]);
            for (var y = 0; y < size; y++) {
                board[x].push([]);
            }
        }
        return board;
    }

    drawBoard()
    {
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
    }


    aDragonHasMoved(dragon)
    {
        //erase previous dragon 

    }
}


