class Ball {
  constructor(x, y, radius) {
    var options = {
        'restitution':1.25,
        'friction':0.25,
        'density':1.2,

    }
     this.body = Bodies.circle(x, y, radius/2, options);
    this.width = radius;
    this.height = radius;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
   /* var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);*/
    strokeWeight(3);
    stroke("blue");
    rectMode(CENTER);
    fill("purple");
    ellipse(pos.x, pos.y, this.width, this.height);
    pop();
  }
};
