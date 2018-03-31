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
        }

        this.motus = {
            xmotus : null,
            ymotus : null,
        }
    }

    sayHi() 
    {
        console.log(`Hi my name is ${this.name}`);
    }

    setMotion()
    {
        step = [0, 1, -1];//pasos posibles:
        xmotus = step[1]; //mueve a casilla de valor superior, en la misma columna  
        ymotus = step[2] //mueve a columna de valor inferior
    }

    setNewPostion()
    { 
        this.locus.x += this.xmotus;
        this.locus.y += this.ymotus;
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

    onBoard(x,y)
    {
        board[x][y] = this.name;
    }

}



module.exports = Dragon;