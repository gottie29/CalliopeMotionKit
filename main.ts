radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        links()
    } else if (receivedNumber == 1) {
        rechts()
    } else if (receivedNumber == 2) {
        geradeaus()
    } else {
        anhalten()
    }
})
function geradeaus () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, Geschwindigkeit)
    maqueen.writeLED(maqueen.Led.LedAll, maqueen.LedSwitch.LedOn)
}
function anhalten () {
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.writeLED(maqueen.Led.LedAll, maqueen.LedSwitch.LedOff)
}
function links () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, Geschwindigkeit)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, Geschwindigkeit)
    maqueen.writeLED(maqueen.Led.LedLeft, maqueen.LedSwitch.LedOn)
    maqueen.writeLED(maqueen.Led.LedRight, maqueen.LedSwitch.LedOff)
}
function rechts () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, Geschwindigkeit)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, Geschwindigkeit)
    maqueen.writeLED(maqueen.Led.LedRight, maqueen.LedSwitch.LedOn)
    maqueen.writeLED(maqueen.Led.LedLeft, maqueen.LedSwitch.LedOff)
}
let Geschwindigkeit = 0
radio.setGroup(1)
Geschwindigkeit = 20
