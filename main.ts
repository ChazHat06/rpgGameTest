enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Staircase = SpriteKind.create()
    export const ExPEvent = SpriteKind.create()
    export const Teleporter = SpriteKind.create()
}
namespace StatusBarKind {
    export const Exp = StatusBarKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Teleporter, function (sprite, otherSprite) {
    if (game.ask("Teleport to BattleGround?")) {
        tiles.loadMap(tiles.createMap(tiles.createTilemap(hex`0a0008000107070707070707070306090909090909090902060909090909090909020609090909090909090206090909090909090902060909090909090909020609090909090909090205080808080808080804`, img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath6,sprites.castle.tilePath3,sprites.castle.tilePath9,sprites.castle.tilePath7,sprites.castle.tilePath4,sprites.castle.tilePath2,sprites.castle.tilePath8,sprites.castle.tilePath5], TileScale.Sixteen)))
        for (let index = 0; index < 7; index++) {
            Bat = sprites.create(img`
                . . f f f . . . . . . . . f f f 
                . f f c c . . . . . . f c b b c 
                f f c c . . . . . . f c b b c . 
                f c f c . . . . . . f b c c c . 
                f f f c c . c c . f c b b c c . 
                f f c 3 c c 3 c c f b c b b c . 
                f f b 3 b c 3 b c f b c c b c . 
                . c 1 b b b 1 b c b b c c c . . 
                . c 1 b b b 1 b b c c c c . . . 
                c b b b b b b b b b c c . . . . 
                c b 1 f f 1 c b b b b f . . . . 
                f f 1 f f 1 f b b b b f c . . . 
                f f 2 2 2 2 f b b b b f c c . . 
                . f 2 2 2 2 b b b b c f . . . . 
                . . f b b b b b b c f . . . . . 
                . . . f f f f f f f . . . . . . 
                `, SpriteKind.Enemy)
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    BuildLevel()
})
statusbars.onStatusReached(StatusBarKind.Exp, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Percentage, 100, function (status) {
    ExPBar.value = 0
    ExPBar.max += 0
    info.changeScoreBy(1)
})
function BuildLevel () {
    tiles.loadMap(tiles.createMap(tiles.createTilemap(hex`0a0008000107070707070707070205090909090909090906050909090909090909060509090909090909090605090909090909090906050909090909090909060509090909090909090603080808080808080804`, img`
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        `, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath2,sprites.castle.tilePath8,sprites.castle.tilePath5], TileScale.Sixteen)))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.ExPEvent, function (sprite, otherSprite) {
    ExPBar.value += 5
    Wisdom_Duck.setPosition(randint(40, 100), randint(40, 100))
})
statusbars.onStatusReached(StatusBarKind.Health, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Percentage, 0, function (status) {
    tiles.loadMap(tiles.createMap(tiles.createTilemap(hex`14000800040c0506050606050c01181e1e1e1e1e1e1e1e190f13141010101012150e1c1d1d1d1d1d1d1d1d1f081012111011101016091c1d1d1d1d1d1d1d1d1f081210121112101110031c1d1d1d1d1d1d1d1d1f071110121010101210171d1d1d1d1d1d1d1d1d1f081010101110121210011c1d1d1d1d1d1d1d1d1f0f11101010101110110e1c1d1d1d1d1d1d1d1d1f020d0a0a0b0b0a0b0d031b20202020202020201a`, img`
        2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . 
        2 2 2 . . . . . . 2 . . . . . . . . . . 
        2 . . . . . . . . 2 . . . . . . . . . . 
        2 . . . . . . . . 2 . . . . . . . . . . 
        2 . . . . . . . . . . . . . . . . . . . 
        2 . . . . . . . . 2 . . . . . . . . . . 
        2 . . . . . . . . 2 . . . . . . . . . . 
        2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . 
        `, [myTiles.transparency16,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterWest2,sprites.dungeon.floorDark0,sprites.dungeon.floorDark1,sprites.dungeon.floorDark4,sprites.dungeon.chestClosed,sprites.dungeon.chestOpen,sprites.dungeon.stairSouth,sprites.dungeon.stairNorth,sprites.dungeon.floorDarkDiamond,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath9,sprites.castle.tilePath7,sprites.castle.tilePath4,sprites.castle.tilePath5,sprites.castle.tilePath2,sprites.castle.tilePath6,sprites.castle.tilePath8], TileScale.Sixteen)))
    Erzgreg.setPosition(120, 20)
    HealthBar.value = HealthBar.max
})
function BuildLevel2 () {
    tiles.loadMap(tiles.createMap(tiles.createTilemap(hex`0a000800040d0506050606050d011014151111111113160f081113121112111117090813111312131112110c0712111311111113110c081111111211131311091012111111111211120f020e0a0a0b0b0a0b0e03`, img`
        2 2 2 2 2 2 2 2 2 2 
        2 2 2 . . . . . . 2 
        2 . . . . . . . . 2 
        2 . . . . . . . . 2 
        2 . . . . . . . . 2 
        2 . . . . . . . . 2 
        2 . . . . . . . . 2 
        2 2 2 2 2 2 2 2 2 2 
        `, [myTiles.transparency16,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterWest2,sprites.dungeon.floorDark0,sprites.dungeon.floorDark1,sprites.dungeon.floorDark4,sprites.dungeon.chestClosed,sprites.dungeon.chestOpen,sprites.dungeon.stairSouth,sprites.dungeon.stairNorth], TileScale.Sixteen)))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    HealthBar.value += -5
    Enemy1.setPosition(randint(40, 100), randint(40, 100))
})
let Bat: Sprite = null
let ExPBar: StatusBarSprite = null
let HealthBar: StatusBarSprite = null
let Enemy1: Sprite = null
let Wisdom_Duck: Sprite = null
let Erzgreg: Sprite = null
tiles.loadMap(tiles.createMap(tiles.createTilemap(hex`14000800040c0506050606050c01181e1e1e1e1e1e1e1e190f13141010101012150e1c1d1d1d1d1d1d1d1d1f081012111011101016091c1d1d1d1d1d1d1d1d1f081210121112101110031c1d1d1d1d1d1d1d1d1f071110121010101210171d1d1d1d1d1d1d1d1d1f081010101110121210011c1d1d1d1d1d1d1d1d1f0f11101010101110110e1c1d1d1d1d1d1d1d1d1f020d0a0a0b0b0a0b0d031b20202020202020201a`, img`
    2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . 
    2 2 2 . . . . . . 2 . . . . . . . . . . 
    2 . . . . . . . . 2 . . . . . . . . . . 
    2 . . . . . . . . 2 . . . . . . . . . . 
    2 . . . . . . . . . . . . . . . . . . . 
    2 . . . . . . . . 2 . . . . . . . . . . 
    2 . . . . . . . . 2 . . . . . . . . . . 
    2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . 
    `, [myTiles.transparency16,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterWest2,sprites.dungeon.floorDark0,sprites.dungeon.floorDark1,sprites.dungeon.floorDark4,sprites.dungeon.chestClosed,sprites.dungeon.chestOpen,sprites.dungeon.stairSouth,sprites.dungeon.stairNorth,sprites.dungeon.floorDarkDiamond,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath9,sprites.castle.tilePath7,sprites.castle.tilePath4,sprites.castle.tilePath5,sprites.castle.tilePath2,sprites.castle.tilePath6,sprites.castle.tilePath8], TileScale.Sixteen)))
