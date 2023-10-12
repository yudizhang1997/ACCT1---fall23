function setup (){
    let myCanvas = createCanvas(600,600)
    myCanvas.parent("sketchHolder2")
    colorMode(HSB, TWO_PI, 1,1)
}

function draw(){
    background(0,0,0)
    console.log(millis())
    strokeWeight(10)
    noFill()
    for (let i = 0; i < 10; i++){
        let dim = 150+i*50
        let thisHue = (TWO_PI/10)*i
        stroke(thisHue, 0.8, 0.8)

        push ()
        translate (width * 0.5, height * 0.5)
        let angle = millis()*0.001*(i*0.1+1) // be the base

        rotate (sin(angle)*0.5)
        arc (0, 0, dim, dim, PI*0.75, TWO_PI*1.125)
        pop ()
    }
}