var io = require('socket.io')(server);
var socket = io.connect('http://localhost:3000');

socket.on('sendinfo', function (data) {

    function setup() {
        frameRate(5);
        createCanvas(matrix[0].length * side, matrix.length * side);
        background('#acacac');
    }
    console.log("GOT")
    if (data.curYear == "Spring")
        background("#f7d8d5");
    else if (data.curYear == "Summer")
        background("#fc913aa3");
    else if (data.curYear == "Autumn")
        background("#bf7a1d");
    else if (data.curYear == "Winter")
        background("#b4d9f3");


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

    for (var i = 0; i < matrix.length; i++) {
        matrix[i] = new Array(matrixNum);
        for (var j = 0; j < matrix[i].length; j++)
            matrix[i][j] = 0;
    }

    for (i = 0; i < data.arr.length; i++)
        for (j = 0; j < data.arr[i].length; j++) {
            if (data.arr[i][j] == 1 && data.grassArr.length > 0) {
                fill("green");
                rect(j * data.side, i * data.side, data.side, data.side);
            }
            else if (data.arr[i][j] == 2) {
                fill("yellow");
                rect(j * data.side, i * data.side, data.side, data.side);
            }
            else if (data.arr[i][j] == 2.5) {
                fill("#ffff0270");
                rect(j * data.side, i * data.side, data.side, data.side);
            }
            else if (data.arr[i][j] == 3) {
                fill("red");
                rect(j * data.side, i * data.side, data.side, data.side);
            }
            else if (data.arr[i][j] == 3.5) {
                fill("#e97351");
                rect(j * data.side, i * data.side, data.side, data.side);
            }
            else if (data.arr[i][j] == 4) {
                fill("black");
                rect(j * data.side, i * data.side, data.side, data.side);
            }
            else if (data.arr[i][j] == 5) {
                fill("blue");
                rect(j * data.side, i * data.side, data.side, data.side);
            }
            else if (data.arr[i][j] == 6) {
                fill("purple");
                rect(j * data.side, i * data.side, data.side, data.side);
            }

        }
});
