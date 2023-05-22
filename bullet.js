
class Bullet{
    constructor(args){
        this.r = args.r || 10
        this.p = args.p || shipP.copy()
        this.v = args.v || createVector(mouseX-width/2,mouseY-height/2).limit(10)
        this.color = args.color || "red"
    }
    draw(){
        push()
            translate(this.p.x,this.p.y)
            fill(this.color)
            noStroke()
            ellipse(0,0,this.r)
            // rectMode(CENTER)
            // rect(0,0,20,40)
            // triangle()
        pop()

    }
    update(){
        this.p.add(this.v)

    }
}