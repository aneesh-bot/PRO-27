const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Render = Matter.Render;

var bob1;//,bob2,bob3,bob4,bob5;
var string1,string2,string3,string4,string5;
var roof1;//,roof2,roof3,roof4,roof5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Ball(150,450,120);
	bob2 = new Ball(275,450,120);
	bob3 = new Ball(width/2,450,120);
	bob4 = new Ball(525,450,120);
	bob5 = new Ball(650,450,120);

	roof1 = new Roof(width/2,100,750,75);
	/*roof2 = new Roof(275,100,160,75);
	roof3 = new Roof(400,100,160,75);
	roof4 = new Roof(525,100,160,75);
	roof5 = new Roof(645,100,160,75);*/

	string1 = new Chain(bob1.body,{x: 150, y: 100});
	string2 = new Chain(bob2.body,{x: 275, y: 100});
	string3 = new Chain(bob3.body,{x: width/2, y: 100});
	string4 = new Chain(bob4.body,{x: 525, y: 100});
	string5 = new Chain(bob5.body,{x: 650, y: 100});

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);

  roof1.display();
  /*roof2.display();
  roof3.display();
  roof4.display();
  roof5.display();*/

  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === 49) {
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x: -500,y: 0});
	}

	if (keyCode === 50) {
		Matter.Body.applyForce(bob2.body,bob2.body.position,{x: -500,y: 0});
	}

	if (keyCode === 51) {
		Matter.Body.applyForce(bob3.body,bob3.body.position,{x: -500,y: 0});
	}

	if (keyCode === 52) {
		Matter.Body.applyForce(bob4.body,bob4.body.position,{x: -500,y: 0});
	}

	if (keyCode === 53) {
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x: -500,y: 0});
	}

	if (keyCode === 54) {
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x: 500,y: 0});
	}

	if (keyCode === 55) {
		Matter.Body.applyForce(bob2.body,bob2.body.position,{x: 500,y: 0});
	}

	if (keyCode === 56) {
		Matter.Body.applyForce(bob3.body,bob3.body.position,{x: 500,y: 0});
	}

	if (keyCode === 57) {
		Matter.Body.applyForce(bob4.body,bob4.body.position,{x: 500,y: 0});
	}

	if (keyCode === 48) {
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x: 500,y: 0});
	}
	}


