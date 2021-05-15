class Particle{
    constructor(x,y,radius){
    var options={
    restitution:0.8,
    friction:0.3,
    density:1
    }
    this.body=Bodies.circle(x,y,radius,options);
    World.add(world,this.body);
    this.radius=radius;
    this.color=color(random(0,255),random(0,255),random(0,255));   
    }
    display(){
        push();
    var angle = this.body.angle;
    translate(this.body.position.x , this.body.position.y);
    rotate(angle);
    ellipseMode(RADIUS);
    fill(this.color);
    ellipse(0,0,this.radius);    
        pop();    
}
    }