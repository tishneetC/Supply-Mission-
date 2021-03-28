var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var Box1, Box2, Box3; 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	Box1 = createSprite(380,650, 200, 20);
	Box1.shapeColor = "red" 
	Box2 = createSprite(290,600, 20, 100); 
	Box2.shapeColor = "red" 
	Box3 = createSprite(470,600, 20, 100);
	Box3.shapeColor = "red"  


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Box1 = Bodies.rectangle(390, 650 , 200, 20 , {isStatic:true} );
	World.add(world,Box1);

	Box2 = Bodies.rectangle(290, 600 , 20, 100 , {isStatic:true} );
	World.add(world,Box2);

	Box3 = Bodies.rectangle(470, 600 , 20, 100 , {isStatic:true} );
	World.add(world,Box3);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.


	Matter.Body.setStatic(packageBody,false); 
    
  }
}



