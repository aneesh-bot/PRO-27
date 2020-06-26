class Chain{
  constructor(bodyA, pointB){
      var options = {
          bodyA: bodyA,
          pointB: pointB,
          length: 375
      }
     
      this.pointB = pointB
      this.sling = Constraint.create(options);
      World.add(world, this.sling);
  }

  display(){
     
          var pointA = this.sling.bodyA.position;
          var pointB = this.pointB;
         
              strokeWeight(6);

              stroke(255);

              line(pointA.x, pointA.y, pointB.x, pointB.y);
         
  }
  
}