import {Task} from './toDo.js'

window.addEventListener("DOMContentLoaded",function(){
    let newTask = new Task("");
    
    newTask.askForTask();
})