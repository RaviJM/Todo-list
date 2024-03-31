import { openProjectDOM } from "./DOM";

function openProject(){
    const prj = this.parentNode.parentNode;
    const title = prj.getAttribute("myid");
    openProjectDOM(title);
}


function showTaskForm(){
    const taskForm = document.querySelector(".task-form-container");
    taskForm.style.display = "inline-block";
}

function hideTaskForm(){
    const taskForm = document.querySelector(".task-form-container");
    taskForm.style.display = "none";
}

export {openProject , showTaskForm ,hideTaskForm};