input.onButtonPressed(Button.A, function () {
    led.plotBarGraph(
    input.lightLevel(),
    255
    )
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(input.lightLevel())
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 254; index++) {
        led.plotBarGraph(
        index,
        255
        )
        basic.pause(50)
    }
})
basic.forever(function () {
	
})
