

// import kaboom lib
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

loadSprite("kartka","kartkaswiateczna.png")
loadSprite("renifer","renifer.png")
loadSound("cicha","cichanoc.mp3")

add([
    sprite("kartka")
])

const renifer = add([
    sprite("renifer"),
    pos(0,200)
])

onMouseRelease(()=>play("cicha"))

let wprawo = true 

renifer.onUpdate(()=>{
    if(wprawo && renifer.pos.x < 550)
    renifer.pos.x +=1

    else if(!wprawo && renifer.pos.x > 50) 
    renifer.pos.x -= 1

    else wprawo ^=true
})