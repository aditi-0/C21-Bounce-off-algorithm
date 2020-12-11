var fixedRect, movingRect;

var r1,r2,r3,r4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 100, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(600, 800,80,30);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  r1 = createSprite(400, 100, 50, 80);
  r1.shapeColor = "red";
 // r1.debug = true;
  r2 = createSprite(400, 800,80,30);
  r2.shapeColor = "red";
  //r2.debug = true;
  r2.velocityY = -5;
  r1.velocityY = +5;

  r3 = createSprite(800, 100, 50, 80);
  r3.shapeColor = "pink";
 // r3.debug = true;
  r4 = createSprite(800, 800,80,30);
  r4.shapeColor = "pink";
  //r4.debug = true;
  r4.velocityY = -5;
  r3.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounceOff(r1,r2);
bounceOff(movingRect,fixedRect);
bounceOff(r3,r4);

  drawSprites();
}

function bounceOff(obj1,obj2){

  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2) {
  obj1.velocityX = obj1.velocityX * (-1);
  obj2.velocityX = obj2.velocityX * (-1);
}
if (obj1.y - obj2.y < obj2.height/2 + obj1.height/2
  && obj2.y - obj1.y < obj2.height/2 + obj1.height/2){
  obj1.velocityY = obj1.velocityY * (-1);
  obj2.velocityY = obj2.velocityY * (-1);
}
}