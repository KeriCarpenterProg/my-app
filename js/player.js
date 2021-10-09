

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
        let getEnemySpeed = enemy.speed;
        let getPlayerHealth = document.querySelector('.player-health');
        console.log("Player's Heatlh is = "+getPlayerHealth.innerHTML);
        let getEnemyHealth = document.querySelector('.enemy-health');
        console.log("Enemy's Health = "+getEnemyHealth.innerHTML);
        let playerAttackValues = this.playerAttack();
        console.log("This is the value of Player Attack Values");
        console.log("Attack Value "+playerAttackValues[0]+" and Number of Hits = "+playerAttackValues[1]);
        let totalDamage = playerAttackValues[0] * playerAttackValues[1];
        console.log("The total damage done is "+totalDamage);
        enemy.health = enemy.health - totalDamage;
        console.log("The Value of Enemy Health is now "+enemy.health);
        alert("You hit the enemy "+playerAttackValues[0]+" damage "+playerAttackValues[1]+" times!");

        if(enemy.health < 0){
            getPlayerHealth.innerHTML = "Health : "+player.health;
            getEnemyHealth.innerHTML = "Health : "+enemy.health;
            alert("You win!  Refresh to play again! ");
        } else {
            getPlayerHealth.innerHTML = "Health : "+player.health;
            getEnemyHealth.innerHTML = "Health : "+enemy.health;
        }
    
    },

    // Player attacks!
    playerAttack: function() {
        // console.log("Player Strength is "+player.strength+" Player Agility = "+player.agility);
        // console.log("Player strength * Player agility / 1000 * 10 ="+(player.strength*player.agility/1000*10));
        // let calcOutputDamage = player.strength * player.agility /1000 * 10;
        let calcOutputDamage = 15;
        // console.log("CalcOutputDamage = "+calcOutputDamage);
        let a = player.agility / 10;
        // console.log ("enemy agility / 10 = "+a);
        let b = Math.floor(a/2);
        // console.log("math floor of a /2 is "+b);
        a = Math.random() * b;
        // console.log("math.random * b = "+a);
        b = Math.floor(a);
        // console.log("Math.floor of Math.random *b = "+b);
        let numberOfHits = b + 1;
        // console.log("Above + 1 = numberOfHits = "+numberOfHits);
        let attackValues = [calcOutputDamage,numberOfHits];
        return attackValues;
    },
    enemyAttack: function() {
        console.log("Enemy Strength is "+enemy.strength+" enemy Agility = "+enemy.agility);
        console.log("enemy strength * enemy agility / 1000 * 10 ="+(enemy.strength*enemy.agility/1000*10));
        let calcOutputDamage = enemy.strength * enemy.agility /1000 * 10;
        let a = enemy.agility / 10;
        console.log ("enemy agility / 10 = "+a);
        let b = Math.floor(a/2);
        console.log("math floor of a /2 is "+b);
        a = Math.random() * b;
        console.log("math.random * b = "+a);
        b = Math.floor(a);
        console.log("Math.floor of Math.random *b = "+b);
        let numberOfHits = b;
        let attackValues = [calcOutputDamage,numberOfHits];
        return attackValues;
    },

}
