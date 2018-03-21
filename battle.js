const Dragon = require('./class_Dragon');
const mydragons = require('./mydragons');

//no funciona
/*
for (var el in dragons) {
    console.log(el.stamina);
}*/

/*
for (var i in mydragons) {
    return mydragons[i].sayHi();
}*/

Object.entries(mydragons).forEach(([i]) => {
    return mydragons[i].sayHi();
});

mydragons.Jujulat.attack(mydragons.Gonfq);