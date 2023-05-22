
let points = [[-1, 10], [1, 10], [3, 11],[4,9],[2,-1],[3,-3],[3,-6],[3,-7],[-5,-7],[-5,-6],[-4,-5],[-2,5],[-3,6],[-3,7],[-1, 10]];
var fill_colors = "dad7cd-a3b18a-588157-3a5a40-344e41".split("-").map(a=>"#"+a);
var stroke_colors = "064789-427aa1-ebf2fa-679436-a5be00".split("-").map(a=>"#"+a)
var score

function preload() {
  rocket_sound  = loadSound("sound/rocket.wav")
  bullet_sound = loadSound("sound/bullet.wav")
  

}


var ball
var balls = []
var bullet
var bullets = []
var monster
var monsters = []
var score = 0
var shipP

function setup() {
  createCanvas(windowWidth, windowHeight);
  shipP = createVector(width/2,height/2)

  for(var j = 0;j<40;j=j+1)
  {
    ball = new Obj({})
    balls.push(ball)
  }
  for(var j = 0;j<20;j=j+1)
  {
    monster = new Monster({})
    monsters.push(monster)
  }
}


function draw() {
  background(220);
  // for(var k = 0;balls.length; k = k +1){
  //   ball = balls[k]
  //   ball.draw()
  //   ball.update()
  // }
  if (keyIsPressed){
    if (key == "ArrowLeft"|| key == "a"){
      shipP.x = shipP.x-5
  
    }
    if (key == "ArrowRight" || key == "d"){
      shipP.x = shipP.x+5
  
    }
    if (key == "ArrowUp" || key == "w"){
      shipP.y = shipP.y-5
  
    }
    if (key == "ArrowDown"|| key == "s"){
      shipP.y = shipP.y+5
  
    
    }
  }
  for(let ball of balls){
    ball.draw()
    ball.update()

    for(let bullet of bullets){
      if(ball.isBallInRanger(bullet.p.x,bullet.p.y))
      {
        score = score - 1
        rocket_sound.play()
        balls.splice(balls.indexOf(ball),1)
        bullets.splice(bullets.indexOf(bullet),1)
      }
    }
  }

  for(let bullet of bullets){
    bullet.draw()
    bullet.update()
  }
  
  for(let monster of monsters){
    if(monster.IsDead && monster.timenum>=6){
      monsters.splice(monsters.indexOf(monster),1)
    }
    monster.draw()
    monster.update()

    for(let bullet of bullets){
      if(monster.isBallInRanger(bullet.p.x,bullet.p.y))
      {
        score = score +1
        // rocket_sound.play()
        // monsters.splice(monsters.indexOf(monster),1)
        monster.IsDead = true
        bullets.splice(bullets.indexOf(bullet),1)
      }
    }
  
  }


  textSize(50)
  text(score,50,50)
  push()
    let dx = mouseX-width/2
    let dy = mouseY-height/2
    let angle = atan2(dy,dx)

    // translate(width/2,height/2)
    translate(shipP.x,shipP.y)// 砲台位置
    rotate(angle)
    noStroke()
    fill("#ffc03a")
    ellipse(0,0,65)
    fill("#ff000")
    triangle(50,0,-25,-25,-25,25)
  pop()

}

function mousePressd() {
  // 按下滑鼠產生一個物件
  // ball = new Obj ({   
  //   p:{ x: mouseX, y: mouseY}
  // })
  // balls.push(ball)
  // ---------------------------------------
//   for(let ball of balls){
//     if(ball.isBallInRanger()){
//       score = score + 1

//       balls.splice(balls.indexOf(ball),1)
//     }
//   }


bullet = new Bullet({})
bullets.push(bullet)
bullet_sound.play()

}
function keyPressed(){
  if(key==" "){
    bullet = new Bullet({})
    bullets.push(bullet)
    bullet_sound.play() 
  }


}