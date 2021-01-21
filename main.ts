while (true) {
    console.log("Sound Level: " + input.soundLevel())
    console.log("Light Level: " + input.lightLevel())
    if (input.lightLevel() >= 14) {
        light.setAll(light.rgb(250, 250, 250))
    }
    
    if (input.soundLevel() >= 14) {
        light.setAll(light.rgb(250, 250, 250))
    }
    
}
