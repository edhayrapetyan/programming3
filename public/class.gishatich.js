var LivingCreature = require("./class.js");
var random = require("./function.random.js");

module.exports = class Gishatich extends LivingCreature {
    constructor(x, y) {
        super(x,y);
        this.energy = 45;
        this.multiply = 0;
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
    
    sharjvel()
    {
        var norVandak = random(this.yntrelVandak(0)); 
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[norVandak[1]][norVandak[0]] = 3;
        }       
    }
    stanalXotakeriIdn(x,y)
    {
        for(var i = 0; i < xotakerArr.length; i++)
        {
            if(xotakerArr[i].x == x && xotakerArr[i].y == y)
                return i;
        }
    }
    
    utel()
    {
        var norVandak = random(this.yntrelVandak(2));
        if(norVandak)
        {
            matrix[this.y][this.x] = 0;
            xotakerArr.splice(this.stanalXotakeriIdn(norVandak[0],norVandak[1]),1);
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix [norVandak[1]][norVandak[0]] = 3;
            this.energy++;
            return true;
        }
        else
            return false;
    }
    bazmanal()
    {
        var norVandak = random(this.yntrelVandak(0));
        this.multiply++;
        if(norVandak && this.energy > 55 && this.multiply > 2)
        {
            var norx  = norVandak[0];
            var nory  = norVandak[1];
            matrix[nory][norx] = 3;
            var norGish = new Gishatich(norx, nory);
            gishatichArr.push(norGish);
            this.energy = 20;
            this.multiply = 0;
        }         
    }
    mahanal()
    {
        if(this.timer != -1)
        {
            this.timer--;
        }
        if (this.energy <= 0 || this.timer == 0) {
           
                        
            matrix[this.y][this.x] = 0;
            gishatichArr.splice(this.id, 1);
            this.energy = 0;
        }
    }
}