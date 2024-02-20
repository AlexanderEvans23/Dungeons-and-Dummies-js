//Combat to the death, show it some respect yo!

const CharacterTemplate = require("../Characters/Character_Template");

class Combat extends CharacterTemplate{
    constructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
    }

    static fight(p1, p2){
        //player one will always be the player, so they get first move
        while (p1.health !== 0 || p2.health !== 0){
            const playerChoice = prompt("Would you like to attack or heal?")
            
        }
        //let player one choose to attack or heal
        //take away the health form the enemy or give health to the player, allow the enemy to do the same and loop until one dies.
    }
}