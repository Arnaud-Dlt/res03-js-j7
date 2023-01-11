import { Character } from './character.js';

class Mage extends Character {
    #manaPoint;
    
    constructor(name, healthPoint, manaPoint){
        super(name,manaPoint);
        this.#manaPoint = manaPoint;
    }
    
    get manaPoint ()
    {
        return this.#manaPoint;
    }
    
    set manaPoint(manaPoint)
    {
        this.manaPoint = manaPoint;
    }
}

export { Mage } ;