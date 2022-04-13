basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.motorStop(maqueen.Motors.M2)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 25)
        basic.pause(200)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 25)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.motorStop(maqueen.Motors.M1)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 25)
        basic.pause(200)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 25)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 25)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    }
})
