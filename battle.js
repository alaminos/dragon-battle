const Dragon = require('./class_Dragon');
//const mydragons = require('./mydragons');
const DRAGON_FACTORY = require('./dragon_factory');
const TATAMI = require('./tatami');

/*this should be a static method within Dragon class
Object.entries(mydragons).forEach(([i]) => {
    return mydragons[i].sayHi();
});*/

/*
el usuario elige el tamaño del tablero

they will all move a step;
after each step, it is checked if 2 dragons are in the same square;
if they are, the dragon that has stepped into, will start attacking.*/

/* -EXAMPLE---------  DATA INPUT BY USER: */
let boardSize = 5
,   dragonName = 'Pomoko'
,   power = 5
,   stamina = 5
,   defense = 5;
//---------------


//builds a board and print it into console
const board = boardConstructor(boardSize);
console.log(board);

//builds a dragon and print it into console
const dragon = dragonFactory.construct(dragonName, power, stamina, defense);

console.log(dragon);