var LivingCreature = require("./class.js");
var random = require("./function.random.js");

module.exports = class Grass extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.timer = -1;
    }


    bazmanal() {
        var norVandak = random(this.yntrelVandak(0));
        //console.log(norVandak);
        if (this.multiply >= 8 && norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
        }
        this.multiply++;
    }


    tunavorvel() {
        if (this.timer != -1) {
            this.timer--;
        }
        if (this.timer == 0) {

            matrix[this.y][this.x] = 0;
            grassArr.splice(this.id, 1);
        }
    }


}
