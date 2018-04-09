class Dragon {
    
    constructor(name, power, stamina, defense) 
    {
        this.power = power;
        this.stamina = stamina;
        this.defense = defense;
        this.name = name;
        this.boardSize;
        this.locus = {
            x : 0, //the max value of these coordenates will depend on the size of the board
            y : 0
        }
    }

    sayHi() 
    {
        console.log(`Hi my name is ${this.name}`);
    }

    move(board)
    {     
        //current coordenates are saved before changing them
        let oldX = this.locus.x;
        let oldY = this.locus.y;

        //coordenates are changed
        this.locus.x = this.randomValue(this.locus.x);
        this.locus.y = this.randomValue(this.locus.y);
        
        //pass new coordenates to board method
        board.aDragonHasMoved(this, oldX, oldY, this.locus.x, this.locus.y);
    }

    randomValue(locusValue)
    {
        //Before choosing random value, we will establish min a max possible value

        let min = -1; //means: going down a column, or going left in a row
        let max = 1; //means: column upwards, or going right in a row

        if (locusValue == 0) { //if coordenate is 0, it cannot go down/left
            min = 0; //so in this case, minimum value for the randomly generated change is 0
        } else if (locusValue == boardSize) {   //And if it cannot go up/right
            max = 0;}

        return Math.floor(Math.random() * (max - min + 1)) + min;
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

        board.aDragonHasMoved(this, old_x, old_y, this.locus.x, this.locus.y);
        /*this function signals to the board the new position of the dragon
        a method of the board should make sure that previous position is erased
        Could also be in charge of signaling back to the dragon that the board limit has been reached.*/
    }
}



module.exports = Dragon;