Erzgreg = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . f f e 2 f f f f f f 2 e f f . 
    . f f f f f e e e e f f f f f . 
    . . f e f b f 4 4 f b f e f . . 
    . . f e 4 1 f d d f 1 4 e f . . 
    . . . f e 4 d d d d 4 e f e . . 
    . . f e f 2 2 2 2 e d d 4 e . . 
    . . e 4 f 2 2 2 2 e d d e . . . 
    . . . . f 4 4 5 5 f e e . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f . . . . . . . . . 
    `, SpriteKind.Player)
Wisdom_Duck = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f b 4 4 4 4 4 b 
    b d d c d 5 5 b 5 4 4 4 4 4 b . 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.ExPEvent)
Enemy1 = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Enemy)
controller.moveSprite(Erzgreg)
HealthBar = statusbars.create(20, 4, StatusBarKind.Health)
ExPBar = statusbars.create(160, 10, StatusBarKind.Exp)
HealthBar.attachToSprite(Erzgreg)
HealthBar.setColor(7, 2)
HealthBar.max = 100
HealthBar.value = 100
ExPBar.max = 25
ExPBar.positionDirection(CollisionDirection.Top)
ExPBar.value = 0
ExPBar.setColor(10, 15, 10)
Wisdom_Duck.setPosition(28, 31)
HealthBar.setLabel("HP")
let Anim = animation.createAnimation(ActionKind.Walking, 100)
animation.attachAnimation(Erzgreg, Anim)
animation.setAction(Erzgreg, ActionKind.Walking)
animation.runImageAnimation(
Erzgreg,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . f f e 2 f f f f f f 2 e f f . 
    . f f f f f e e e e f f f f f . 
    . . f e f b f 4 4 f b f e f . . 
    . . f e 4 1 f d d f 1 4 e f . . 
    . . . f e 4 d d d d 4 e f e . . 
    . . f e f 2 2 2 2 e d d 4 e . . 
    . . e 4 f 2 2 2 2 e d d e . . . 
    . . . . f 4 4 5 5 f e e . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f e e 2 2 2 2 2 2 e f f . . 
    . f f e 2 f f f f f f 2 e f f . 
    . f f f f f e e e e f f f f f . 
    . . f e f b f 4 4 f b f e f . . 
    . . f e 4 1 f d d f 1 4 e f . . 
    . . e f e 4 d d d d 4 e f . . . 
    . . e 4 d d e 2 2 2 2 f e f . . 
    . . . e d d e 2 2 2 2 f 4 e . . 
    . . . . e e f 5 5 4 4 f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . . . . . f f f . . . . 
    `],
200,
true
)
scene.centerCameraAt(0, 0)
scene.cameraFollowSprite(Erzgreg)
Erzgreg.setFlag(SpriteFlag.StayInScreen, true)
let TeleporterSprite = sprites.create(img`
    . f f f . f f f f . f f f . 
    f f f f f c c c c f f f f f 
    f f f f b c c c c b f f f f 
    f f f c 3 c c c c 3 c f f f 
    . f 3 3 c c c c c c 3 3 f . 
    . f c c c c 4 4 c c c c f . 
    . f f c c 4 4 4 4 c c f f . 
    . f f f b f 4 4 f b f f f . 
    . f f 4 1 f d d f 1 4 f f . 
    . . f f d d d d d d f f . . 
    . . e f e 4 4 4 4 e f e . . 
    . e 4 f b 3 3 3 3 b f 4 e . 
    . 4 d f 3 3 3 3 3 3 c d 4 . 
    . 4 4 f 6 6 6 6 6 6 f 4 4 . 
    . . . . f f f f f f . . . . 
    . . . . f f . . f f . . . . 
    `, SpriteKind.Teleporter)
TeleporterSprite.setPosition(305, 20)
