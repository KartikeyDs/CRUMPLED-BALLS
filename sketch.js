
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1,ground1;
var dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
var canavas =createCanvas(1000, 300);


	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(10,0,25);

  ground1 = new Ground(500,295,1000,15);

  dustbin1 = new Dustbin(770,283,130,15);

  dustbin2 = new Dustbin(700,250,15,80);

  dustbin3 = new Dustbin(830,250,15,80);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  paper1.display();

  ground1.display();
  
  dustbin1.display();

  dustbin2.display();

  dustbin3.display();

}



function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:50,y:-50});
  
	}
}