class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = Math.round(Math.random() * 8);
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
        this.starved = 0;
        this.id;
        this.timer = -1;
    }
    yntrelVandak() {
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
    tunavorvel()
    {
        if(this.timer != -1)
        {
            this.timer--;
        }
        if(this.timer == 0)
        {
            
            matrix[this.y][this.x] = 0;
            grassArr.splice(this.id, 1);           
        }
    }


}

//----------------------------------- xotaker -----------------------------------

class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 8;
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
        this.energy = 3;
        this.bazmanalc = 2;
        this.bmultiply = 1;
        this.id;
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
    }

    stanalXotiIdn(x, y) {
        for (var i = 0; i < grassArr.length; i++) {
            if (grassArr[i].x == x && grassArr[i].y == y)
                return i;
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
            grassArr.splice(this.stanalXotiIdn(norVandak[0], norVandak[1]), 1);
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
        if (norVandak && norVandakRand && this.energy > 5 && this.bmultiply % 5 == 0) {
            var newx = norVandakRand[0];
            var newy = norVandakRand[1];
            matrix[newy][newx] = 2;
            var newXotaker = new Xotaker(newx, newy);
            xotakerArr.push(newXotaker);
            this.energy = 3;
        }
    }
    mahanal() {
        if(this.timer != -1)
        {
            this.timer--;
        }
        if (this.energy <= 0 || this.timer == 0) {
                       
            matrix[this.y][this.x] = 0;
            xotakerArr.splice(this.id, 1);
            this.energy = 0;
        }

    }
}


//----------------------------------- gishatich -----------------------------------


class Gishatich {
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
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
        this.energy = 45;
        this.multiply = 0;
        this.id = 0;
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
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



//------------------------ Amenaker -------------------------------

class Amenaker
{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]           
        ]
        this.energy  = 3;
        this.id;
        this.timer = -1;
    }
    stanalNorKordinatner()
    {
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
    } 
    sharjvel()
    {
        var norVandak = random(this.yntrelVandak(0)); 
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[norVandak[1]][norVandak[0]] = 4;
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
    stanalXotiIdn(x, y) {
        for (var i = 0; i < grassArr.length; i++) {
            if (grassArr[i].x == x && grassArr[i].y == y)
                return i;
        }
    }
    utel(){
        var norXotiCord = random(this.yntrelVandak(1));
        var norXotakeriCord = random(this.yntrelVandak(2));
        if(norXotakeriCord)
        {
            matrix[this.y][this.x] = 0;
            xotakerArr.splice(this.stanalXotakeriIdn(norXotakeriCord[0],norXotakeriCord[1]),1);
            this.x = norXotakeriCord[0];
            this.y = norXotakeriCord[1];
            matrix[norXotakeriCord[1]][norXotakeriCord[0]] = 4;
            this.energy++;
            //console.log("Kerav xotaker");
            return true;
        }
        else if(norXotiCord)
        {
            matrix[this.y][this.x] = 0;
            grassArr.splice(this.stanalXotiIdn(norXotiCord[0],norXotiCord[1]),1);
            this.x = norXotiCord[0];
            this.y = norXotiCord[1];
            matrix[norXotiCord[1]][norXotiCord[0]] = 4; 
            this.energy++;
            //console.log("Kerav xot");
            return true;
        }   
        else{
            return false;
        }
    }
    bazmanal()
    {
        var norVandak = random(this.yntrelVandak(0));
        if(xotakerArr.length >= 250 && norVandak)
        {
            var norx  = norVandak[0];
            var nory  = norVandak[1];
            matrix[nory][norx] = 3;
            var norAmena = new Amenaker(norx, nory);
            amenakerArr.push(norAmena);
            this.energy = 20;
        }                 
    }
    mahanal()
    {
        if(this.timer != -1)
        {
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
class Gort{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]           
        ]
        this.timer = 50;
        this.id;
    }
    stanalNorKordinatner()
    {
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
    yntrelVandak(ch,ch1=-1,ch2=-1,ch3=-1) {
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
    sharjvel()
    {
        var norVandak = random(this.yntrelVandak(0)); 
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[norVandak[1]][norVandak[0]] = 5;
        }               
    }
    getGrassid(x,y)
    {
        for(var i = 0; i < grassArr.length; i++)
        {
            if(grassArr[i].x == x && grassArr[i].y == y)
                return i;
        }
    }
    getXotakerid(x,y)
    {
        for(var i = 0; i <  xotakerArr.length; i++)
        {
            if(xotakerArr[i].x == x && xotakerArr[i].y == y)
                return i;
        }
    }
    getGishatichid(x,y)
    {
        for(var i = 0; i < gishatichArr.length; i++)
        {
            if(gishatichArr[i].x == x && gishatichArr[i].y == y)
                return i;
        }
    }  
    getAmenakerid(x,y)
    {
        for(var i = 0; i < amenakerArr.length; i++)
        {
            if(amenakerArr[i].x == x && amenakerArr[i].y == y)
                return i;
        }
    }          
    tunavorel()
    {
        var target = random(this.yntrelVandak(1,2,3,4));
        if(target)
        {
            if(matrix[target[1]][target[0]] == 1)
            {
                grassArr[this.getGrassid(target[0],target[1])].timer = 5;
            }
            else if(matrix[target[1]][target[0]] == 2)
            {
                xotakerArr[this.getXotakerid(target[0],target[1])].timer = 5;                
            }
            else if(matrix[target[1]][target[0]] == 3)
            {       
                gishatichArr[this.getGishatichid(target[0],target[1])].timer = 5;                
            }
            else if(matrix[target[1]][target[0]] == 4)
            {
                amenakerArr[this.getAmenakerid(target[0],target[1])].timer = 5;                
            }            
        }
    }
    mahanal()
    {
        this.timer--;
        if(this.timer <= 0)
        {
            matrix[this.y][this.x] = 0;
            gortArr.splice(this.id, 1);
            this.energy = 0;            
        }
    }
}
