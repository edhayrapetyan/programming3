var LivingCreature = require("./class.js");
module.exports = class Amenaker extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 3;
        this.timer = -1;
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

    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(ch);
    }

    sharjvel() {
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[norVandak[1]][norVandak[0]] = 4;
        }
    }
    stanalXotakeriIdn(x, y) {
        for (var i = 0; i < xotakerArr.length; i++) {
            if (xotakerArr[i].x == x && xotakerArr[i].y == y)
                return i;
        }
    }
    stanalXotiIdn(x, y) {
        for (var i = 0; i < grassArr.length; i++) {
            if (grassArr[i].x == x && grassArr[i].y == y)
                return i;
        }
    }
    utel() {
        var norXotiCord = random(this.yntrelVandak(1));
        var norXotakeriCord = random(this.yntrelVandak(2));
        if (norXotakeriCord) {
            matrix[this.y][this.x] = 0;
            xotakerArr.splice(this.stanalXotakeriIdn(norXotakeriCord[0], norXotakeriCord[1]), 1);
            this.x = norXotakeriCord[0];
            this.y = norXotakeriCord[1];
            matrix[norXotakeriCord[1]][norXotakeriCord[0]] = 4;
            this.energy++;
            //console.log("Kerav xotaker");
            return true;
        }
        else if (norXotiCord) {
            matrix[this.y][this.x] = 0;
            grassArr.splice(this.stanalXotiIdn(norXotiCord[0], norXotiCord[1]), 1);
            this.x = norXotiCord[0];
            this.y = norXotiCord[1];
            matrix[norXotiCord[1]][norXotiCord[0]] = 4;
            this.energy++;
            //console.log("Kerav xot");
            return true;
        }
        else {
            return false;
        }
    }
    bazmanal() {
        var norVandak = random(this.yntrelVandak(0));
        if (xotakerArr.length >= 250 && norVandak) {
            var norx = norVandak[0];
            var nory = norVandak[1];
            matrix[nory][norx] = 3;
            var norAmena = new Amenaker(norx, nory);
            amenakerArr.push(norAmena);
            this.energy = 20;
        }
    }
    mahanal() {
        if (this.timer != -1) {
            this.timer--;
        }
        if (this.energy <= 0 || this.timer == 0) {
            // if(this.timer == 0){
            // console.log("Satkec");                        
            // }
            matrix[this.y][this.x] = 0;
            amenakerArr.splice(this.id, 1);
            this.energy = 0;
        }
    }
}