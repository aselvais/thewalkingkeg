/**
 *
 */
ig.module(
    'game.main'
)
    .requires(
    'impact.game',
    'impact.font',
    'game.levels.level01',
    'impact.debug.debug'
)
    .defines(function () {

        MyGame = ig.Game.extend({
            // Load a font
            font: new ig.Font('media/04b03.font.png'),
            gravity: 500,
            /**
             * Initialize your game here; bind keys etc.
             */
            init: function () {
                this.loadLevel(LevelLevel01);
                // Bind keys
                ig.input.bind(ig.KEY.LEFT_ARROW, 'left');
                ig.input.bind(ig.KEY.RIGHT_ARROW, 'right');
                ig.input.bind(ig.KEY.UP_ARROW, 'jump');
                ig.input.bind(ig.KEY.SPACE, 'shoot');
            },
            /**
             * Update all entities and backgroundMaps
             */
            update: function () {
                this.parent();
                // Add your own, additional update code here
            },
            /**
             *
             */
            draw: function () {
                // Draw all entities and backgroundMaps
                this.parent();

                // Add your own drawing code here
                var x = ig.system.width / 2,
                    y = ig.system.height / 2;
                this.font.draw('Welcome to the WalkingKeg!', x, y, ig.Font.ALIGN.CENTER);
            }
        });
        // Start the Game with 60fps, a resolution of 960×640, scaled
        // up by a factor of 2
        ig.main('#canvas', MyGame, 60, 480, 320, 2);

    }
);
