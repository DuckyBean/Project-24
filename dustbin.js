class dustbin {
    constructor(x,y,width,height){
        var options = {
            isStatic: true,
        }

        this.dustbinBody = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.dustbinBody);
        this.width = width;
        this.height = height;
    }

    display(){
        push();
        fill("red");
        stroke("red");
        rect(this.dustbinBody.position.x,this.dustbinBody.position.y,this.width,this.height);
        pop();
    }
}