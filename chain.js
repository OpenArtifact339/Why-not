class Chain{
    constructor(firstBody,secBody){
        var options = {
            bodyA:firstBody,
            bodyB:secBody,
            length:10,
            stiffnes:0.05 
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }//construstor ends

    display(){
        var PointA = this.chain.bodyA.position;
        var PointB = this.chain.bodyB.position;
        line (PointA.x,PointA.y,PointB.x,PointB.y);
    }


}