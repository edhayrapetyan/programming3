var LivingCreature = require("./class.js");
var Grass = require("./class.grass.js");
var Xotaker = require("./class.xotaker.js");
var Gishatich = require("./class.gishatich.js");
var Amenkaker = require("./class.amenaker.js");
var Gort = require("./class.gort.js")

var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.redirect("public");
});

app.listen(3000, function () {
    console.log("Example is running on port 3000");
});


io.on('connection', function (socket) {
    
    if (setonce == 0) {
        console.log("Connected!");
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

        var cellch;
		global.timeofyear = 300;
		global.curYear = "Spring";
		setonce++;
    }


    setInterval(function () {
        job();
        var data = {
            arr: global.arr,
            curYear: global.curYear,
            side: global.side,
            grassArr: global.grassArr
        }
        socket.emit("sendinfo", data);

        socket.on("create", function (creating_data) {
            se = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
            if (se == 1) {
                var fi_se = 2;
            }
            else {
                var fi_se = 2.5;
            }
            if (global.arr[creating_data.c_x][creating_data.c_y] == 0) {
                xotaker = new Xotaker(creating_data.c_x, creating_data.c_y, fi_se);
                global.herbArr.push(xotaker);
            }

        });
        // console.log("Worked");
    }, 400);
});