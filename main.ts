input.onButtonPressed(Button.A, function () {
    speler.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    speler.change(LedSpriteProperty.X, 1)
})
let berenklauw: game.LedSprite = null
let speler: game.LedSprite = null
speler = game.createSprite(2, 4)
let pauze = 1000
basic.forever(function () {
    berenklauw = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(pauze)
        berenklauw.change(LedSpriteProperty.Y, 1)
    }
    if (berenklauw.isTouching(speler)) {
        game.addScore(1)
        berenklauw.delete()
        pauze += -50
    } else {
        game.gameOver()
    }
})
