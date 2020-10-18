var monkey_running,jungle1,obstacle,obstacleimage,ground,score,invisibleground,bananagroup,survivaltime;

function preload(){
 monkey_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  jungle1=loadImage("jungle.jpg");
  obstacleimage=loadImage("stone.png");
  
}
function setup() {
  createCanvas(700, 500);
  
ground = createSprite(500,200,400,20);
ground.addImage("groundd",jungle1);

   invisibleground= createSprite(0,450,1300,20);
 invisibleground.depth=invisibleground.depth+1;
  
   invisibleground.visible=false;
  monkey = createSprite(50,400,20,50);
  monkey.addAnimation("runningg", monkey_running);

  monkey.scale = 0.12;
  
  
  bananaGroup = new Group();
  obstaclesGroup = new Group();
   
     survivaltime=0;
stroke("black");
textSize(20);
fill("black");

}
  
function draw() {
  background(220);
 
   if(keyDown("space")) {
    monkey.velocityY = -10;
  }
   monkey.velocityY = monkey.velocityY + 0.8
   monkey.collide(invisibleground);

   invisibleground.velocityX=-9;
   if (invisibleground.x < 0){
    invisibleground.x = invisibleground.width/2;
  }
 if (bananaGroup.isTouching(monkey)){
      survivaltime=   survivaltime+2;
   bananaGroup.destroyEach();
 }
  if (obstaclesGroup.isTouching(monkey)){
    monkey.scale=0.12;
  }
banana1();
  stone();

  drawSprites();
text("survivaltime:" + survivaltime,350,50);
  
}

function banana1 (){
  if (frameCount % 60 === 0) { 
  banana = createSprite(700,180,20,20);
   bananaimage=loadImage("banana.png");
    banana.scale=0.09
   banana.velocityX=-9;
  banana.addImage("bananaa",bananaimage);
 banana.lifetime=81;
      banana.y=Math.round(random(120,300));
    bananaGroup.add(banana);
 switch (   survivaltime){
     
     case 10: monkey.scale=0.14;     
break ;
case 20: monkey.scale=0.18;     
break ;
case 30: monkey.scale=0.22;     
break ;
case 40: monkey.scale=0.26;     
break ;
default: 
     break;
     
}  
  }
}
function stone (){
  if (frameCount % 90 === 0) { 
  obstacle = createSprite(600,420,10,10);
   obstacle.velocityX=-9;
    obstacle.scale=0.2
   
  obstacle.addImage("obstaclee",obstacleimage);
 obstacle.lifetime=77;
        obstaclesGroup.add(obstacle);

  }
}
