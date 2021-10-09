let enemy;
let player;

let GameManager = {
    setGameStart: function(classType) {
        this.resetPlayer(classType);
        this.setPreFight(classType);
    },
    resetPlayer: function(classType) {
        switch (classType) {
            case "Milkshake":
                player = new Player(classType, 1, 200, 0, 200, 100, 50);
                break;
            case "Fries":
                player = new Player(classType, 2, 100, 0, 100, 150, 200);
                break;
            case "HotDog":
                player = new Player(classType, 3, 80, 0, 50, 200, 50);
                break; 
            case "IceCream":
                player = new Player(classType, 4, 200, 0, 50, 200, 100);
                break;   
        }
        let getInterface = document.querySelector(".interface");
        let picturePath = "./images/pokemon-sprite-"+player.picture+".png";
        getInterface.innerHTML = '<img src='+picturePath+
        ' class="img-avatar"><div><h3>'+player.classType+'</h3>'+
        '<p class="player-health">Health : '+player.health+'</p>'+
        '<p>Mana : '+player.mana+'</p>'+
        '<p>Strength : '+player.strength+'</p>'+
        '<p>Agility : '+player.agility+'</p>'+
        '<p>Speed : '+player.speed+'</p>'+
        '</div>';
    },
    setPreFight: function(classType) {
        // console.log("It is in setPreFight! Value of classType is "+classType);
        let getHeader = document.querySelector('.header');
        getHeader.innerHTML = "<p>Task:  Find an enemy!</p>";
        let getActions = document.querySelector('.actions');
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for an enemy!</a>';
        let getArena = document.querySelector('.arena');
        getArena.style.visibility = "visible";
    },
    setFight: function() {
        let getHeader = document.querySelector('.header');
        let getActions = document.querySelector('.actions');
        let getEnemy = document.querySelector('.enemy');
        // Create enemy
  
        let enemy00 = new Enemy("Goblin", 1, 100, 0, 50, 100, 800);
        let enemy01 = new Enemy("Troll", 2, 100, 0, 50, 100, 900);
        let chooseRandomEnemy = Math.floor(Math.random() * 2);
        // console.log("It is in setFight.  Here is the value of chooseEnemy"+chooseRandomEnemy);
        switch(chooseRandomEnemy) {
            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy = enemy01;
                break;
        }
        getHeader.innerHTML = "<p>Choose your move!</p>";
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
        let picturePath = "./images/pokemon-sprite-"+enemy.picture+".png";
        getEnemy.innerHTML = '<img src='+picturePath+
        ' class="img-avatar"><div><h3>'+enemy.enemyType+'</h3>'+
        '<p>Random Enemy Number :'+chooseRandomEnemy+
        '<p class="enemy-health">Health : '+enemy.health+'</p>'+
        '<p>Mana : '+enemy.mana+'</p>'+
        '<p>Strength : '+enemy.strength+'</p>'+
        '<p>Agility : '+enemy.agility+'</p>'+
        '<p>Speed : '+enemy.speed+'</p>'+
        '</div>';
    },
}