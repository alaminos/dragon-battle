const Dragon = require('./class_Dragon');

dragonFactory = {
    name : '',
    power : 0,
    stamina : 0,
    defense : 0,

    setName : function() {
        //ask user for a name
        this.name = prompt.get('name');
    },

    setPower : function() {
        //value from 1 to 9
    },

    setStamina : function() {
        //max of 12 and min of 12 - this.power
    },

    setDefense : function() {
        //12 - (range between power and stamina)
    },

    construct : function(name, power, stamina, defense, board) {
        return new Dragon(name, power, stamina, defense, board);
    }
}


module.exports = dragonFactory;