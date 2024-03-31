function saveProjectToLocalStorage(title, ProjectsStorageArray){
    let projectList = JSON.parse(localStorage.getItem(ProjectsStorageArray));
    projectList.push(title);
    localStorage.setItem(ProjectsStorageArray, JSON.stringify(projectList));
}

function removeProjectFromLocalStorage(title, ProjectsStorageArray){
    let projectList = JSON.parse(localStorage.getItem(ProjectsStorageArray));
    let newProjectList = [];
    projectList.forEach(project => {
        if (title !== project){
            newProjectList.push(project);
        }
    })
    localStorage.setItem(ProjectsStorageArray, JSON.stringify(newProjectList));
}

function saveTaskToProject(taskObject, projectName){
    let taskList = JSON.parse(localStorage.getItem(projectName));
    taskList.push(taskObject);
    localStorage.setItem(projectName, JSON.stringify(taskList));
}

function removeTaskFromProject(taskTitle, projectName){
    let taskList = JSON.parse(localStorage.getItem(projectName));
    let newTaskList = [];

    for (let i=0;i<taskList.length;i++){
        if (taskTitle !== JSON.parse(taskList[i])["title"]){
            newTaskList.push(taskList[i]);
        }
    }
    localStorage.setItem(projectName, JSON.stringify(newTaskList));
}

export {saveProjectToLocalStorage, removeProjectFromLocalStorage, saveTaskToProject, removeTaskFromProject};