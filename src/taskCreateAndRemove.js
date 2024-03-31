import { saveTaskToProject , removeTaskFromProject} from "./localStorageManagement";
import { openProjectDOM } from "./DOM";

function createTask(){
    const taskTitle = document.querySelector("#title");
    const taskDescription = document.querySelector("#description");
    const projectName = document.querySelector(".project-tasks-page-header").textContent;
    
    const taskObject = {};
    taskObject["title"] = taskTitle.value;
    taskObject["description"] = taskDescription.value;

    if (taskTitle.value !== "" && taskDescription.value !== ""){
        saveTaskToProject(JSON.stringify(taskObject), projectName);
    
        openProjectDOM(projectName);    // also, form automatically hides, as page re-renders from localStorage
    }
    else{
        // clear form fields
        taskTitle.value = "";
        taskDescription.value = "";
        alert("Please fill both fields!");
    }
}

function removeTask(){
    const taskDiv = this.parentNode.parentNode;
    const taskTitle = taskDiv.querySelector("p:first-of-type").textContent;
    
    const projectName = document.querySelector(".project-tasks-page-header").textContent;
    removeTaskFromProject(taskTitle, projectName);
    openProjectDOM(projectName);
}

export {createTask, removeTask};