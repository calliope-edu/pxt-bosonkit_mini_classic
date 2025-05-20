enum BosonAnalogPins {
    P1 = AnalogPin.P1,
    P2 = AnalogPin.P2,
    P26 = AnalogPin.C16,
    P27 = AnalogPin.C17
}


enum BosonPins {
    P0 = DigitalPin.P0,
    P1 = DigitalPin.P1,
    P2 = DigitalPin.P2,
    P3 = DigitalPin.P3,
    P26 = DigitalPin.C16,
    P27 = DigitalPin.C17
}
//% weight=10 color=#063470 icon="\uf085" block="Boson Kit Classic"
namespace BosonKitV3 {

    //% block="set digital value for fan on %pin to %level"
    //% blockId="writeDigitalPin"
    //% block.loc.de="setze digitalen Wert für Ventilator an %pin auf %level"
    //% level.min=0 level.max=1 level.defl=1
    export function writeDigitalPin(pin: BosonPins, level: number): void {
        pins.digitalWritePin(<number>pin, level);
    }
    //% block="set analog value for fan on %pin to %level"
    //% blockId="writeAnalogPin"
    //% block.loc.de="setze analogen Wert für Ventilator an %pin auf %level"
    //% level.min=0 level.max=1023 level.defl=511
    export function writeAnalogPin(pin: BosonPins, level: number): void {
        pins.analogWritePin(<number>pin, level);
    }

    //% blockId=readAnalogSensor weight=100
    //% block="analog sensor value at pin %pin"
    //% block.loc.de="analoge Werte von Sensor an %pin"
    export function readAnalogSensor(pin: BosonAnalogPins): number {
        return pins.analogReadPin(<number>pin);
    }

    //% blockId=readDigitalSensor weight=100
    //% block="digital sensor value at pin %pin"
    //% block.loc.de="digitale Werte von Sensor an %pin"
    export function readDigitalSensor(pin: BosonPins): number {
        return pins.digitalReadPin(<number>pin);
    }
    //% blockId="writeServo"
    //% block="servo write pin %pin to %level"
    //% block.loc.de="setze Winkel von Servo %pin auf %level°"
    //% level.min=0 level.max=180 level.defl=90
      export function writeServo(pin: BosonPins, level: number): void {
        return pins.servoWritePin(<number>pin,level)
    }



    //% blockId="onEventOnPin"
    //% block="on event on pin %pin"
    //% block.loc.de="wenn Ereignis an Pin %pin "
    export function onEventOnPin(pin: BosonPins, handler: () => void): void {
        pins.setPull(<number>pin, PinPullMode.PullUp);
        input.onPinTouchEvent(<number>pin, input.buttonEventValue(ButtonEvent.Up), handler);
    }
}
