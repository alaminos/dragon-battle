class Dragon {
    
    constructor(power, stamina, defense, name, x, y) 
    {
        this.power = power;
        this.stamina = stamina;
        this.defense = defense;
        this.name = name;
        
        this.locus = {
            x : x,
            y : y,
            xmotus : true,
            ymotus : true,
        }
    }

    sayHi() 
    {
        console.log(`Hi my name is ${this.name}`);
    }

    motion()
    {//distintos patrones de movimiento se podrían definir, en este caso, el objeto se mueve en el plano X, 
        if (this.locus.motus) this.locus[x]++;
        else this.locus[x]--;
    }

    motionChange()
    { //changes direction when reaches board limit
        if (this.locus.x == TATAMI_MAX || this.locus.x == TATAMI_MIN) {  
            this.locus = !this.locus;
        }
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
        this.stamina =- x;
    }

}



module.exports = Dragon;