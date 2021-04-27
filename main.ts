bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
})
blockytalky.onReceivedString(function (key, receivedString) {
    if (receivedString == "ver") {
        basic.showIcon(IconNames.Yes)
        action = 1
        figer = input.acceleration(Dimension.X)
    }
    if (receivedString == "dever") {
        basic.showIcon(IconNames.No)
        action = 0
        blockytalky.sendNumber("acc", 0)
    }
})
let figer = 0
let action = 0
action = 0
basic.showIcon(IconNames.SmallSquare)
basic.forever(function () {
    while (action == 1) {
        if (Math.abs(figer) >= Math.abs(input.acceleration(Dimension.Y) + 50)) {
            blockytalky.sendNumber("acc", input.acceleration(Dimension.X))
        }
    }
    if (action == 0) {
        blockytalky.sendNumber("acc", 0)
    }
})
