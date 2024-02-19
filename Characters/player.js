//This is the player class that extends from the template, show some respect yo!

const CharacterTemplate = require("./Character_Template");

class Player extends CharacterTemplate{
    constructor(name, health, attack){
        super(name, health, attack)
        //this.weapon = "Fists"
        this.inventory = {};
        this.spells = {}
    }

    checkInventory(){
        console.log(this.inventory)
    }

    checkSpells(){
        console.log(this.spells)
    }

}

module.exports = Player;