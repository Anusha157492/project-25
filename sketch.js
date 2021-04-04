
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperIMG, dustbinIMG

var engine,world;



function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,220,50);
	ground = new Ground(400,480,800,20);
	leftside = new Dustbin(550,620,20,100);
	bottom = new Dustbin(610,660,100,20);
	rightside = new Dustbin(670,620,20,100);
	 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  Engine.update(engine);

  paper.display();
  ground.display();
  
  leftside.display()
  bottom.display();
  rightside.display();
   
   drawSprites();
 
}

function keyPressed(){
if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body, paper.body.position, {x:230, y: -230})
}
	
}


