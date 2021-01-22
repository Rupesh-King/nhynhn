var fixedRect,movingRect;
function setup() {
  createCanvas(1200,800);
  fixedRect= createSprite(400, 100, 50, 80);
  movingRect= createSprite(400, 800, 80, 30);
  //movingRect.velocityY = -5;
 // fixedRect.velocityY = +5;
}
//console.log("hi ");
//function draw() {
 // background(255,255,255);  
 // bounceOff(movingRect,fixedRect);
  function draw() { background(0,0,0); movingRect.x = World.mouseX; movingRect.y = World.mouseY; 
    //bounceOff( movingRect,fixedRect);
     if(isTouching(movingRect,fixedRect)) { fixedRect.shapeColor = "red";
     movingRect.shapeColor = "red"; }
     else
     { fixedRect.shapeColor = "green"; movingRect.shapeColor = "green"; }
    
 

  drawSprites();
  }
