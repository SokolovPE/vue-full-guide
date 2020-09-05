new Vue({
    el: '#app',
    data: {
        isGameStarted: false,
        player: {
            health: 100,
            baseAttackMin: 1,
            baseAttackMax: 3,
            specialAttackMin: 4,
            specialAttackMax: 7,
            healingMin: 10,
            healingMax: 15
        },
        monster: {
            health: 100,
            attackMin: 7,
            attackMax: 12
        },
        logs: []
    },
    methods: {
        // Regular attack of player.
        getRegularAttackDmg: function() {
            return Math.max(
                Math.floor(Math.random() * this.player.baseAttackMax) + 1,
                this.player.baseAttackMin
            );
        },
        // Special attack of player.
        getSpecialAttackDmg: function() {
            return Math.max(
                Math.floor(Math.random() * this.player.specialAttackMax) + 1,
                this.player.specialAttackMin
            );
        },
        // Heal powers of player.
        getHealAmount: function() {
            var healPwr = Math.max(
                Math.floor(Math.random() * this.player.healingMax) + 1,
                this.player.healingMin
            );
            // Prevent overhealing.
            if (healPwr > 100 - this.player.health) {
                return 100 - this.player.health;
            } else {
                return healPwr;
            }
        },
        // Monster attack.
        getMonsterAttackDmg: function() {
            return Math.max(
                Math.floor(Math.random() * this.monster.attackMax) + 1,
                this.monster.attackMin
            );
        },
        // Do damage to any character.
        doDamage: function(isPlayer, dmg) {
            // If player is the damage dealer
            // then attack monster. Or otherwise.
            if (isPlayer) {
                this.monster.health -= dmg;
            } else {
                this.player.health -= dmg;
            }
            // Log into battle log.
            this.makeLog(
                isPlayer,
                `${isPlayer ? 'Player' : 'Monster'} attacks ${
                    isPlayer ? 'monster' : 'player'
                } and deals ${dmg} damage.`
            );
        },
        // Heal any character.
        doHealing: function(isPlayer, healAmount) {
            if (isPlayer) {
                this.player.health += healAmount;
            } else {
                this.monster.health += healAmount;
            }
            // Log into battle log.
            this.makeLog(
                isPlayer,
                `${
                    isPlayer ? 'Player' : 'Monster'
                } heals, health increased by ${healAmount}`
            );
        },
        // Give up.
        giveUp: function() {
            this.isGameStarted = false;
            // Make a log of flee.
            this.makeLog(
                false,
                `Player fleed from the battlefield, monster wins!`
            );
            if (
                confirm('You decided to flee from monster.\nStart a new game?')
            ) {
                this.resetGame();
            }
        },
        // Basic turn.
        makeTurn: function(turnType) {
            var attackPower = 0;
            var isHeal = false;
            switch (turnType) {
                // Regular attack.
                case 0:
                    attackPower = this.getRegularAttackDmg();
                    break;
                // Special attack.
                case 1:
                    attackPower = this.getSpecialAttackDmg();
                    break;
                // Healing
                case 2:
                    attackPower = this.getHealAmount();
                    isHeal = true;
                    break;
                // Give up.
                case 3:
                    this.giveUp();
                    return;
                default:
                    break;
            }
            // Attack/Heal only if players health is above zero.
            if (this.player.health > 0) {
                if (isHeal) {
                    this.doHealing(true, attackPower);
                } else {
                    this.doDamage(true, attackPower);
                }
            }
            // Monster always fight back if alive.
            if (this.monster.health > 0) {
                var monsterDmg = this.getMonsterAttackDmg();
                this.doDamage(false, monsterDmg);
            }
        },
        // Make a new log.
        makeLog: function(isPlayer, message) {
            this.logs.unshift({
                isPlayer: isPlayer,
                message: message
            });
        },
        // Reset game to play again.
        resetGame: function() {
            // Clear logs.
            this.logs = [];
            // Restore health for characters.
            this.player.health = 100;
            this.monster.health = 100;
        },
        startOver: function() {
            // If game restarted reset all valuesl
            if (
                !this.isGameStarted &&
                (this.player.health < 100 || this.monster.health < 100)
            ) {
                this.resetGame();
            }
            this.isGameStarted = !this.isGameStarted;
        }
    },
    computed: {
        // If players health below zero then player is dead.
        isPlayerDead: function() {
            return this.player.health <= 0;
        },
        // Same for monster.
        isMonsterDead: function() {
            return this.monster.health <= 0;
        }
    },
    watch: {
        // If player or monster died then ask for restart.
        isPlayerDead: function() {
            // If player is not dead
            // then nothing to do here.
            if (!this.isPlayerDead) {
                return;
            }
            // Set health to zero to avoid negative numbers.
            this.player.health = 0;
            // Make a log of death.
            this.makeLog(false, 'Monster killed a player, monster wins!');
            // Prompt player.
            if (confirm('Game over!\nStart a new game?')) {
                this.resetGame();
            }
            this.isGameStarted = false;
        },
        isMonsterDead: function() {
            // If monster is not dead
            // then nothing to do here.
            if (!this.isMonsterDead) {
                return;
            }
            // Set health to zero to avoid negative numbers.
            this.monster.health = 0;
            // Make a log of win.
            this.makeLog(true, 'Player killed a monster, player wins!');
            // Prompt player.
            if (confirm('You won!\nStart a new game?')) {
                this.resetGame();
            }
            this.isGameStarted = false;
        }
    }
});
