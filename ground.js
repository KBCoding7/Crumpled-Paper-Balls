class Ground
{
    constructor(x, y, w, h);
    {
        let options = {
            isStatic = true
        };

        this.Body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }

    show() {
        var pos = this.body.position;
        push()
        rectMode(CENTER)
        stroke(255)
        fill(127)
        rect(this.y, this.x, this.w, this.h);
        pop();
    };
    

    
}
