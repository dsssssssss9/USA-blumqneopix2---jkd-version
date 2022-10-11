function doMode () {
    if (uartdata == "S") {
        for (let index = 0; index < 10; index++) {
            pins.digitalWritePin(DigitalPin.P1, 0)
            basic.pause(100)
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.pause(100)
        }
    } else {
        if (uartdata == "c") {
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P2, 0)
        } else {
            if (uartdata == "G") {
                strip.clear()
                strip.show()
                strip.showColor(neopixel.colors(NeoPixelColors.Red))
                strip.show()
            } else {
                if (uartdata == "H") {
                    strip.clear()
                    strip.show()
                    strip.showColor(neopixel.colors(NeoPixelColors.Green))
                    strip.show()
                } else {
                    if (uartdata == "I") {
                        strip.clear()
                        strip.show()
                        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
                        strip.show()
                    } else {
                        if (uartdata == "J") {
                            strip.clear()
                            strip.show()
                            strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
                            strip.show()
                        } else {
                            if (uartdata == "K") {
                                strip.clear()
                                strip.show()
                                strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
                                strip.show()
                            } else {
                                if (uartdata == "L") {
                                    strip.clear()
                                    strip.show()
                                    strip.showColor(neopixel.colors(NeoPixelColors.Purple))
                                    strip.show()
                                } else {
                                    if (uartdata == "M") {
                                        strip.clear()
                                        strip.show()
                                        strip.showColor(neopixel.colors(NeoPixelColors.Black))
                                        strip.show()
                                    } else {
                                    	
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
function doMode2 () {
	
}
bluetooth.onBluetoothConnected(function () {
    basic.pause(1000)
    connected = true
    while (connected) {
        uartdata = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
        doMotors()
        doMode()
    }
})
bluetooth.onBluetoothDisconnected(function () {
    connected = false
})
input.onButtonPressed(Button.A, function () {
	
})
function doMotors () {
    if (uartdata == "A") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        speed,
        SuperBit.enMotors.M3,
        speed
        )
    } else if (uartdata == "B") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -1 * speed,
        SuperBit.enMotors.M3,
        -1 * speed
        )
    } else if (uartdata == "C") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        speed,
        SuperBit.enMotors.M3,
        0
        )
    } else if (uartdata == "D") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        0,
        SuperBit.enMotors.M3,
        speed
        )
    } else if (uartdata == "E") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        speed,
        SuperBit.enMotors.M3,
        -1 * speed
        )
    } else if (uartdata == "F") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -1 * speed,
        SuperBit.enMotors.M3,
        speed
        )
    } else if (uartdata == "0") {
        SuperBit.MotorStopAll()
    }
}
let uartdata = ""
let strip: neopixel.Strip = null
let speed = 0
let connected = false
basic.showIcon(IconNames.Square)
led.enable(false)
bluetooth.setTransmitPower(7)
bluetooth.startUartService()
connected = false
speed = 100
strip = neopixel.create(DigitalPin.P1, 16, NeoPixelMode.RGB)
strip.setBrightness(32)
strip.clear()
strip.show()
