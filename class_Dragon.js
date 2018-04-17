class Dragon {
    
    constructor(name, power, stamina, defense, boardSize) 
    {
        this.power = power;
        this.stamina = stamina;
        this.defense = defense;
        this.name = name;
        this.boardSize = boardSize;
        this.locus = {
            x : undefined, //type: number. The max value of these coordenates will depend on the size of the board
            y : undefined
        }
    }

    sayHi() 
    {
        console.log(`Hi my name is ${this.name}`);
    }

    move(board) //I think this arg is not necessary
    {     
        //current coordenates are stored before changing them, as we will need to pass these values
        let oldX = this.locus.x;
        let oldY = this.locus.y;

        //coordenates are changed
        this.locus.x += this.randomValue(this.locus.x);
        this.locus.y += this.randomValue(this.locus.y);
        console.log('Moving ' + this.name + ' to row : ' + this.locus.x + ' and to column : ' + this.locus.y);
        
        board.aDragonHasMoved(this, oldX, oldY, this.locus.x, this.locus.y);
    }

    randomValue(locusValue)
    {
        //Possible values generated: -1, 0, and +1
        //Before choosing random value, we will establish min and max possible values

        let min = -1; //means: going down a column, or going left in a row
        let max = 1; //means: column upwards, or going right in a row

        if (locusValue === 0) { //if coordenate is 0 (means it is located in board-array index at index 0) it cannot go any lower
            min = 0; //so in this case, minimum value for the randomly generated change is 0
        } else if (locusValue === this.boardSize-1) {   
            //note that if boardSize is 4, indexes of array go from 0 to 3, so higher index is boardSize-1.
            max = 0;
        } else { console.log('No min or max was changed.');}
        
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
        //this.stamina =- x;
        console.log('Ouch, attack received');
    }

    check(board,x,y) //to be tested
    {
        if (board.board[x][y].length > 0) {
            console.log('An enemy has been found in row ' + x + ' and column ' + y + '.');
            //this.attack(board.board[x][y]);
        }
    }

    checkForEnemies(board) //to be tested
    {
        /*
        a func that calls the check(x,y) func passing the different argument permutations:
            sameX, sameY+1
            sameX, sameY-1
            sameX+1, sameY
            sameX-1, sameY
        */
        for (var x = this.locus.x-1; x => this.locus.x+1; x++) {
            if (x === this.locus.x) {
                for (var y = this.locus.y-1; y => this.locus.y+1; y++) {
                    if (y != this.locus.y) {
                        check(board,x,y);
                    }
                }
            }
            check(board,x,this.locus.y);
        }

         /*
        check all adjacent squares in horizontal and vertical plane
        So:
        being x equal to this.locus.x
        and y equal to -1, or +1
        OR being y equal to this.locus.y
        and x equal to -1 or +1.
        Check all permutations.
        */
       

    }
}



module.exports = Dragon;