var forest,forestImage;
var lion,lionImage;
var hunter,hunterImage;
var startback,startbackImage
var starticon,starticonImage;
var START=0
var PLAY=1
var PLAYING=2
var END=3

var gameState=START

var bubble,bubbleImage
var bubble2,bubble2Image;
var stone,stoneImg,stoneGroup;
var coin,coinImg,coinGroup;
var bird,birdImg,birdGroup;

function preload(){
  forestImage=loadImage("forestlong.jpg");
  lionImage=loadImage("lion.gif");
  hunterImage=loadImage("hunter.png")
  bubbleImage=loadImage("bubble.png")
  bubble2Image=loadImage("bubble.png")
  startbackImage=loadImage("startback.jpg")
  starticonImage=loadImage("startbutton.png")
  stoneImg=loadImage("stone.png");
  coinImg=loadImage("goldCoin.png")
  birdImg=loadImage("bird.gif")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  
  back=createSprite(700,200);
  back.addImage(forestImage);
  back.scale=1

  starticon=createSprite(1000,200)
  starticon.addImage(starticonImage)
  starticon.scale=0.5

  startback=createSprite(500,200)
  startback.addImage(startbackImage)
  startback.scale=1
 
  lion=createSprite(400,285,20);
  lion.addImage(lionImage);
  lion.scale=0.4
  lion.visible=false;

  hunter=createSprite(150,265,20);
  hunter.addImage(hunterImage)
  hunter.scale=0.18
  hunter.visible=false;

  bubble=createSprite(250,80)
  bubble.addImage(bubbleImage)
  bubble.scale=0.3
  bubble.visible=false;

  bubble2=createSprite(680,150)
  bubble2.addImage(bubbleImage)
  bubble2.scale=0.3
  bubble2.visible=false;
  
  stoneGroup=new Group();
  coinGroup=new Group();
  birdGroup=new Group();
}
function draw() {
  background(255,255,255);



  

    
  
  if(gameState===PLAYING){
    bubble.visible=false
    bubble2.visible=false

    back.velocityX=-2;
    hunter.velocityX=-1
    SpawnStone();
    SpawnCoin();
    Spawnbird();
    if(back.x<650){
      back.x=back.width/2
    }
  }

  drawSprites();

  if(gameState===START){
  
    textSize(30)
    fill("white")
    text("PRESS SPACE TO START",850,50)
  
    if(keyDown(32)){
      gameState=PLAY
      console.log(2)
    }
  }
  if(gameState===PLAY){
    starticon.destroy()
    startback.destroy()

    lion.visible=true;
    bubble.visible=true;
    bubble2.visible=true;
    hunter.visible=true;

    textSize(15)
  fill("white")
  text("Ha,ha,ha!!",bubble.x-50,bubble.y-30)
  text("I am going to kill you.",bubble.x-70,bubble.y)

  textSize(15)
  fill("white")
  text("Oh no!I have to run.",bubble2.x-70,bubble2.y)

  textSize(25)
    fill("white")
    text("PRESS RIGHT ARROW TO CONTINUE",850,50);

    if(keyDown(RIGHT_ARROW)){
      gameState=PLAYING
    }
}
}

function SpawnStone(){
  if(frameCount%350===0){
    stone=createSprite(width-1,350,10,10)
    stone.addImage(stoneImg);
    stone.velocityX=-2
    stone.scale=0.2

    stoneGroup.add(stone)
  }
}

function SpawnCoin(){
  if(frameCount%100===0){
   coin=createSprite(width-1,Math.round(random(50,300)),10,10)
   coin.addImage(coinImg);
   coin.velocityX=-2
   coin.scale=0.1

   coinGroup.add(coin)
  }
}

function Spawnbird(){
  if(frameCount%200===0){
   bird=createSprite(width-1,Math.round(random(20,100)),10,10)
   bird.addImage(birdImg);
   bird.velocityX=-2
   bird.scale=0.3

   birdGroup.add(bird)
  }
}
