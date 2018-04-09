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
,   name = 'Pomoko'
,   power = 5
//---And a second dragon:
,   name2 = 'Yungal'
,   power2 = 4;

//build a board
const myBoard = new BOARD(boardSize);

//construct dragons
const myDragon = dragonFactory.construct(name, power, boardSize);
console.log(myDragon);
myDragon.sayHi();

const dragon2 = dragonFactory.construct(name2, power2, boardSize);
console.log(dragon2);
dragon2.sayHi();

//put dragons into board
myBoard.addNewDragon(myDragon, myDragon.locus.x, myDragon.locus.y);
myBoard.addNewDragon(dragon2, dragon2.locus.x, dragon2.locus.y);
// initial location of dragon can be chosen by a board static method? or within dragon constructor function?
console.log('Dragons has been added to board, so it should appear here: ');
console.log(myBoard.board);


console.log('Now dragons move');
//before it moves, we save its old coordenates

//now we can move it
setInterval(function() { 
    myDragon.move(myBoard);
    dragon2.move(myBoard);
    console.log(myBoard.drawBoard()); }, 3000);




/*
all dragons will move a step every period of time P;
steps can be a motion in the x axis, the y axis or both
steps must take into account the extension of the board, that is the dragon cannot end up outside of the board
after each step, it is checked if 2 dragons are in the same square;
if they are, the dragon that has stepped into, will start attacking.*/