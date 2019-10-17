var LiveForm = require("./LiveForm");
var random = require("./random");

module.exports = class Rain extends LiveForm {
    constructor(x, y) {
        super(x, y);
        this.multiply = 0;
    }
    move() {

        this.die();
        let customX = Math.floor(random(0, matrix.length));
        let customY = Math.floor(random(0, matrix.length));
        let rain = new Rain(customX, customY);
        rainArr.push(rain)
        matrix[customY][customX] = 5;

        for (let i in grassArr) {
            if (grassArr[i].x == customX && grassArr[i].y == customY) {
                grassArr.splice(i, 1)
            }
        }
        for (let i in grassEaterArr) {
            if (grassEaterArr[i].x == customX && grassEaterArr[i].y == customY) {
                grassEaterArr.splice(i, 1)
            }
        }
        for (let i in predatorArr) {
            if (predatorArr[i].x == customX && predatorArr[i].y == customY) {
                predatorArr.splice(i, 1)
            }
        }

    }
    die() {
        matrix[this.y][this.x] = 0;

        for (let i in rainArr) {
            if (rainArr[i].x == this.x && rainArr[i].y == this.y) {
                rainArr.splice(i, 1)
            }
        }
    }
}