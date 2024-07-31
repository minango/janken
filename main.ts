controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    player2 = 1
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    player2 = 2
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    player1 = 1
})
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    player1 = 2
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    player2 = 3
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (player1 == 1 && player2 == 1) {
        game.showLongText("グーあいこ", DialogLayout.Full)
    } else if (player1 == 2 && player2 == 2) {
        game.showLongText("チョキあいこ", DialogLayout.Full)
    } else if (player1 == 3 && player2 == 3) {
        game.showLongText("パーあいこ", DialogLayout.Full)
    } else if (player1 == 1 && player2 == 2) {
        game.showLongText("player1のグー勝利", DialogLayout.Full)
        game.gameOver(true)
    } else if (player1 == 1 && player2 == 3) {
        game.showLongText("player2のパー勝利", DialogLayout.Full)
        game.gameOver(true)
    } else if (player1 == 2 && player2 == 3) {
        game.showLongText("player1のチョキ勝利", DialogLayout.Full)
        game.gameOver(true)
    } else if (player1 == 2 && player2 == 1) {
        game.showLongText("player2のグー勝利", DialogLayout.Full)
        game.gameOver(true)
    } else if (player1 == 3 && player2 == 1) {
        game.showLongText("player1のパー勝利", DialogLayout.Full)
        game.gameOver(true)
    } else if (player1 == 3 && player2 == 2) {
        game.showLongText("player2のチョキ勝利", DialogLayout.Full)
        game.gameOver(true)
    }
})
controller.player1.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    player1 = 3
})
let player2 = 0
let player1 = 0
game.setDialogTextColor(8)
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . b . . . . . . . 
    . . . . . . . b d b . . . . . . 
    . . . . . . . c d c . . . . . . 
    . . . . . . . c 5 c . . . . . . 
    . . . . . . c d 5 d c . . . . . 
    . . . b c c d 5 5 5 d c c b . . 
    . . b d d 5 5 5 5 5 5 5 d d b . 
    . . . b c c d 5 5 5 d c c b . . 
    . . . . . . c d 5 d c . . . . . 
    . . . . . . . c 5 c . . . . . . 
    . . . . . . . c d c . . . . . . 
    . . . . . . . b d b . . . . . . 
    . . . . . . . . b . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
game.setDialogFrame(img`
    ...cc..............................cc.....
    ..c55c..bbbb...bbbbb...bbbbb......c55c....
    .cb55bcbdddbbbbbdddbbbbbdddbbbbbbcb55bc...
    b555555bbdddb111bdddb111bdddb11db555555b..
    bb5555bbbbdb11111bdb11111bdb1111bb5555bb..
    cb5555bcddd11111ddd11111ddd11111cb5555bc..
    .c5bb5c1111d111d111d111d111d111ddc5bb5c...
    .cbbbbc11111111111111111111111111cbbbbc...
    ..b1111111111111111111111111111111dddbb...
    ..b11111111111111111111111111111111dbbdb..
    ..bb1111111111111111111111111111111dbddb..
    .bbdb1d1111111111111111111111111111ddddb..
    .bdddd1111111111111111111111111111d1bdbb..
    .bddbd1111111111111111111111111111111bb...
    .bdb1d11111111111111111111111111111111b...
    .bb111d1111111111111111111111111111111b...
    ..b1111111111111111111111111111111d111bb..
    ..b11111111111111111111111111111111d1bdb..
    ..bb1111111111111111111111111111111dbddb..
    .bbdb1d1111111111111111111111111111ddddb..
    .bdddd1111111111111111111111111111d1bdbb..
    .bddbd1111111111111111111111111111111bb...
    .bdb1d11111111111111111111111111111111b...
    .bb111d1111111111111111111111111111111b...
    ..b1111111111111111111111111111111d111bb..
    ..b11111111111111111111111111111111d1bdb..
    ..bb1111111111111111111111111111111dbddb..
    .bbdb1d1111111111111111111111111111ddddb..
    .bdddd1111111111111111111111111111d1bdbb..
    .bddbd1111111111111111111111111111111bb...
    .bdbb111111111111111111111111111111111b...
    .bbbd111111111111111111111111111111111b...
    ..bcc11111111111111111111111111111dccdb...
    ..c55c1111111d111d111d111d111d1111c55cb...
    .cb55bcdd11111ddd11111ddd11111dddcb55bc...
    b555555bd1111bdb11111bdb11111bdbb555555b..
    bb5555bbdd11bdddb111bdddb111bdddbb5555bb..
    cb5555bcbbbbbbdddbbbbbdddbbbbbddcb5555bc..
    .c5bb5c......bbbbb...bbbbb...bbbbc5bb5c...
    .cbbbbc..........................cbbbbc...
    ..........................................
    ..........................................
    `)
game.splash("A…グー/上…チョキ/下…パー")
player1 = 1
player2 = 1
