let cvn = document.getElementById("mycanvas");
let ctx = cvn.getContext("2d");
cvn.width = 800;
cvn.height = 800;
let shooty = 0;
let shootx = 0;
let xo = 400;
let yo = 400;
let num = 5;
let rightkeypressed = false;
let leftkeypressed = false;
let upkeypressed = false;
let downkeypressed = false;
let fire = false;
document.addEventListener("keydown", keydown);
document.addEventListener("keyup", keyup);

ctx.fillStyle = "white";
ctx.fillRect(0, 0, cvn.width, cvn.height);

requestAnimationFrame(loop);
function loop() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cvn.width, cvn.height);

  colorChange("blue", xo, yo, 60, 60);
  //keys
  if (rightkeypressed === true) {
    xo += 5;
    colorChange("red", xo + 30, yo + 10, 60, 40);
  }
  if (leftkeypressed === true) {
    xo -= 5;
    colorChange("red", xo - 30, yo + 10, 60, 40);
  }
  if (upkeypressed === true) {
    yo -= 5;
    colorChange("red", xo + 10, yo - 30, 40, 60);
  }
  if (downkeypressed === true) {
    yo += 5;
    colorChange("red", xo + 10, yo + 40, 40, 60);
  }

  // bullet

  if (fire === true) {
  }

  requestAnimationFrame(loop);
}
// //change direction of cannon
// function cannondirect() {
//   colorChange("red", (xo -= 20), (yo -= 20), 50, 50);
// }
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
  } else if (event.keyCode === 70) {
    fire = true;
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
  } else if (event.keyCode === 70) {
    fire = false;
  }
}
