let index = 0
let angle = 0
servos.P0.setRange(10, 170)
basic.forever(function () {
	
})
basic.forever(function () {
    for (let index = 0; index < 32; index++) {
        angle = angle - 5
        servos.P0.setAngle(angle)
        basic.pause(200)
    }
    angle = 170
    for (let index = 0; index <= 16; index++) {
        angle = index * 10 + 10
        servos.P0.setAngle(angle)
        basic.pause(100)
    }
    index = 0
    for (let index = 0; index <= 32; index++) {
        angle = index * (-5 + 10)
    }
    servos.P0.setAngle(angle)
})
