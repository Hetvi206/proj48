
    class Launcher { constructor(pointA,bodyB) {
        var options={
              pointA:pointA,
              bodyB:bodyB,
              stiffness: 0.04,
              length: 10
          }
          this.Launch = Constraint.create(options);
          this.pointA = pointA;
          World.add(world, this.Launch);
          console.log(this.Launch);
       }
          fly(){
              this.Launch.bodyB =null;
          }
          
  attach(body){
      this.Launch.bodyB=body;
       }
  
  display() {
   if(this.Launch.bodyB) {
   var pointB = this.Launch.bodyB.position;
   var pointA = this.pointA;
  
  strokeWeight(3);
  //line(pointA.x, pointA.y, pointB.x, pointB.y);

   }
   }
  }
  