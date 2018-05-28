var socket = io(); 
var exanak;

function setup() {
        frameRate(5);
        createCanvas(300,300);
        background('#acacac');
}

socket.on("a", function (data) {
    matrix = data[0];
    exanak = data[1];
    document.getElementById('exanak').innerText = exanak;
});

socket.on('uxarkel', function (info) {


    for (i = 0; i < info.matrix.length; i++)
        for (j = 0; j < info.matrix[i].length; j++) {
            if (exanak == "garun" || exanak == "amar") {
                fill("lightgreen");
                rect(x * side, y * side, side, side);
            }
            else if (exanak == "ashun") {
                fill("orange");
                rect(x * side, y * side, side, side);
            }
            else if (exanak == "dzmer") {
                fill("white");
                rect(x * side, y * side, side, side);
            }
            else if (info.matrix[i][j] == 1) {
                fill("green");
                rect(j * info.side, i * info.side, info.side, info.side);
            }
            else if (info.matrix[i][j] == 2) {
                fill("yellow");
                rect(j * info.side, i * info.side, info.side, info.side);
            }
            else if (info.matrix[i][j] == 3) {
                fill("red");
                rect(j * info.side, i * info.side, info.side, info.side);
            }
            else if (info.matrix[i][j] == 4) {
                fill("black");
                rect(j * info.side, i * info.side, info.side, info.side);
            }
            else if (info.matrix[i][j] == 5) {
                fill("blue");
                rect(j * info.side, i * info.side, info.side, info.side);
            }
            else if (info.matrix[i][j] == 6) {
                fill("purple");
                rect(j * info.side, i * info.side, info.side, info.side);
            }

        }
});
