import {Task} from './toDo.js'


function askForTask (){
    let btn=document.getElementById("addtask");
    let newTask=new Task(prompt("Entrez une tâche a réaliser"))
    console.log(newTask);
}


function addTask (){
    let btn=document.getElementById("addtask");
    let todolist=document.getElementById("todolist");
    let li=document.createElement("li");
    
    
    btn.addEventListener("click", function()
    {
        todolist.appendChild(li);
        li.textContent=askForTask;
    })
}

window.addEventListener("DOMContentLoaded",function(){
    
    askForTask();
    addTask();
})