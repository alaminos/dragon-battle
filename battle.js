const Dragon = require('./class_Dragon');
//const mydragons = require('./mydragons');
const DRAGON_FACTORY = require('./dragon_factory');
const TATAMI = require('./tatami');

/*this should be a static method within Dragon class
Object.entries(mydragons).forEach(([i]) => {
    return mydragons[i].sayHi();
});*/

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
const BOARD = boardConstructor(boardSize);
//---------------


//builds a dragon and print it into console
const dragon = dragonFactory.construct(dragonName, power, stamina, defense, BOARD);

console.log(dragon); //monitoring that dragon has been correctly created

console.log('Now dragon.onBoard(): ');
dragon.onBoard(); //place dragon on board

console.log('Now printBoard(BOARD): ');
printBoard(BOARD); //should print board in console, marking square where dragon is placed

dragon.sayHi();

console.log('now dragon moves');
dragon.move(1,1);


console.log('print board again after dragon has moved');
printBoard(BOARD);

/*
all dragons will move a step every period of time T;
steps can be a motion in the x axis, the y axis or both
steps must take into account the extension of the board, that is the dragon cannot end up outside of the board
after each step, it is checked if 2 dragons are in the same square;
if they are, the dragon that has stepped into, will start attacking.*/