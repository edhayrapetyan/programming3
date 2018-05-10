var LivingCreature = require("./public/class.js");
var Grass = require("./public/class.grass.js");
var Xotaker = require("./public/class.grass.js");
var Gishatich = require("./public/class.grass.js");
var Amenkaker = require("./public/class.grass.js");

var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function(req, res){
   res.redirect("public");
});

app.listen(3000, function(){
   console.log("Example is running on port 3000");
});

global.side = 15;
global.gr;
global.grassArr = [];
global.xotakerArr = [];
global.gishatichArr = [];
global.amenakerArr = [];
global.gortArr = [];
global.matrixNum = 20;
global.count = 100, xotakcount = 1, gishcount = 4, amenakercount = 1, gortcount = 1;
global.matrix = new Array(matrixNum);

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




