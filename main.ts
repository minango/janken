controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    player2 = 1
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    player2 = 2
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    player1 = 1
})
info.onCountdownEnd(function () {
    if (player1 == 1 && player2 == 1) {
        game.showLongText("あいこ", DialogLayout.Full)
        info.startCountdown(30)
    } else if (player1 == 2 && player2 == 2) {
        game.showLongText("あいこ", DialogLayout.Full)
        info.startCountdown(30)
    } else if (player1 == 3 && player2 == 3) {
        game.showLongText("あいこ", DialogLayout.Full)
        info.startCountdown(30)
    } else if (player1 == 1 && player2 == 2) {
        game.showLongText("player1の勝利", DialogLayout.Full)
        game.gameOver(true)
    } else if (player1 == 1 && player2 == 3) {
        game.showLongText("player2の勝利", DialogLayout.Full)
        game.gameOver(true)
    } else if (player1 == 2 && player2 == 3) {
        game.showLongText("player1の勝利", DialogLayout.Full)
        game.gameOver(true)
    } else if (player1 == 2 && player2 == 1) {
        game.showLongText("player2の勝利", DialogLayout.Full)
        game.gameOver(true)
    } else if (player1 == 3 && player2 == 1) {
        game.showLongText("player1の勝利", DialogLayout.Full)
        game.gameOver(true)
    } else if (player1 == 3 && player2 == 2) {
        game.showLongText("player2の勝利", DialogLayout.Full)
        game.gameOver(true)
    }
})
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    player1 = 2
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    player2 = 3
})
controller.player1.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    player1 = 3
})
let player2 = 0
let player1 = 0
game.splash("A…グー/上…チョキ/下…パー")
player1 = 1
player2 = 1
info.startCountdown(30)
