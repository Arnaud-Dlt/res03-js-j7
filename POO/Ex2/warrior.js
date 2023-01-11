class Warrior extends Character {
    #strength;
    
    constructor(name, healthPoint, strength){
        super(name,healthPoint);
        this.#strenght = strength;
    }
    
    get strength ()
    {
        return this.#strength;
    }
    
    set strength(strength)
    {
        this.strength = strength;
    }
}