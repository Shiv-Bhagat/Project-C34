class Bobball{

    constructor(x,y,w,h){
        var options={
    isStatic:false,
    restitution:1,
              friction:0.5,
              density:0.1
        }
        this.x=x
        this.y=y
        this.w=w
        this.h=h
        this.body=Bodies.circle(x,y,w,options)
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        push ()
        fill ("blue")
    translate(pos.x,pos.y)
    ellipseMode(CENTER)
    ellipse(0,0,this.w*2,this.w*2)
    
        pop ()
    }
    }
    
       
    
