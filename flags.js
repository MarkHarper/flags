var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function buildLines (x,y,w,h,iter,color) {
  for (var i = 0; i<iter; i++) {
    y -= h;
    if (i%2 !==0) {
      ctx.fillStyle = color;
    }
    else {
      ctx.fillStyle = "white";
    }
    ctx.fillRect(x,y,w,h);
  }
}

buildLines(0,400,560,23,6, "HSLA(354, 70%, 44%, 1)");
buildLines(224,262,336,23,8, "HSLA(354, 70%, 44%, 1)");


var square = function buildSquare (x,y,w,h,color) {
  ctx.fillStyle = color;
  ctx.fillRect(x,y,w,h);
}

square(0,78,224,161,"HSLA(210, 64%, 24%, 1)");
/*
function indiStar(ctx, x, y, r, p, m)
{
    ctx.save();
    ctx.beginPath();
    ctx.translate(x, y);
    ctx.moveTo(0,0-r);
    for (var i = 0; i < p; i++)
    {
        ctx.rotate(Math.PI / p);
        ctx.lineTo(0, 0 - (r*m));
        ctx.rotate(Math.PI / p);
        ctx.lineTo(0, 0 - r);
    }
    ctx.fill();
    ctx.restore();
}

var starLinesOne = function starLines1 (x) {
  for (var b = 0; b<6;b++) {
    indiStar(canvas, 10, 88, 3, 5, 0.5);
    x +=5;
  }
}
*/
function star(ctx, x, y, r, p, m)
{
  ctx.fillStyle = "white";
    ctx.save();
    ctx.beginPath();
    ctx.translate(x, y);
    ctx.moveTo(0,0-r);
    for (var i = 0; i < p; i++)
    {
        ctx.rotate(Math.PI / p);
        ctx.lineTo(0, 0 - (r*m));
        ctx.rotate(Math.PI / p);
        ctx.lineTo(0, 0 - r);
    }
    ctx.fill();
    ctx.restore();
}

function buildStar (x,y) {
  for (var j= 0; j<5; j++) {
    for (var i = 0; i < 6; i++) {
      star(ctx, x, y, 7, 5, 0.5);
      x += 38;
      }
    x = (x-(38*6));
    y +=34.5;
  }
}

buildStar(15,89);

function buildStar2 (x,y) {
  for (var j= 0; j<4; j++) {
  for (var i = 0; i < 5; i++) {
    star(ctx, x, y, 7, 5, 0.5);
    x += 38;
    }
  x = (x-(38*5));
  y +=34.5;
  }
}

buildStar2(34,106.25);

/***************************************
Italy
***************************************/

ctx.fillStyle = "HSLA(149, 100%, 30%, 1)";
ctx.fillRect(0,450,187,299);
ctx.beginPath();
ctx.moveTo(0,449);
ctx.lineTo(561,449);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(0,749);
ctx.lineTo(561,749);
ctx.stroke();



ctx.fillStyle = "HSLA(225, 74%, 33%, 1)";
ctx.fillRect(374,450,187,299);
