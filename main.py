mostrar_grafico = True
x = 2
y = 2

def on_forever():
    global mostrar_grafico
    if input.button_is_pressed(Button.A):
        mostrar_grafico = True
    elif input.button_is_pressed(Button.B):
        mostrar_grafico = False
    if  mostrar_grafico:
        grafico()
    else:
        show_drop()

def grafico():
    led.plot_bar_graph(input.temperature(), 50)

def show_drop():
    global x, y
    accX = input.acceleration(Dimension.X)
    accY = input.acceleration(Dimension.Y)
    led.plot(x, y)
    basic.pause(100)
    basic.clear_screen()

    if accX <= 150 and x > 0:
        x -= 1
    if accX > 150 and x < 4:
        x += 1
    if accY <= 150 and y > 0:
        y -= 1
    if accY > 150 and y < 4:
        y += 1

while True:
    on_forever()
