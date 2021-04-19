class Ball {
  constructor(x,y,radius){
      var options={
          isStatic:false,
          friction:0.4,
          density:0.3,
         restitution:1.2,
      }


      this.x=x;
      this.y=y;
      this.r=radius;


      this.body=Bodies.circle(this.x,this.y,this.r/2,options)

      World.add(world,this.body);
  }
  display(){
    var pos =this.body.position;
    var pos = this.body.position;
    
    push();
    translate(pos.x,pos.y);
    strokeWeight(3);
    stroke("blue");
    fill("purple");
    ellipseMode(CENTER);
    ellipse(0,0,this.r,this.r)
    pop();
  }
};
