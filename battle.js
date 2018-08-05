const Dragon = require('./class_Dragon');  //maybe no need for this line
const DRAGON_FACTORY = require('./dragon_factory');
const BOARD = require('./class_Board');

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
myDragon.sayHi();

const myDragon2 = dragonFactory.construct(name2, power2, boardSize);
myDragon2.sayHi();

//put dragons into board
myBoard.addNewDragon(myDragon);
myBoard.addNewDragon(myDragon2);

console.log('Dragons has been added to board, so it should appear here: ');
console.log(myBoard.board);
console.log(`Coordenates of Pomoko, y : ${myDragon.locus.y} and x : ${myDragon.locus.x}.`);
console.log(`Coordenates of Yungal, y : ${myDragon2.locus.y} and x : ${myDragon2.locus.x}.`);

console.log('Now dragons move');

setInterval(function() { 
    myDragon.move(myBoard);
    myDragon2.move(myBoard);
    console.log(myBoard.drawBoard()); }, 3000);

