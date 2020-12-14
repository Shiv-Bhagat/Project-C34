class Chain{
    constructor(bodyA,pointB){
        var prop = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 1,
            length : 200
        }
        this.chain=Constraint.create(prop);
        World.add(world,this.chain)
    }
    display(){
        push ()
        stroke("orange")
        strokeWeight(4)
        line (this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.pointB.x,this.chain.pointB.y)
        pop ()

    }
}