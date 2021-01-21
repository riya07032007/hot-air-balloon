var balloon
var database,position

function preload(){
  bg=loadImage("images/bg.png")
  balloon1=loadAnimation("images/balloon.png","images/balloon2.png","images/balloon3.png")
}

function setup() {
  createCanvas(800,800);
  balloon=createSprite(200, 200, 50, 50);
  balloon.addAnimation("balloonImage",balloon1)
  balloon.scale=0.3
  balloon.x=200
  balloon.y=200
}

function draw() {
  background(bg);
    
  if(keyDown(LEFT_ARROW)){
   balloon.x=balloon.x-10
}
else if(keyDown(RIGHT_ARROW)){
    balloon.x=balloon.x+10
}
else if(keyDown(UP_ARROW)){
  balloon.x=balloon.y+10
}
else if(keyDown(DOWN_ARROW)){
  balloon.x=balloon.y-10

  
  }
  drawSprites();
}