let mostrar_grafico = true
let x = 2
let y = 2
function on_forever() {
    
    if (input.buttonIsPressed(Button.A)) {
        mostrar_grafico = true
    } else if (input.buttonIsPressed(Button.B)) {
        mostrar_grafico = false
    }
    
    if (mostrar_grafico) {
        grafico()
    } else {
        show_drop()
    }
    
}

function grafico() {
    led.plotBarGraph(input.temperature(), 50)
}

function show_drop() {
    
    let accX = input.acceleration(Dimension.X)
    let accY = input.acceleration(Dimension.Y)
    led.plot(x, y)
    basic.pause(100)
    basic.clearScreen()
    if (accX <= 150 && x > 0) {
        x -= 1
    }
    
    if (accX > 150 && x < 4) {
        x += 1
    }
    
    if (accY <= 150 && y > 0) {
        y -= 1
    }
    
    if (accY > 150 && y < 4) {
        y += 1
    }
    
}

while (true) {
    on_forever()
}
