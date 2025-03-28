basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    if (pins.analogReadPin(AnalogPin.P0) < 50 && pins.analogReadPin(AnalogReadWritePin.P2) < 50) {
        basic.showNumber(321)
        for (let index = 0; index < 3; index++) {
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            music.rest(music.beat(BeatFraction.Whole))
        }
        basic.pause(1000)
        for (let index = 0; index < 2; index++) {
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            music.rest(music.beat(BeatFraction.Whole))
        }
        basic.pause(1000)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.pause(1000)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
    }
})
