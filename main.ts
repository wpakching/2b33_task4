let x = 0
let y = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        led.plot(x, y)
        basic.pause(300)
        x += 1
    }
    if (x > 4) {
        x = 0
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        led.plot(x, y)
        basic.pause(300)
        y += 1
    }
})
