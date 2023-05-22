class Obj  {
    constructor(args){
      // this.p = args.p || {x: random(width), y:random(height)}
      this.p = args.p || createVector(random(width),random(height) )
      this.v = createVector(random(-1,1),random(-1,1))
      this.size = random(3,5)
      this.color = random(fill_colors)
      this.stroke = random(stroke_colors)
  
    }
    draw()
    {
      push()
        translate(this.p.x,this.p.y)
        scale((this.v.x<0?1:-1),-1)
        fill(this.color)
        stroke(this.stroke)
        strokeWeight(3)
        beginShape()
          for(var i = 0; i < points.length; i= i+1){
            // line(points[i][0]*this,size, points[i][1]*this.size,points[i+1][0]*this.size, points[i+1][1]*this.size)
            curveVertex(points[i][0]*this.size, points[i][1]*this.size)
          }
        endShape(CLOSE)
  
      pop()
    }
    update(){
      
      // this.p.x = this.p.x + this.v.x
      // this.p.y = this.p.y + this.v.y
      this.p.add(this.v)
  
      // let mouseV = createVector(mouseX,mouseY)
      // let delta = mouseV.sub(this.p).limit(this.v.mag()*2)
      // this.p.add(delta)
  
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
      if(d<this.size*4){
        return true
      }
      else{
        return false
      }
  
    }
  }