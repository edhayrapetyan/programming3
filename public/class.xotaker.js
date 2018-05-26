var LivingCreature = require("./class.js");
var random = require("./function.random.js");

module.exports = class Xotaker extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 3;
        this.bazmanalc = 2;
        this.bmultiply = 1;
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


    stanalXotiIdn(x, y) {
        for (var i = 0; i < grassArr.length; i++) {
            if (grassArr[i].x == x && grassArr[i].y == y) {
                grassArr.splice(i, 1);
                return i;
            }
        }
    }

    sharjvel() {
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[norVandak[1]][norVandak[0]] = 2;
            this.energy--;
        }
    }

    utel() {
        var norVandak = random(this.yntrelVandak(1));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.stanalXotiIdn(norVandak[0], norVandak[1]);

            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[norVandak[1]][norVandak[0]] = 2;
            this.energy++;
            return true;
        }
        else {
            return false;
        }
    }

    bazmanal() {
        
        var norVandak = this.yntrelVandak(0);
        var norVandakRand = random(norVandak);
        this.bmultiply++;
        if (norVandakRand && this.energy > 5 && this.bmultiply % 5 == 0) {
            var newx = norVandakRand[0];
            var newy = norVandakRand[1];
            matrix[newy][newx] = 2;
            var newXotaker = new Xotaker(newx, newy);
            xotakerArr.push(newXotaker);
            this.energy = 3;
        }
    }
    mahanal() {
        if (this.timer != -1) {
            this.timer--;
        }
        if (this.energy <= 0 || this.timer == 0) {

            matrix[this.y][this.x] = 0;
            xotakerArr.splice(this.id, 1);
            this.energy = 0;
        }

    }
}

