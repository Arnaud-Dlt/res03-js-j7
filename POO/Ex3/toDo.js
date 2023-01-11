class Task {
    #newTask;
    
    constructor(newTask){
        this.#newTask = newTask;
    }
    
    get newTask ()
    {
        return this.#newTask = newTask;
    }
    set newTask (newTask)
    {
        this.#newTask = newTask;
    }
    
}

export {Task};