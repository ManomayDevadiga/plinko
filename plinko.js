class Plinko{
constructor(x,y){
var options={
    isStatic:true
}
this.r=12;
this.body=Bodies.circle(x,y,12,options);
World.add(world,this.body);
}

display(){
    var pos=this.body.position;
    fill("white");
    ellipseMode(RADIUS);
    ellipse(pos.x,pos.y,this.r,this.r);
}





}