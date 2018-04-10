class Board {
    constructor(size)
    {
        this.size = size; //this property may be useful for keeping dragon moves within limits

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
        //let objectsFound = [];
        for (var x = 0; x < this.board.length; x++) {
            let line = '';
            for (var y = 0; y < this.board[x].length; y++) {
                if (this.board[x][y].length === 0) {
                    line += ' . ';
                }
                else {
                    line += ' x ';
                    //objectsFound.push(this.board[x][y]);
                }
            }
            console.log(line);
        }
        //console.log(objectsFound);
    }

    addNewDragon(dragon)
    {   
        let row = dragon.locus.x = this.randomPlace();
        let col = dragon.locus.y = this.randomPlace();
        //needs to check if slot is empty, before inserting dragon
        this.board[row][col].push(dragon);
    }

    randomPlace()
    {
        return Math.floor(Math.random() * this.size);
    }


    aDragonHasMoved(dragon, oldRow, oldColumn, newRow, newColumn)
    {
        //remove dragon from previous coordenates
        this.board[oldRow][oldColumn].splice(0,1); //delete 1 elment from index 0 -- But what if two dragons are in that square?
        console.log('Eliminated from row: ' + oldRow + ' and column: ' + oldColumn);

        //update dragon location on board
        this.board[newRow][newColumn].push(dragon); //inserts dragon
        console.log('Inserted in row: ' + newRow + ' and column: ' + newColumn);
    }
}


module.exports = Board;
