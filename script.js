let matrix = [];
let side = 10;
let grassArr = [];
let grassEaterArr = [];
let predatorArr = [];
let manArr = [];
let rainArr = [];

function setup() {
    matrixGenerator(50, 50, 5, 5, 5, 10);
    frameRate(16);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let grass = new Grass(x, y);
                grassArr.push(grass);
            }
            if (matrix[y][x] == 2) {
                let grassEater = new GrassEater(x, y);
                grassEaterArr.push(grassEater);
            }
            if (matrix[y][x] == 3) {
                let predator = new Predator(x, y);
                predatorArr.push(predator)
            }
            if (matrix[y][x] == 4) {
                let man = new Man(x, y);
                manArr.push(man)
            }
            if (matrix[y][x] == 5) {
                let rain = new Rain(x, y);
                rainArr.push(rain)
            }
        }
    }
}
function matrixGenerator(matrixSize, grass, grassEater, predator, man, rain) {
    for (let i = 0; i < matrixSize; i++) {
        matrix[i] = [];
        for (let o = 0; o < matrixSize; o++) {
            matrix[i][o] = 0;
        }
    }
    for (let i = 0; i < grass; i++) {
        let customX = Math.floor(random(0, matrixSize));
        let customY = Math.floor(random(0, matrixSize));
        matrix[customY][customX] = 1;
    }
    for (let i = 0; i < grassEater; i++) {
        let customX = Math.floor(random(0, matrixSize));
        let customY = Math.floor(random(0, matrixSize));
        matrix[customY][customX] = 2;
    }
    for (let i = 0; i < predator; i++) {
        let customX = Math.floor(random(0, matrixSize));
        let customY = Math.floor(random(0, matrixSize));
        matrix[customY][customX] = 3;
    }
    for (let i = 0; i < man; i++) {
        let customX = Math.floor(random(0, matrixSize));
        let customY = Math.floor(random(0, matrixSize));
        matrix[customY][customX] = 4;
    }
    for (let i = 0; i < rain; i++) {
        let customX = Math.floor(random(0, matrixSize));
        let customY = Math.floor(random(0, matrixSize));
        matrix[customY][customX] = 5;
    }
}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red")
            }
            else if (matrix[y][x] == 4) {
                fill("orange")
            }
            else if (matrix[y][x] == 5) {
                fill("blue")
            }
            rect(x * side, y * side, side, side);
        }
    }
    for (var i in grassArr) {
        grassArr[i].mul();
    }

    for (var i in grassEaterArr) {
        grassEaterArr[i].eat();
    }

    for (var i in predatorArr) {
        predatorArr[i].utel();
    }

    for (var i in manArr) {
        manArr[i].spanume();
    }

    for (var i in rainArr) {
        rainArr[i].move();
    }
}

