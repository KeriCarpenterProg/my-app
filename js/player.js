let player;

function Player(classType, picture, health, mana, strength, agility, speed) {
    this.classType = classType;
    this.picture = picture;
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
}

let random = Math.floor(Math.random()*10);
// console.log(" Math.random() + Math.floor "+random);

let PlayerMoves = {
    calcAttack: function(){
        let getPlayerSpeed = player.speed;
        // let getEnemySpeed = enemy.speed;
    }
    let playerAttack = function() {
        let calcBaseDamage;
        console.log("Why doesn't this work?");
    }
}
