class Dragon {
    
    constructor(power, stamina, speed, name) 
    {
        this.power = power;
        this.stamina = stamina;
        this.defense = defense;
        this.name = name;
    }

    sayHi() 
    {
        console.log(`Hi my name is ${this.name}`);
    }

    attack(enemy)
    {
        //define strength of attack based on power and chance
        console.log(`${this.name} attacks ${enemy.name}!!`);
        enemy.receiveDamage();
    }

    receiveDamage()
    {
        //define damage received based on strength of attack received and defense this.defense
        this.stamina =- 
    }

}



module.exports = Dragon;