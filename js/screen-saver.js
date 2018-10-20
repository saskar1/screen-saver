
var width = 600;
var height = 300;

// This JavaScript function always returns a random number between min (included) and max (excluded)
// https://www.w3schools.com/js/js_random.asp
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
}

async function run() {
    var c = document.getElementById("screen-saver-canvas");
    var ctx = c.getContext("2d");
    //ctx.moveTo(0, 0);
    //ctx.lineTo(200, 100);
    //ctx.stroke();

    var count = 0;

    while (true) {
        count++;
        var x = randInt(0, width);
        var y = randInt(0, height);
        var color;

        if (count < 1000) {
            color = randInt(0,2);
            if (color == 1) {
                color = 'black';
            } else {
                color = 'white';
            }
        } else  {
            // https://stackoverflow.com/questions/6735470/get-pixel-color-from-canvas-on-mouseover
            var p = ctx.getImageData(x, y, 1, 1).data; 
            color = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
            if (color != "#000000" && color != "#ffffff") {
                color = randInt(0,2);
                if (color == 1) {
                    color = 'black';
                } else {
                    color = 'white';
                }
            }
            //console.log(color);
        }

        ctx.beginPath();
        ctx.arc(x, y, 15, 0, 2 * Math.PI);
        ctx.fillStyle = color;

        ctx.fill();
        //ctx.stroke();

        if (count > 10000 && count % 100 == 0)
            await sleep(1);
    }   
}

run();

