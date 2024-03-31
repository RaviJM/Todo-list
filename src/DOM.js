import { openProject , showTaskForm , hideTaskForm } from "./OpenProject";
import { createProject, removeProject } from "./projectCreateAndRemove";
import { createTask , removeTask} from "./taskCreateAndRemove";

function createProjectDOM(projectName){
    
    const projectDiv = document.createElement("div");
    projectDiv.classList = "project";
    projectDiv.setAttribute("myid", projectName);

    const projectCrossBtnContainer = document.createElement("div");
    projectCrossBtnContainer.classList = "project-cross-btn-container";
    const projectCrossBtn = document.createElement("button");
    projectCrossBtn.classList = "project-cross-btn";
    projectCrossBtn.textContent = "X";
    projectCrossBtn.addEventListener("click", removeProject);
    projectCrossBtnContainer.appendChild(projectCrossBtn);
    projectDiv.appendChild(projectCrossBtnContainer);

    const projectInsideBtnContainer = document.createElement("div");
    projectInsideBtnContainer.classList = "project-inside-btn-container";
    const projectInsideBtn = document.createElement("button");
    projectInsideBtn.classList = "project-inside-btn";
    projectInsideBtn.textContent = projectName;
    projectInsideBtn.addEventListener("click", openProject);
    projectInsideBtnContainer.appendChild(projectInsideBtn);
    projectDiv.appendChild(projectInsideBtnContainer);

    // append project to DOM
    const projectsContainer = document.querySelector("#projects");
    projectsContainer.appendChild(projectDiv);
}


function renderProjectsPage(){
    //clearing body
    const mainBody = document.querySelector("body");
    mainBody.textContent = "";
    
    // adding header
    const headerDiv = document.createElement("div");
    headerDiv.setAttribute("id", "header");
    const hdr = document.createElement("h1");
    hdr.textContent = "To-Do List";
    headerDiv.appendChild(hdr);
    mainBody.appendChild(headerDiv);

    // adding div for projects
    const projectsDiv = document.createElement("div");
    projectsDiv.setAttribute("id", "projects");
    mainBody.appendChild(projectsDiv);

    // adding projects to it one-by-one
    // getting array of all projects
    const allProjectsArray = JSON.parse(localStorage.getItem("ProjectsStorageArray"));
    
    // making DOM projects one by one from array
    for (let i=0; i<allProjectsArray.length; i++){
        createProjectDOM(allProjectsArray[i]);
    }
    
    
    // project add btn container and add button
    const projectAddBtnContainer = document.createElement("div");
    projectAddBtnContainer.setAttribute("id", "project-add-btn-container");
    const projectAddBtn = document.createElement("button");
    projectAddBtn.textContent = "+";
    projectAddBtn.setAttribute("id", "project-add-round-btn");
    projectAddBtn.addEventListener("click", createProject);
    projectAddBtnContainer.appendChild(projectAddBtn);
    mainBody.appendChild(projectAddBtnContainer);
}






function createTaskDOM(taskObj){

    const taskContainer = document.querySelector(".tasks-container");
    
    const task = document.createElement("div");
    task.classList = "task";
    
    const crossBtnContainer = document.createElement("div");
    crossBtnContainer.classList = "task-cross-btn-container";

    const crossBtn = document.createElement("button");
    crossBtn.classList = "task-cross-btn";
    crossBtn.textContent = "X";
    crossBtn.addEventListener("click", removeTask);

    crossBtnContainer.appendChild(crossBtn);
    task.appendChild(crossBtnContainer);

    const taskObject = JSON.parse(taskObj);
    
    const p12 = document.createElement("p");
    p12.textContent = taskObject["title"];
    p12.style.textDecoration = "underline";
    p12.style.fontWeight = "700";
    p12.style.fontSize = "1.4rem";
    task.appendChild(p12);
    
    
    const p22 = document.createElement("p");
    p22.textContent = taskObject["description"];
    p22.style.fontSize = "1.2rem";
    task.appendChild(p22);

    taskContainer.appendChild(task);
}


