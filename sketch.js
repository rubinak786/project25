var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ground,paper;
var box1,box2,box3;

function setup() {
	createCanvas(1300,400);

	engine = Engine.create();
	world = engine.world;
	
	paper = new Paper(150,450,50)

	ground = new Ground(650,height,1300,30);

	box1=new Dustbin(800,670,180,20);
	box2=new Dustbin(720,590,20,180);
	box3=new Dustbin(920,590,20,140);

	//Render for Matter.js to debug the code

	/*var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });

	  Render.run(render);*/


}

function draw() {

	Engine.update(engine);
	background("Deepskyblue");
	
	paper.display();
	ground.display();

	box1.display();
	box2.display();
	box3.display();


	textSize(30);
	text ("Let's Keep Our City Clean", 475,75)

	fill("BLACK");
	strokeWeight(5)
	textSize(20);
	text ("TRASHBIN", 745,400)

	//Used to display x and y coordinates on canvas
	//text(mouseX+ "," +mouseY,10,15);
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  
	}
}


