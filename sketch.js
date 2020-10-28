const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var ground
var particles=[];
var plinko=[];
var divisions=[];
var divisionHeight=300;

function setup() {
  createCanvas(1500,800);
  engine = Engine.create();
  world = engine.world
  ground=new Ground(240,790,15000,30);
  Engine.update(engine);
for (var k = 0;k<=width;k=k+80){
  divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
}
  
for(var j=30;j<=width;j=j+50){
  plinko.push(new Plinko(j,70))
}
for(var j=30;j<=width;j=j+50){
  plinko.push(new Plinko(j,170))
}
for(var j=30;j<=width;j=j+50){
  plinko.push(new Plinko(j,270))
}
for(var j=30;j<=width;j=j+50){
  plinko.push(new Plinko(j,370))
}



}

function draw() {
  background(0);
  
  
  
      
for(var k=0;k<divisions.length;k++){
  divisions[k].display();
}
for(var i=0;i<plinko.length;i++){
  plinko[i].display();
}
//for (var j = 0; j < particles.length; j++) {
   
  //particles[j].display();
//}
if(frameCount%60===0){
  particles.push(new Particles(random(width/2-10,width/2+10),10,10));
  }
ground.display();



  drawSprites();
}