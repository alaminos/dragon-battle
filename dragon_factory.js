const Dragon = require('./class_Dragon');

dragonFactory = {
    name : '', //can be deleted
    power : 0, //can be deleted
    stamina : 0,
    defense : 0,

    setName : function(name) { //can be deleted
        this.name = name;
    },

    setPower : function(power) { //can be deleted
        //value from 1 to 9
        this.power = power;
    },

    setStamina : function(pow) {
        //the more power the less stamina
        this.stamina = 16 - power;
    },

    setDefense : function() {
        //big difference between power & stamina will result in low defense, and vice versa
        let equilibrium = Math.abs(this.power - this.stamina);
        this.defense = 8 - equilibrium;

    },

    construct : function(name, power) {
        this.setStamina(power);
        this.setDefense();

        return new Dragon(name, power, this.power, this.defense);
    }
}


module.exports = dragonFactory;