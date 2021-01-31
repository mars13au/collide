var movingRect,fixedRect;



function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(200,200,50,80);
  movingRect.shapeColor = "red";
  fixedRect = createSprite(400,200,80,30);
  fixedRect.shapeColor = "red";
}

function draw() {
  background(0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
    movingRect.y - fixedRect.y < fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.y - movingRect.y < fixedRect.width/2 + movingRect.width/2 ){
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  else{
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }


  drawSprites();
}