class Character {
    #name;
    #healthPoint;
    
    constructor (name, healthPoint){
        this.#name = name;
        this.#healthPoint = healthPoint;
    }
    
    get name ()
    {
        return this.#name = name;
    }
    set name (name)
    {
        this.#name = name;
    }
    
    get healthPoint ()
    {
        return this.#healthPoint = healthPoint;
    }
    set healthPoint (healthPoint)
    {
        this.#healthPoint = healthPoint;
    }
}

export { Character };