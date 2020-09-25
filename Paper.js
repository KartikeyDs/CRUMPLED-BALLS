class Paper{
constructor(r){

var options = {
isStatic:false,
'restitution':0.3,
'friction':0.5,
'density':4
}



this.r = r;

this.body =  Bodies.circle(200,200,r,options);
World.add(world, this.body)
}
display() {
var pos = this.body.position;
push()
translate(pos.x,pos.y)
ellipseMode(CENTER)
fill(255,0,255);
ellipse(10,0,25);
pop();
}
};