const Dragon = require('./class_Dragon');
const mydragons = require('./mydragons');


//this should be a static method within Dragon class
Object.entries(mydragons).forEach(([i]) => {
    return mydragons[i].sayHi();
});

//  mydragons.Jujulat.attack(mydragons.Gonfq);



/*
they will all move a step;
after each step, it is checked if 2 dragons are in the same square;
if they are, the dragon that has stepped into, will start attacking.