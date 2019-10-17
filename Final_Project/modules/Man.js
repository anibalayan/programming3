
var LiveForm = require("./LiveForm");
var random = require("./random.js");

module.exports = class Man extends LiveForm {
    constructor(x, y) {
        super(x, y);
        this.life = 60;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 3, this.y - 3],
            [this.x, this.y - 3],
            [this.x + 3, this.y - 3],
            [this.x - 3, this.y],
            [this.x + 3, this.y],
            [this.x - 3, this.y + 3],
            [this.x, this.y + 3],
            [this.x + 3, this.y + 3]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }
    mul() {
        let emptyCells = this.chooseCell(1);
        let newCell = random(emptyCells);

        if (newCell) {
            manHashiv++
            let x = newCell[0];
            let y = newCell[1];

            // matrixi mej grum em CHORS -> 4
            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;


            let man = new Man(x, y);
            manArr.push(man);


            this.life = 0;
        }
    }
    spanume() {
        let emptyCells = this.chooseCell(4);///
        let newCell = random(emptyCells);

        if (newCell) {
            this.life++;
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;
            for (let i in manArr) {
                if (manArr[i].x == x && manArr[i].y == y) {
                    manArr.splice(i, 1)
                }
            }
            this.x = x;
            this.y = y;
            if (this.life >= 64) {
                this.mul();
            }
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

            // matrixi mej grum em CHORS -> 4
            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            this.y = y;
            this.x = x;
        }
        if (this.life < 0) {
            this.die();
        }
    }
    die() {
        matrix[this.y][this.x] = 0;

        for (let i in manArr) {
            if (manArr[i].x == this.x && manArr[i].y == this.y) {
                manArr.splice(i, 1)
            }
        }
    }
}