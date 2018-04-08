class Grass extends LivingCreature {
    constructor(x, y) {
        super(x,y);
        this.timer = -1;
    }
    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == 0) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
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
