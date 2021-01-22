while True:
    print("Sound Level: " + input.sound_level())
    print("Light Level: " + input.light_level())
    if (input.light_level()) < 20:
        light.set_all(light.rgb(250,250,250))
    if (input.sound_level()) > 40:
        light.set_all(light.rgb(250,250,250))
    else:
        light.clear()
        