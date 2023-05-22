var monster_colors = "dad7cd-a3b18a-588157-3a5a40-344e41".split("-").map(a=>"#"+a);


class Monster{
    constructor(args){
        // this.p = args.p || {x: random(width), y:random(height)}
        this.r = args.r || random(50,70)
        this.p = args.p || createVector(random(width),random(height) )
        this.v = args.v || createVector(random(-1,1),random(-1,1) )
        this.color =args.color || random(monster_colors)
        this.mode = random(["happy","bad"])
        this.IsDead = false // 代表怪物活著
        this.timenum = 0

    
      }
      draw(){
        if(this.IsDead==false){
        push()
            translate(this.p.x,this.p.y)
            fill(this.color)
            noStroke()
            ellipse(0,0,this.r)
            if(this.mode == "happy"){
              fill(255)
              ellipse(0,0,this.r/2)
              fill(0)
              ellipse(0,0,this.r/3)
            }else{
              fill(255)
              arc(0,0,this.r/2,this.r/2,0,PI)
              fill(0)
              arc(0,0,this.r/3,this.r/3,0,PI)
            }
            stroke(this.color)
            strokeWeight(4)
            noFill();
            for(var j = 0; j<8 ;j++){
                rotate(PI/4)
                beginShape()
                  for (var i = 0 ; i<(this.r/2) ; i++){
                      vertex(this.r/2+i,sin(i/5+frameCount/10)*10)
                  }
                endShape()
            }
        pop()
       }else{
            this.timenum = this.timenum + 1
            push()
                translate(this.p.x,this.p.y)
                fill(this.color)
                noStroke()
                ellipse(0,0,this.r)
                stroke(255)
                line(-this.r/3,0,this.r/3,0)
                //產生腳
                stroke(this.color)
                strokeWeight(4)
                noFill();
                for(var j = 0; j<8 ;j++){
                    rotate(PI/4)
                    line(-this.r/2,0,this.r,0)

                }


            pop()






       }
        
      }
      update(){
        this.p.add(this.v)
        if(this.p.x<0 || this.p.x>width)
        {
            this.v.x = -this.v.x
        }
        if(this.p.y<=0 || this.p.y>=height) 
        {
            this.v.y = -this.v.y
        }

      }
      isBallInRanger(x,y){
        let d = dist(x,y,this.p.x,this.p.y)
        if(d<this.r/2){
          return true
        }
        else{
          return false
        }
    
      }

}