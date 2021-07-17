var tower, towerIMG;
var ghost, ghostIMG;
var door, doorIMG;
var climber,climberIMG;
var gameState = "play";


function preload(){
towerIMG = loadImage("tower.png");
ghostIMG = loadImage("ghost-standing.png");
doorIMG = loadImage("door.png");
climberIMG = loadImage("climber.png");
}

function setup(){
createCanvas(600,600); 
tower = createSprite(300,300);
tower.addImage(towerIMG);
tower.velocityY = 2;

ghost = createSprite(200,200);
ghost.addImage(ghostIMG);
ghost.scale = 0.5;
 
doorGroup = new Group();
climberGroup = new Group();

}

function draw(){
background("black");
if(gameState==="play"){
if(tower.y>400){
  tower.y = 300;
}
  
if(keyDown("up_arrow")){
ghost.velocityY = -2; 
 } 
  
ghost.velocityY += 0.8; 
  
if(keyDown("right_arrow")){
ghost.x += 2;  
}
  
if(keyDown("left_arrow")){
ghost.x += -2;
}
   
createDoors();

if(doorGroup.isTouching(ghost)){
  gameState = "end";
}

}
else if (gameState=== "end"){
ghost.destroy();
doorGroup.setVelocityYEach(0);
tower.velocityY = 0;
tower.visible = false;
climberGroup.setVelocityYEach(0);
textSize(40);
fill("red");
text("GAME OVER",150,300);
  

}
  
  
  
drawSprites();
  
  
  
}


function createDoors(){
if(frameCount%250===0){
var door = createSprite(200,-50);
var climber = createSprite(200,10);
door.addImage(doorIMG);
climber.addImage(climberIMG);
door.velocityY = 2;
climber.velocityY = 2;
door.x = Math.round(random(100,400));
climber.x = door.x;
doorGroup.add(door);
climberGroup.add(climber);
door.lifetime = 100;
climber.lifetime = 100;
}
}




