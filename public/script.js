for (var i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(matrixNum);
    for (var j = 0; j < matrix[i].length; j++)
        matrix[i][j] = 0;
}
while (count > 0) {
    tx = Math.floor(Math.random() * matrixNum);
    ty = Math.floor(Math.random() * matrixNum);
    if (matrix[ty][tx] == 0) {
        matrix[ty][tx] = 1;
        gr = new Grass(tx, ty);
        grassArr.push(gr);
        count--;
    }
}
while (xotakcount > 0) {
    tx = Math.floor(Math.random() * matrixNum);
    ty = Math.floor(Math.random() * matrixNum);
    if (matrix[ty][tx] == 0) {
        matrix[ty][tx] = 2;
        gr = new Xotaker(tx, ty);
        xotakerArr.push(gr);
        xotakcount--;
    }
}


while (gishcount > 0) {
    tx = Math.floor(Math.random() * matrixNum);
    ty = Math.floor(Math.random() * matrixNum);
    if (matrix[tx][ty] == 0) {
        matrix[ty][tx] = 3;
        gr = new Gishatich(tx, ty);
        gishatichArr.push(gr);
        gishcount--;
    }
}

while (amenakercount > 0) {
    tx = Math.floor(Math.random() * matrixNum);
    ty = Math.floor(Math.random() * matrixNum);
    if (matrix[tx][ty] == 0) {
        matrix[ty][tx] = 4;
        gr = new Amenaker(tx, ty);
        amenakerArr.push(gr);
        amenakercount--;
    }
}


while (gortcount > 0) {
    tx = Math.floor(Math.random() * matrixNum);
    ty = Math.floor(Math.random() * matrixNum);
    if (matrix[tx][ty] == 0) {
        matrix[ty][tx] = 5;
        gr = new Gort(tx, ty);
        gortArr.push(gr);
        gortcount--;
    }
}



function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}

function draw() {
    background('aqua');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
        }
    }



    for (var i = 0; i < grassArr.length; i++) {
        grassArr[i].id = i;
        grassArr[i].bazmanal();
        grassArr[i].tunavorvel();
    }
    var utelch;
    for (var i = 0; i < xotakerArr.length; i++) {
        xotakerArr[i].id = i;
        utelch = xotakerArr[i].utel();
        //console.log(utelch);
        if (!utelch)
        xotakerArr[i].sharjvel();
        xotakerArr[i].bazmanal();
        xotakerArr[i].mahanal();
    }
    for (var i = 0; i < gishatichArr.length; i++) {
        gishatichArr[i].id = i;
        utelch = gishatichArr[i].utel();
        if (!utelch) {
            gishatichArr[i].sharjvel();
            gishatichArr[i].energy--;
        }

        gishatichArr[i].bazmanal();
        gishatichArr[i].mahanal();
    }
    for (var i = 0; i < amenakerArr.length; i++) {
        amenakerArr[i].id = i;
        utelch = amenakerArr[i].utel();
        if (!utelch) {
            amenakerArr[i].sharjvel();
            amenakerArr[i].energy--;
        }
        amenakerArr[i].bazmanal();
        amenakerArr[i].mahanal();
    }
    for (var i = 0; i < gortArr.length; i++) {
        gortArr[i].id = i;
        gortArr[i].sharjvel();
        gortArr[i].tunavorel();
        //gortArr[i].mahanal(); balance em pahpanum, ok?
    }
}

