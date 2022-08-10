var box1, box2;

function setup() 
{
  createCanvas(600, 400);
  box1 = new Box(400, 40, 100, 20, 3);
  box2 = new Box(400, 80, 100, 20, -3)
}

function draw() 
{
  background(220);
box1.show();
box1.move();
box1.bounce();

box2.show();
box2.move();
box2.bounce();
}

