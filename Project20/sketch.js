var car,wall;
var speed,weight;
var Deformation;


function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,height / 2);
  wall.shapeColor = (80,80,80);
  Deformation = (0.5 * weight * speed * speed) / 22500;
}

function draw() {
  background(0,0,0);  

  car.velocityX = speed;

  fill(255,255,255);
  text("Deformation: " + Deformation, 1000, 100);

  if (Deformation < 100) {
    car.shapeColor = "red";
  } else if (Deformation > 100 & Deformation < 180) {
    car.shapeColor = "yellow";
  } else if (Deformation > 180) {
    car.shapeColor = "green";
  }
  

  drawSprites();
}