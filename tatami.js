
function boardConstructor(x,y) {
    let board = [];
    for (var xi = 0; xi < x; xi++) {
        board.push([]);
        for (var yi = 0; yi < y; yi++) {
            board[xi].push([]);
        }
    }
    return board;
}


const board = boardConstructor(4,4);

/*-----testing----*/
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

 //prints board showing marked squares when occupied
let printBoard = (function() {
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
}) ();




