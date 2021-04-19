
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;
	
	bob1=new Ball(300,345,75);
	bob2=new Ball(350,347,75);
	bob3=new Ball(400,350,75);
	bob4=new Ball(450,347,75);
	bob5=new Ball(500,345,75);

  ground1 = new Roof(400,100,width/2,40);
  sling1= new Chain(bob1.body,ground1.body,-150,0);
  sling2= new Chain(bob2.body,ground1.body,-25*3,0);
  sling3= new Chain(bob3.body,ground1.body,-0*3,0);
  sling4= new Chain(bob4.body,ground1.body,25*3,0);
  sling5= new Chain(bob5.body,ground1.body,50*3,0);


	Engine.run(engine);
  
}


function draw() {
  background("black");

  rectMode(CENTER);
  Engine.update(engine);
  
  
  ground1.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
 
  bob1.display();
  bob2.display();
  bob3.display();
  bob3.display();
  bob4.display();
  bob5.display();

  drawSprites ();
}

function keyPressed() { 
	if (keyCode === 32) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:0})} 
} 




