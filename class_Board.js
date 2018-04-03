class Board {
    constructor(size)
    {
        this.size = size;

        this.dragons = []; // here all the participants are collected, 
        //can we have variables that point to objects, and so we can get access to updated object properties, via this variable?

        //but why having a dragons array and a board array where you are going to place the dragons anyway?
        // you can have dragon objects in the board array

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
        //get previous coordenates, and remove dragon from there
        this.board[old_x][old_y] = ''; //??
        //update dragon location on board
        this.board[x][y].push(dragon.name); //this inserts dragon

    }
}


module.exports = Board;
