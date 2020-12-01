
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper1 = new paper();

	dustbin1 = new dustbin(550,580,30,150);
	dustbin2 = new dustbin(620,630,150,30);
	dustbin3 = new dustbin(680,580,30,150);


	ground1 = new ground();
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  paper1.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  ground1.display();

  drawSprites();

  keyPressed();
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:150,y:-150});
	}
}


