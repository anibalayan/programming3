var LiveForm = require("./LiveForm");
var random = require("./random.js");

module.exports = class Predator extends LiveForm {
    constructor(x, y) {
        super(x, y);
        this.life = 60;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    } 
    utel() {
        let emptyCells = this.chooseCell(2);///
        let newCell = random(emptyCells);

        if (newCell) {
            predatorHashiv++
            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            for (let i in predatorArr) {
                if (predatorArr[i].x == x && predatorArr[i].y == y) {
                    predatorArr.splice(i, 1)
                }
            }

            this.x = x;
            this.y = y;

        } else {
            this.move()
        }
    }
    move() {
        this.life--;

        let emptyCells = this.chooseCell(0);
        let emptyCells1 = this.chooseCell(1);
        let newCell = random((emptyCells.concat(emptyCells1)));
        

        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];

            // matrixi mej grum em EREQ -> 3
            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            this.y = y;
            this.x = x;
        }
    }
}