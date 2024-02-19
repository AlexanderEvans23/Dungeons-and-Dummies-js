//this is the main character class used to create most enemies, classes and npcs. Show it some respect!

class CharacterTemplate{
    constructor(name, health, attack){
        this.name = name;
        this.health = health;
        this.attack = attack;
    }

    static attack(target){
        target.health - this.attack
    }
}

module.exports = CharacterTemplate;