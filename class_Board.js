class Board {
    constructor(size)
    {
        this.size = size;
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
        /*this function draws the board after every dragon move, 
        and shows the position of the dragons on the board
        These are represented with an x,
        while empty slots are represented with a dot */
        for (var x = 0; x < this.board.length; x++) {
            let line = '';
            for (var y = 0; y < this.board[x].length; y++) {
                if (this.board[x][y].length === 0) {
                    //if there is nothing in those coordenates, print a dot
                    line += ' . '; 
                }
                else {
                    line += ' x ';
                }
            }
            console.log(line); //the row is printed, and the loop goes on
        }
    }

    addNewDragon(dragon)
    {   
        let row = dragon.locus.x = this.randomPlace();
        let col = dragon.locus.y = this.randomPlace();
        this.board[row][col].push(dragon);
    }

    randomPlace()
    {
        /*chooses random coordenates where to place dragon.
        this func is used for deciding initial position of dragon*/
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
