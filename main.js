let cvn = document.getElementById("mycanvas");
let ctx = cvn.getContext("2d");
cvn.width = 800;
cvn.height = 800;

let xo = 400;
let yo = 400;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, cvn.width, cvn.height);

ctx.fillStyle = "blue";
ctx.fillRect(xo, yo, 7, 7);

function colorChange(color) {
  ctx.fillStyle = color;
  ctx.fillRect(xo, yo, 7, 7);
}

colorChange("blue");
