class ground {
    constructor(){
        var options = {
            isStatic: true
        }

        this.groundBody = Bodies.rectangle(100,690,1500,100,options);
        World.add(world,this.groundBody);
    }

    display(){
        fill("SaddleBrown")
        rect(this.groundBody.position.x,this.groundBody.position.y,1500,100)
    }
}