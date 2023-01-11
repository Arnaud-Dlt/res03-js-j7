class Task{
    #newtask;
    
    constructor(newtask)
    {
        this.#newtask = newtask;
    }
    
    get newtask () {
        return this.#newtask;
    }
    
    set newtask (newtask) {
        this.#newtask = newtask;
    }
    
    askForTask(){
    
        let addTaskBtn = document.getElementById("addtask");
        let result=this;
        
        addTaskBtn.addEventListener("click", function(){
            
            let newTask = window.prompt("Ajoutez une tâche");
            
            result.#newtask = newTask;
            
            result.addNewTask();
            
        }); 
    }
    
    addNewTask(){
        
        if(this.#newtask !== null){
            
            let toDoList = document.getElementById("todolist");
            let li = document.createElement("li"); 
            let litext = document.createTextNode(this.#newtask);
            
            toDoList.appendChild(li);
            li.appendChild(litext); 
        }
    }
}

export { Task };