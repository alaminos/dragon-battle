class Dragon {
    
    constructor(name, power, stamina, defense) 
    {
        this.power = power;
        this.stamina = stamina;
        this.defense = defense;
        this.name = name;
        
        this.locus = {
            x : 0, //the max value of these coordenates will depend on the size of the board
            y : 0
        }

    }

    sayHi() 
    {
        console.log(`Hi my name is ${this.name}`);
    }

    move(x,y) //temporarily I will pass the parameter when calling this fuction. In future version, the value will be chosen by the function
    {
        let motus = [0, 1, -1]; //these digits represent 3 different choices: go forward (1), backwards (-1), or not moving (0)

        this.locus.x += motus[x];
        this.locus.y += motus[y];
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

    onBoard(board)
    {
        //board[this.locus.x][this.locus.y] = this.name; 
        /*problem is, old position is still drawn on printed board.
        this function should not change the board directly, it should just signal Board what is its new position,
        and the board, will update the map after every new position input.
        */

        board.aDragonHasMoved();
        /*this function signals to the board the new position of the dragon
        a method of the board should make sure that previous position is erased
        Could also be in charge of signaling back to the dragon that the board limit has been reached.*/
    }
}



module.exports = Dragon;