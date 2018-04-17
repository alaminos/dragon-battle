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
,   power = 7
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
myBoard.addNewDragon(myDragon);
myBoard.addNewDragon(dragon2);
// initial location of dragon can be chosen by a board static method? or within dragon constructor function?
console.log('Dragons has been added to board, so it should appear here: ');
console.log(myBoard.board);
console.log(`Coordenates of Pomoko, x : ${myDragon.locus.x} and y : ${myDragon.locus.y}.`);
console.log(`Coordenates of Yungal, x : ${dragon2.locus.x} and y : ${dragon2.locus.y}.`);

console.log('Now dragons move');

setInterval(function() { 
    myDragon.move(myBoard);
    dragon2.move(myBoard);
    console.log(myBoard.drawBoard()); }, 3000);


    /*Next changes:
each square can accommodate one and only one dragon
when dragons are introduced into the board, location is either picked randomly
or chosen.
board.addNewDragon will check if square is occupied
In the console, represent each dragon w a differnt symbol so as to distinguish em

/*
steps must take into account the extension of the board, that is the dragon cannot end up outside of the board
after each step, adjecent squares in the horizontal and vertical planes are checked for dragons to fight
if a dragon is found, the finder starts the fight*/