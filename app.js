var LivingCreature = require("./public/class.js");
var Grass = require("./public/class.grass.js");
var Xotaker = require("./public/class.xotaker.js");
var Gishatich = require("./public/class.gishatich.js");
var Amenaker = require("./public/class.amenaker.js");
var Gort = require("./public/class.gort.js")

var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("."));

app.get("/", function (req, res) {
    res.redirect("public/index.html");
});

server.listen(3000, function () {
    console.log("Example is running on port 3000");
});

var setonce = 0;

function ashxatanq () {
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

io.on('connection', function (socket) {

    if (setonce == 0) {
        global.side = 15;
        global.gr;
        global.grassArr = [];
        global.xotakerArr = [];
        global.gishatichArr = [];
        global.amenakerArr = [];
        global.gortArr = [];
        global.matrixNum = 20;
        global.count = 100, global.xotakcount = 1, global.gishcount = 4, global.amenakercount = 1, global.gortcount = 1;
        global.matrix = new Array(matrixNum);
        for (var i = 0; i < matrix.length; i++) {
            global.matrix[i] = new Array(matrixNum);
        for (var j = 0; j < matrix[i].length; j++)
            global.matrix[i][j] = 0;
        }
        var grass;
        var xotaker;
        var gishatich;
        var amenaker;
        var gort;
        var thanos;


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

        var utelch;
        global.timeofyear = 300;
        global.curYear = "Spring";
        setonce++;
    }

    setInterval(function() {
        ashxatanq();
        var info = {
            matrix: global.matrix,
            side: global.side
        };
        socket.emit("uxarkel", info);
    },300);
});