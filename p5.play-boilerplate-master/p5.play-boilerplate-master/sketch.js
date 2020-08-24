
var fixedrect,movingrect;



function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(750, 200, 50, 50);
  fixedrect.shapeColor="green";
  movingrect=createSprite(50,200,50,50);
  movingrect.shapeColor="green";
  
  movingrect.debug=true;
  fixedrect.debug=true;
  movingrect.velocityX=5;
  fixedrect.velocityX=-5;
  
}

function draw() {
  background(255,255,255);  
//movingrect.y=World.mouseY;
//movingrect.x=World.mouseX;



if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
  && fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
  &&fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.width/2
  &&movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.width/2){
 movingrect.velocityX=movingrect.velocityX*-1;
 fixedrect.velocityX=fixedrect.velocityX*-1;
movingrect.shapeColor="red";
fixedrect.shapeColor="red";

}
else{

  movingrect.shapeColor="green";
  fixedrect.shapeColor="green";
}



  drawSprites();
}