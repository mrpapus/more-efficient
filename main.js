let cvn = document.getElementById("mycanvas");
let ctx = cvn.getContext("2d");
cvn.width = 800;
cvn.height = 800;

let xo = 400;
let yo = 400;

let rightkeypressed = false;
let leftkeypressed = false;
let upkeypressed = false;
let downkeypressed = false;

document.addEventListener("keydown", keydown);
document.addEventListener("keyup", keyup);

ctx.fillStyle = "white";
ctx.fillRect(0, 0, cvn.width, cvn.height);

requestAnimationFrame(loop);
function loop() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cvn.width, cvn.height);

  colorChange("blue", xo, yo, 50, 50);

  if (rightkeypressed === true) {
    xo += 5;
  }

  requestAnimationFrame(loop);
}

// color
function colorChange(color, x, y, width, height) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

// key commands
function keydown() {
  if (event.keyCode === 68) {
    rightkeypressed = true;
  } else if (event.keyCode === 65) {
    leftkeypressed = true;
  } else if (event.keyCode === 87) {
    upkeypressed = true;
  } else if (event.keyCode === 83) {
    downkeypressed = true;
  }
}

function keyup() {
  if (event.keyCode === 68) {
    rightkeypressed = false;
  } else if (event.keyCode === 65) {
    leftkeypressed = false;
  } else if (event.keyCode === 87) {
    upkeypressed = false;
  } else if (event.keyCode === 83) {
    downkeypressed = false;
  }
}