function openProjectDOM(projectName){
    
    // clear body
    const mainBody = document.querySelector("body");
    mainBody.textContent = "";
    ///////////////////////////////////////////////////////////////////////
    // TASK FORM (hidden)
    const taskFormContainer = document.createElement("div");
    taskFormContainer.classList = "task-form-container";
    const taskForm = document.createElement("form");
    taskForm.classList = "task-form";
    
    // title
    const labelTitle = document.createElement("label");
    labelTitle.setAttribute("for", "title");
    labelTitle.textContent = "Title:";
    const breakEle = document.createElement("br");
    taskForm.appendChild(labelTitle);
    taskForm.appendChild(document.createElement("br"));
    const inputTitle = document.createElement("input");
    inputTitle.setAttribute("type", "text");
    inputTitle.setAttribute("name", "title");
    inputTitle.setAttribute("id", "title");
    taskForm.appendChild(inputTitle);
    taskForm.appendChild(document.createElement("br"));
    taskForm.appendChild(document.createElement("br"));

    // description
    const labelDescription = document.createElement("label");
    labelDescription.setAttribute("for", "description");
    labelDescription.textContent = "Description:";
    taskForm.appendChild(labelDescription);
    taskForm.appendChild(document.createElement("br"));
    const inputDescription = document.createElement("input");
    inputDescription.setAttribute("type", "text");
    inputDescription.setAttribute("name", "description");
    inputDescription.setAttribute("id", "description");
    taskForm.appendChild(inputDescription);
    taskForm.appendChild(document.createElement("br"));
    taskForm.appendChild(document.createElement("br"));

    // button (submit)
    const submitButton = document.createElement("button");
    submitButton.classList = "submit-button";
    submitButton.setAttribute("type", "button");
    submitButton.textContent = "Add";
    submitButton.addEventListener("click", createTask);
    taskForm.appendChild(submitButton);

    // button (cancel)
    const cancelButton = document.createElement("button");
    cancelButton.classList = "submit-button";
    cancelButton.setAttribute("type", "button");
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener("click", hideTaskForm);
    taskForm.appendChild(cancelButton);

    taskFormContainer.appendChild(taskForm);
    mainBody.appendChild(taskFormContainer);
    ///////////////////////////////////////////////////////////////////////
    
    
    
    // create headerDiv
    const headerDiv = document.createElement("div");
    headerDiv.classList = "project-tasks-page-header-container";
    const backBtn = document.createElement("button");
    backBtn.classList = "back-btn";
    backBtn.textContent = "<--";
    backBtn.addEventListener("click", renderProjectsPage);
    const headerTitle = document.createElement("h1");
    headerTitle.classList = "project-tasks-page-header";
    headerTitle.textContent = projectName;
    headerDiv.appendChild(backBtn);
    headerDiv.appendChild(headerTitle);
    headerDiv.style.borderBottom = "solid";
    mainBody.appendChild(headerDiv);


    // tasks container
    const tasksContainer = document.createElement("div");
    tasksContainer.classList = "tasks-container";
    mainBody.appendChild(tasksContainer);


    // tasks (append from array of tasks of that project, laod from localStorage)
    
    const taskList = JSON.parse(localStorage.getItem(projectName));
    
    // making DOM tasks one by one from array
    for (let i=0; i<taskList.length; i++){
        createTaskDOM(taskList[i]);
    }


    
    // task-add-button
    const taskAddBtn = document.createElement("button");
    taskAddBtn.setAttribute("id", "project-add-task-btn");
    taskAddBtn.textContent = "Add Task";
    taskAddBtn.addEventListener("click", showTaskForm);
    mainBody.appendChild(taskAddBtn);
}


export {createProjectDOM, renderProjectsPage, openProjectDOM};