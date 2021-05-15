const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world,ground,plinko=[],divisions=[],particles=[],divisionheight=300 ;
var y = 100 ;

function setup() {
  engine = Engine.create();
  world = engine.world;
   
  createCanvas(480,800);
  //createSprite(400, 200, 50, 50);
  ground= new Ground(240,790,480,5);
  for(var d = 0 ; d<= width ; d+=80){
  divisions.push(new Divisions(d,height-divisionheight/2,10,divisionheight));
  }
  for(var p = 0 ; p <= width ; p += 55 ){
    plinko.push(new Plinko (p , y , 10));
    plinko.push(new Plinko (p+15 , 200 , 10));
    plinko.push(new Plinko (p+30 , 300 , 10));
  }
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
//  drawSprites();
  ground.display();
  console.log(divisions);
  console.log(plinko);
  for(var l = 0 ;  l <divisions.length ; l++ ){
    divisions[l].display();
  }

  for(var p = 0 ;  p <plinko.length ; p++ ){
    plinko[p].display();
  }
  
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10 ));
  }
  console.log(particles);
  for(var n = 0 ;  n <particles.length ; n++ ){
    particles[n].display();
  }

}