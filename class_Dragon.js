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

    location = [x, y]

    currentMotion = true //value goes up
    
    motion()
    {//distintos patrones de movimiento se podrían definir, en este caso, el objeto se mueve en el plano X, 
        //hacia la derecha hasta llegar al limite y luego a la izquierda
        if (this.currentMotion) this.location[x]++;
        else this.location[x]--;
    }

    motionChange()
    {
        if (this.location[x] == TATAMI_MAX || this.location[x] == TATAMI_MIN) {  
            this.currentMotion = !this.currentMotion;
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