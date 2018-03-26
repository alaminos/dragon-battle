


const BOARD3 = [
    [ [], [], [] , [] ],
    [ [], [], ['ñu'], [] ],
    [ [], [], [], [] ],
    [ [], [], [], [] ],
    
]

let printBoard = (function() {
    for (var x = 0; x < BOARD3.length; x++) {
        let line = '';
        for (var y = 0; y < BOARD3[x].length; y++) {
            if (BOARD3[x][y].length === 0) {
                line += ' . ';
            }
            else line += ' x ';
        }
        console.log(line);
    }
}) ();



