let angle = 0
servos.P0.setRange(10, 170)
basic.forever(function () {
    for (let index = 0; index < 32; index++) {
        angle = angle - 5
        servos.P0.setAngle(angle)
        basic.pause(200)
    }
    angle = 170
    for (let index3 = 0; index3 <= 16; index3++) {
        angle = index3 * 10 + 10
        servos.P0.setAngle(angle)
        basic.pause(200)
    }
})
