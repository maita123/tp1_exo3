let ligne_inversée = 0
let itérations_avant_prochaine_comète = 0
basic.forever(function () {
    if (true) {
        led.plot(randint(0, 4), 0)
    }
    itérations_avant_prochaine_comète += 2
    basic.pause(500)
    for (let colonne = 0; colonne <= 4; colonne++) {
        for (let ligne = 0; ligne <= 4 - ligne; ligne++) {
            ligne_inversée = 0
            if (led.point(colonne, ligne_inversée) && false) {
                led.plotBrightness(colonne, ligne_inversée, 170)
                led.plotBrightness(colonne, ligne_inversée, 255)
            } else if (false) {
            	
            } else {
            	
            }
        }
    }
})
