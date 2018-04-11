const Dragon = require('./class_Dragon');

dragonFactory = {
    stamina : 0,
    defense : 0,

    setStamina : function(power) {
        //the more power the less stamina
        this.stamina = 16 - power;
    },

    setDefense : function(power) {
        //big difference between power & stamina will result in low defense, and vice versa
        let difference = Math.abs(power - this.stamina); //difference between power and stamina, absolute value (no negative numbers)
        this.defense = 8 - difference;
    },

    construct : function(name, power, boardSize) {
        this.setStamina(power);
        this.setDefense(power);

        return new Dragon(name, power, this.stamina, this.defense, boardSize);
    }
}


module.exports = dragonFactory;