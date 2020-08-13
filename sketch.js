//Global Variables

var  backimg,backimage,player_runing,player,bananaimg,banana,obstimg,obstacle, ground;


function preload(){
  backimg = loadImage("jungle2.jpg");
  
  player_running =
    loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaimg = loadImage("Banana.png");
  obstimg = loadImage("stone.png");
}


function setup() {
  createCanvas(600,300);
  backimage = createSprite(0,0,600,300);
  backimage.addImage(backimg);
  backimage.scale = 1;
  backimage.velocityX = -3;
  player = createSprite(50,180,30,40);
  player.addAnimation("p1",player_running);
  ground = createSprite(300,300,600,30);
  ground.visible = false;  
  player.scale = 0.1;
  
  fruitGroup = new Group();
  obstaclesGroup = new Group();
  
  score = 0;
}


function draw(){
 background(255); 
if(backimage.x < 0){
  backimage.x = backimage.width/2;
}
  if(keyDown("space") && player.y >= 159) {
  player .velocityY = -12;
  }
  player.velocityY = player.velocityY + 0.8;
  
  if(fruitGroup.isTouching(player)){
    fruitGroup.destroyEach();
    score = score + 2;
    
  }
  if(obstaclesGroup.isTouching(player)){
     player.scale = 0.2;
     }
  
  switch(score){
    case 10 : player.scale = 0.12;
    break;
    case 20: player.scale = 0.14;
      break;
      case 30: player.scale = 0.16;
      break;
      case 40 : player.scale = 0.18;
      break;
  }
  
  player.collide(ground);
  
  fruit();
  obstacles();
  drawSprites();
  
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score :"+ score , 500,50);
  
}
function fruit(){
  if(frameCount % 180 === 0){
  banana = createSprite(600,300,40,40);
  banana.addImage(bananaimg);
  banana.scale = 0.1;
    banana.velocityX = -3;
    banana.y = Math.round(random(80,120));
    
    banana.lifetime = 200;
    fruitGroup.add(banana);   
banana.depth = player.depth;
    player.depth = player.depth +1;
    
}
}

function obstacles(){
  if(frameCount % 300 === 0){
  obstacle = createSprite(200,280,40,40);
  obstacle.addImage(obstimg);
  obstacle.scale = 0.3;
    obstacle.velocityX = -3;
    obstacle.y = Math.round(random(200,300));
    obstaclesGroup.add(obstacle);
    obstacle.depth = player.depth ;
   player.depth = player.depth +1;
  
    
  }
  
}