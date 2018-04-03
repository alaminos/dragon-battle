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
const myBoard = new BOARD(boardSize);
//---------------


//builds a dragon and print it into console
const myDragon = dragonFactory.construct(dragonName, power, stamina, defense, BOARD);

myBoard.addNewDragon(myDragon);

console.log(myDragon); //monitoring that dragon has been correctly created

myDragon.sayHi();

console.log('Dragon has been added to board.dragons, so it should appear here: ');
console.log(myBoard.dragons)
console.log('now dragon moves');
myDragon.move(1,1);


myBoard.dragons[0].locus.x = myDragon.locus.x;
console.log('This is the content of dragons property of Board: ');
console.log(myBoard.dragons);

/*
all dragons will move a step every period of time T;
steps can be a motion in the x axis, the y axis or both
steps must take into account the extension of the board, that is the dragon cannot end up outside of the board
after each step, it is checked if 2 dragons are in the same square;
if they are, the dragon that has stepped into, will start attacking.*/