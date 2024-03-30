function saveProjectToLocalStorage(title){
    let projectList = JSON.parse(localStorage.getItem("Projects"));
    projectList.push(title);
    localStorage.setItem("Projects", JSON.stringify(projectList));
}

function removeProjectFromLocalStorage(title){
    let projectList = JSON.parse(localStorage.getItem("Projects"));
    let newProjectList = [];
    projectList.forEach(project => {
        if (title !== project){
            newProjectList.push(project);
        }
    })
    localStorage.setItem("Projects", JSON.stringify(newProjectList));
}

export {saveProjectToLocalStorage, removeProjectFromLocalStorage};