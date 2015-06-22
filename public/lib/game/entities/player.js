ig
    .module(
    'game.entities.player'
)
    .requires(
    'impact.entity'
)
    .defines(function () {
        /**
         * The player (hero character)
         * @type {void|*}
         */
        EntityPlayer = ig.Entity.extend({

            animSheet: new ig.AnimationSheet('media/player.png', 16, 16),
            size: {x: 8, y: 14},
            offset: {x: 4, y: 2},
            flip: false,
            maxVel: {x: 100, y: 150},
            friction: {x: 6000, y: 0},
            accelGround: 400,
            accelAir: 200,
            jump: 200,
            type: ig.Entity.TYPE.A,
            checkAgainst: ig.Entity.TYPE.NONE,
            collides: ig.Entity.COLLIDES.PASSIVE,
            health: 300,
            bounciness:.3,
            /*
            invincible: true,
            invincibleDelay: 2,
            invincibleTimer: null,
            */
            init: function (x, y, settings) {
                this.parent(x, y, settings);
                this.addAnim('idle', 1, [0]);
                this.addAnim('run', 0.07, [0, 1, 2, 3, 4, 5]);
                this.addAnim('jump', 1, [9]);
                this.addAnim('fall', 0.4, [6, 7]);
            },
            update: function () {

                var accel = this.standing ? this.accelGround : this.accelAir;
                if (ig.input.state('left')) {
                    this.accel.x = -accel;
                    this.flip = true;
                } else if (ig.input.state('right')) {
                    this.accel.x = accel;
                    this.flip = false;
                } else {
                    this.accel.x = 0;
                }
                if (this.standing && ig.input.pressed('jump')) {
                    ig.mark('jump');
                    this.vel.y = -this.jump;
                }

                if (this.vel.y < 0) {
                    this.currentAnim = this.anims.jump;
                } else if (this.vel.y > 0) {
                    this.currentAnim = this.anims.fall;
                } else if (this.vel.x != 0) {
                    this.currentAnim = this.anims.run;
                } else {
                    this.currentAnim = this.anims.idle;
                }
                this.currentAnim.flip.x = this.flip;

                // shoot
                if (ig.input.pressed('shoot')) {
                    ig.mark('shoot');
                    ig.game.spawnEntity( EntityBullet, this.pos.x, this.pos.y, {flip: this.flip});
                }

                this.parent();
            }
        });
        /**
         * The bullet entity
         * @type {void|*}
         */
        EntityBullet = ig.Entity.extend({
            size: {x: 5, y: 3},
            animSheet: new ig.AnimationSheet('media/bullet.png', 5, 3),
            maxVel: {x: 200, y: 0},
            type: ig.Entity.TYPE.NONE,
            checkAgainst: ig.Entity.TYPE.B,
            collides: ig.Entity.COLLIDES.PASSIVE,
            init: function (x, y, settings) {
                this.parent( x + (settings.flip ? -4 : 8), y+8, settings);
                this.vel.x = this.accel.x = (settings.flip ? - this.maxVel.x : this.maxVel.x);
                this.addAnim('idle', 0.2, [0]);
            },
            handleMovementTrace: function (res) {
                this.parent( res );
                if (res.collision.x || res.collision.y) {
                    this.kill();
                }
            },
            check: function( other ) {
                other.receiveDamage(5, this);
                this.receiveDamage(10);
                ig.mark('Zombie hit!', '#FF0000');

            }

        });

    });
