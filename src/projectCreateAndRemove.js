import { saveProjectToLocalStorage , removeProjectFromLocalStorage} from "./localStorageManagement";
import { renderProjectsPage } from "./DOM";

// name of the localStorage's key
const ProjectsStorageArray = "ProjectsStorageArray";


function createProject(){
    let title = prompt("Project Title: ");
    if (!title){
        alert("Please provide a title");
    }
    else{
        saveProjectToLocalStorage(title, ProjectsStorageArray);
        createProjectTaskArray(title);
        renderProjectsPage();
    }
}

function removeProject(){
    const prj = this.parentNode.parentNode;
    const title = prj.getAttribute("myid");
    
    removeProjectFromLocalStorage(title, ProjectsStorageArray);
    removeProjectTaskArray(title);
    renderProjectsPage();
}

function createDefaultProject(defaultProjectName){
    saveProjectToLocalStorage(defaultProjectName, ProjectsStorageArray);
    createProjectTaskArray(defaultProjectName);
    renderProjectsPage();
}


function createProjectTaskArray(title){
    localStorage.setItem(title, JSON.stringify([]));
}

function removeProjectTaskArray(title){
    localStorage.removeItem(title);
}


export {createProject, removeProject, createDefaultProject};