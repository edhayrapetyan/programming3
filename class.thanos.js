var LivingCreature = require("./class.js");
module.exports = class Thanos extends LivingCreature{
    constructor(x, y) {
        super(x,y);
        this.explosion = 11;
    }
    stanalNorKordinatner() {
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

    yntrelVandak(ch, ch1 = -1, ch2 = -1, ch3 = -1) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch || matrix[y][x] == ch1 || matrix[y][x] == ch2 || matrix[y][x] == ch3) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;   
    }
    getGrassId(x, y) {
        for (var i = 0; i < grassArr.length; i++) {
            if (grassArr[i].x == x && grassArr[i].y == y)
                return i;
        }
    }
    getXotakerId(x, y) {
        for (var i = 0; i < xotakerArr.length; i++){
            if (xotakerArr[i].x == x && xotakerArr[i].y == y)
                return i;
        }
    }
    getGishatichId(x, y) {
        for (var i = 0; i < gishatichArr.length; i++) {
            if (gishatichArr[i].x == x && gishatichArr[i].y == y)
                return i; 
        }
    }
    getAmenakerId(x, y) {
        for (var i = 0; i < amenakerArr.length; i++) {
            if (amenakerArr[i].x == x && amenakerArr[i].y == y)
                return i;
        }
    }
    getGortId(x, y) {
        for (var i = 0; i < gortArr.length; i++) {
            if (gortArr[i].x == x && gortArr[i].y == y)
             return i;
        }
    }


    gmp(){
        var target = random (this.yntrelVandak(1, 2, 3, 4));
        if(target){
            if (matrix[target[1]][target[0]] == 1) {
                grassArr[this.getGrassId(target[0], target[1])].explosion = 3;
            }
            else if (matrix[target[1]][target[0]] == 2) {
                xotakerArr[this.getXotakerId(target[0], target[1])].explosion == 3;
            }
            else if (matrix[target[1]][target[0]] == 3 ) {
                gishatichArr[this.getGishatichId(target[0], target[1])].explosion == 3;
            }
            else if (matrix[target[1]][target[0]] == 4 ) {
                amenakerArr[this.getAmenakerId(target[0], target[1])].exposion == 3;
            }
            else if (matrix[target[1]][target[0]] == 5) {
                gortArr[this.getGortId(target[0], target[1])].explosion == 3;
            } 
        }
    }

    sharjvel() {
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[norVandak[1]][norVandak[0]] = 6;
        }
    }

}