function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(0, 0, 0);
  stroke(75)
  strokeWeight(3)
  line(100, 300, 100, 200);
  line(100, 200, 350, 150);
  line(350, 150, 430, 150);
  line(430, 150, 430, 300);
  line(430, 300, 100, 300);
  fill(200, 180, 63);
  strokeWeight (1.5);
  ellipse(130, 270, 30, 30);
  fill(63, 225, 155);
  strokeWeight (1.5);
  ellipse(330, 200, 60, 60);
}
