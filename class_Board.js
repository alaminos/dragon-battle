class Board {
    constructor(size)
    {
        this.size = size;

        this.dragons = [];

        this.board = [];
        for (var x = 0; x < size; x++) {
            this.board.push([]);
            for (var y = 0; y < size; y++) {
                this.board[x].push([]);
            }
        }
    }

    drawBoard()
    {
        let objectsFound = [];
        for (var x = 0; x < this.board.length; x++) {
            let line = '';
            for (var y = 0; y < this.board[x].length; y++) {
                if (this.board[x][y].length === 0) {
                    line += ' . ';
                }
                else {
                    line += ' x ';
                    objectsFound.push(this.board[x][y]);
                }
            }
            console.log(line);
        }
        console.log(objectsFound);
    }

    addNewDragon(dragon)
    {
        this.dragons.push(dragon);
    }


    aDragonHasMoved(dragon, x, y)
    {
        //get previous coordenates,
        //update dragon location on board

    }
}


module.exports = Board;
