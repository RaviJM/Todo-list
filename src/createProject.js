import { saveProjectToLocalStorage , removeProjectFromLocalStorage} from "./saveProjectToLocalStorage";

function createProject(){
    let title = prompt("Title: ");
    if (!title){
        alert("Please provide a title");
    }
    else{
        saveProjectToLocalStorage(title);
    }
}

function removeProject(){
    removeProjectFromLocalStorage("asdf");
}

export {createProject, removeProject};