const Dragon = require('./class_Dragon');
//const mydragons = require('./mydragons');
const DRAGON_FACTORY = require('./dragon_factory');
const BOARD = require('./class_Board');

//builds a board and print it into console

/*
user chooses size of board
user creates dragon via form
 -EXAMPLE---------  DATA INPUT BY USER: */
let boardSize = 5
,   dragonName = 'Pomoko'
,   power = 5
,   stamina = 5
,   defense = 5;
//---------------

//builds a board
const myBoard = new BOARD(boardSize);

//builds a dragon and print it into console
const myDragon = dragonFactory.construct(dragonName, power, stamina, defense, BOARD);
console.log(myDragon);
myDragon.sayHi();

//puts dragon into board
myBoard.addNewDragon(myDragon, myDragon.locus.x, myDragon.locus.y);

console.log('Dragon has been added to board.dragons, so it should appear here: ');
console.log(myBoard.board);


console.log('Now dragon moves');
//before it moves, we save its old coordenates
let oldX = myDragon.locus.x;
let oldY = myDragon.locus.y;
//now we can move it
myDragon.move(1,1);

/*after dragon has changed its locus values (let's say it has expressed its will to move), 
these must reflect in actual movement on the board*/
myBoard.aDragonHasMoved(myDragon, oldX, oldY, myDragon.locus.x, myDragon.locus.y);
console.log('Now that the dragon has moved, printing the board again should show dragon in its updated location');
console.log(myBoard.drawBoard());

/*
all dragons will move a step every period of time P;
steps can be a motion in the x axis, the y axis or both
steps must take into account the extension of the board, that is the dragon cannot end up outside of the board
after each step, it is checked if 2 dragons are in the same square;
if they are, the dragon that has stepped into, will start attacking.*/