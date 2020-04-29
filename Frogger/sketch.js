let frog;

function setup() {
  createCanvas(800, 600);
  frog = new Frog();
}

function draw() {
  background(0);


  frog.update();
  frog.show();
}
//just a quick comment to pove a point. I can be deleted!
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    frog.x -= 50;
  } else if (keyCode === RIGHT_ARROW) {
    frog.x += 50;
  } else if (keyCode === UP_ARROW) {
    frog.y -= 50;
  } else if (keyCode === DOWN_ARROW) {
    frog.y += 50;
  }
}