class ActionKind(Enum):
    Walking = 0
    Idle = 1
    Jumping = 2
@namespace
class SpriteKind:
    Staircase = SpriteKind.create()
    ExPEvent = SpriteKind.create()
@namespace
class StatusBarKind:
    Exp = StatusBarKind.create()

def on_status_reached_comparison_eq_type_percentage(status):
    ExPBar.value = 0
    ExPBar.max += 10
statusbars.on_status_reached(StatusBarKind.Exp,
    statusbars.StatusComparison.EQ,
    statusbars.ComparisonType.PERCENTAGE,
    100,
    on_status_reached_comparison_eq_type_percentage)

def on_on_overlap(sprite, otherSprite):
    ExPBar.value += 5
    info.set_score(ExPBar.value)
    Wisdom_Duck.set_position(randint(20, 100), randint(20, 100))
sprites.on_overlap(SpriteKind.player, SpriteKind.ExPEvent, on_on_overlap)

def on_status_reached_comparison_eq_type_percentage2(status):
    HealthBar.value = HealthBar.max
    Erzgreg.set_position(140, 20)
statusbars.on_status_reached(StatusBarKind.health,
    statusbars.StatusComparison.EQ,
    statusbars.ComparisonType.PERCENTAGE,
    0,
    on_status_reached_comparison_eq_type_percentage2)

def on_on_overlap2(sprite, otherSprite):
    HealthBar.value += -5
    Enemy1.set_position(randint(20, 100), randint(20, 100))
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap2)

ExPBar: StatusBarSprite = None
HealthBar: StatusBarSprite = None
Enemy1: Sprite = None
Wisdom_Duck: Sprite = None
Erzgreg: Sprite = None
Erzgreg = sprites.create(img("""
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
    """),
    SpriteKind.player)
Wisdom_Duck = sprites.create(img("""
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
    """),
    SpriteKind.ExPEvent)
Enemy1 = sprites.create(img("""
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
    """),
    SpriteKind.enemy)
controller.move_sprite(Erzgreg)
tiles.load_map(tiles.create_map(tiles.create_tilemap(hex("""
                0a000800040d0506050606050d011014151111111113160f081113121112111117090813111312131112110c0712111311111113110c081111111211131311091012111111111211120f020e0a0a0b0b0a0b0e03
            """),
            img("""
                2 2 2 2 2 2 2 2 2 2 
                    2 2 2 . . . . . . 2 
                    2 . . . . . . . . 2 
                    2 . . . . . . . . 2 
                    2 . . . . . . . . 2 
                    2 . . . . . . . . 2 
                    2 . . . . . . . . 2 
                    2 2 2 2 2 2 2 2 2 2
            """),
            [myTiles.transparency16,
                sprites.dungeon.green_outer_north_east,
                sprites.dungeon.green_outer_south_east,
                sprites.dungeon.green_outer_south_west,
                sprites.dungeon.green_outer_north_west,
                sprites.dungeon.green_outer_north0,
                sprites.dungeon.green_outer_north1,
                sprites.dungeon.green_outer_west0,
                sprites.dungeon.green_outer_west1,
                sprites.dungeon.green_outer_east0,
                sprites.dungeon.green_outer_south0,
                sprites.dungeon.green_outer_south1,
                sprites.dungeon.green_outer_east1,
                sprites.dungeon.green_outer_north2,
                sprites.dungeon.green_outer_south2,
                sprites.dungeon.green_outer_east2,
                sprites.dungeon.green_outer_west2,
                sprites.dungeon.floor_dark0,
                sprites.dungeon.floor_dark1,
                sprites.dungeon.floor_dark4,
                sprites.dungeon.chest_closed,
                sprites.dungeon.chest_open,
                sprites.dungeon.stair_south,
                sprites.dungeon.stair_north],
            TileScale.SIXTEEN)))
HealthBar = statusbars.create(20, 4, StatusBarKind.health)
ExPBar = statusbars.create(160, 10, StatusBarKind.Exp)
HealthBar.attach_to_sprite(Erzgreg)
HealthBar.set_color(7, 2)
HealthBar.max = 100
HealthBar.value = 100
ExPBar.max = 25
ExPBar.position_direction(CollisionDirection.TOP)
ExPBar.value = 0
ExPBar.set_color(10, 15, 10)
Wisdom_Duck.set_position(28, 31)
HealthBar.set_label("HP")
Anim = animation.create_animation(ActionKind.Walking, 100)
animation.attach_animation(Erzgreg, Anim)