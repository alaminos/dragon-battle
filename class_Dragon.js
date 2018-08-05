class Dragon {
    
    constructor(name, power, stamina, defense, boardSize) 
    {
        this.power = power; //number between 1 and 12?
        this.stamina = stamina; //5...16
        this.defense = defense; //1...12
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

    move(board)
    {     
        //current coordenates are stored before changing them, as we will need to pass them to another func
        let oldX = this.locus.x;
        let oldY = this.locus.y;

        //coordenates are changed
        this.locus.x += this.randomValue(this.locus.x);
        this.locus.y += this.randomValue(this.locus.y);
        console.log(`Moving ${this.name} to row : ${this.locus.x} and to column : ${this.locus.y}`);
        
        //to improve: before moving it should check that the square is not already occupied by an enemy
        board.aDragonHasMoved(this, oldX, oldY, this.locus.x, this.locus.y);
        this.checkForEnemies(board);
    }

    randomValue(locusValue)
    {
        /*Possible movements: -1, 0, and +1
        -1 means: going down a column, or going left in a row
        +1 means: column upwards, or going right in a row*/
        //Before choosing random value, we will establish min and max possible values

        let min = -1;
        let max = 1;

        if (locusValue === 0) { //if coordenate is 0 (meaning it is located in board-array at index 0) then it cannot go any lower
            min = 0; //so in this case, minimum value for the randomly generated change is 0
        } else if (locusValue === this.boardSize-1) {   
            //note that if boardSize is 4, indexes of array go from 0 to 3, so the highest index is boardSize-1.
            max = 0;
        }
        
        return Math.floor(Math.random() * (max - min + 1)) + min;
        //returns a random n between min and max
    }

    attack(enemy)
    {   //strength of attack is partly defined randomly, partly defined by power attribute
        let strengthOfAttack = this.power * (Math.random() * (0.9 - 0.1) + 0.1); //value of strength 
        console.log(`${this.name} casts an attack of value ${strengthOfAttack} against ${enemy.name}!!`);
        enemy.receiveDamage(strengthOfAttack);
    }

    receiveDamage(strengthOfAttack)
    {
        let shield = this.defense * 0.3;
        let damage = strengthOfAttack - shield;  //1...12
        if (damage < 1) damage = 1;
        this.stamina -= damage;
        console.log(`Ouch, ${this.name} has received an attack of strength ${strengthOfAttack} suffering a damage of ${damage}. Stamina left is ${this.stamina}.`);
    }

    check(board,x,y)
    {
        if (board.board[x][y].length > 0) { //error cannot read property 'length' of undefined
            console.log('An enemy has been found in row ' + x + ' and column ' + y + '.');
            console.log(`${this.name} says: I have found an enemy in row ${x} and column ${y}.`);
            this.attack(board.board[x][y][0]);
        } /*else {
            console.log('No enemies found in row ' + x + ' and column ' + y + '.');
        }*/
    }

    checkForEnemies(board)
    {
        /*
        Must check all adjacent squares in horizontal and vertical plane
        So:
        being x equal to this.locus.x
        and y equal to -1, or +1
        OR being y equal to this.locus.y
        and x equal to -1 or +1.
        Check all permutations.
        */
        /*
        a func that calls the check(x,y) func passing the different argument permutations:
            sameX, sameY+1
            sameX, sameY-1
            sameX+1, sameY
            sameX-1, sameY
            Values must be 0 or higher
        */
        for (var x = this.locus.x - 1; x <= this.locus.x + 1 && x > -1 && x < board.size; x++) {
            if (x === this.locus.x) { //if same row
                for (var y = this.locus.y-1; y <= this.locus.y + 1 && y > -1 && y < board.size; y++) {
                    if (y !== this.locus.y) { //same row but different col
                        this.check(board, x, y);
                    }
                }
            } else { //different row
                let y = this.locus.y; //same col
                this.check(board, x, y); 
            }
            
        }
    }
}



module.exports = Dragon;