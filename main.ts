bluetooth.onBluetoothConnected(function () {
    while (true) {
        basic.showIcon(IconNames.Heart)
        basic.pause(200)
        basic.showIcon(IconNames.Chessboard)
        basic.pause(200)
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(200)
    }
})
basic.showIcon(IconNames.No)
