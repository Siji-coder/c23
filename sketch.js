const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var ground,ball;
var myEngine,myworld;
var box1,box2;
function setup() {
  createCanvas(1200,600);
  myEngine=Engine.create();
  myworld=myEngine.world;
  
 
  
  box1=new Box(200,100,40,20);
  box2=new Box(175,50,40,70);
 
  ground=new Ground(40,480,1200,10);
  console.log(box2.body);
  //createSprite(300, 300, 50, 50);
}

function draw() {
  background("black");  
  Engine.update(myEngine);
  
 // rectMode(CENTER);
  box1.display();
  box2.display();
  ground.display();
 
}