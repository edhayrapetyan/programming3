var LivingCreature = require("./class.js");
module.exports = class Gort extends LivingCreature{
    constructor(x, y) {
        super(x,y);
        this.timer = 50;
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

    sharjvel() {
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[norVandak[1]][norVandak[0]] = 5;
        }
    }
    getGrassid(x, y) {
        for (var i = 0; i < grassArr.length; i++) {
            if (grassArr[i].x == x && grassArr[i].y == y)
                return i;
        }
    }
    getXotakerid(x, y) {
        for (var i = 0; i < xotakerArr.length; i++) {
            if (xotakerArr[i].x == x && xotakerArr[i].y == y)
                return i;
        }
    }
    getGishatichid(x, y) {
        for (var i = 0; i < gishatichArr.length; i++) {
            if (gishatichArr[i].x == x && gishatichArr[i].y == y)
                return i;
        }
    }
    getAmenakerid(x, y) {
        for (var i = 0; i < amenakerArr.length; i++) {
            if (amenakerArr[i].x == x && amenakerArr[i].y == y)
                return i;
        }
    }
    tunavorel() {
        var target = random(this.yntrelVandak(1, 2, 3, 4));
        if (target) {
            if (matrix[target[1]][target[0]] == 1) {
                grassArr[this.getGrassid(target[0], target[1])].timer = 5;
            }
            else if (matrix[target[1]][target[0]] == 2) {
                console.log(xotakerArr[this.getXotakerid(target[0], target[1])]);
                xotakerArr[this.getXotakerid(target[0], target[1])].timer = 5;
            }
            else if (matrix[target[1]][target[0]] == 3) {
                gishatichArr[this.getGishatichid(target[0], target[1])].timer = 5;
            }
            else if (matrix[target[1]][target[0]] == 4) {
                amenakerArr[this.getAmenakerid(target[0], target[1])].timer = 5;
            }
        }
    }
    mahanal() {
        this.timer--;
        if (this.timer <= 0) {
            matrix[this.y][this.x] = 0;
            gortArr.splice(this.id, 1);
            this.energy = 0;
        }
    }
}
