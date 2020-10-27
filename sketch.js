var bullet,speed,weight;
var wall,thickness;

function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  speed=random(223,321);
  weigth=random(30,52)
  bullet = createSprite(50,200,70,50);
  wall = createSprite(1350,200,60,height/2);
}

function draw() {
  background(0);  
  
  bullet.velocityX = speed;
   

  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  { 
    bullet.velocityX=0; 
    var damage=0.5*weight*speed*speed/thickness*thickness*thickness;
    if (damage>180)
    {
       bullet.shapeColor=color(255,0,0);
    }
    
    if (damage>180)
    {
       bullet.shapeColor=color(0,255,0);
    }

  }

  drawSprites();
}





