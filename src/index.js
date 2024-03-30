import '../src/index.css';
import { createProject , removeProject} from './createProject';

// adding event listener to 'Add Project' button
const addProjectButton = document.querySelector("#project-add-btn-container");
addProjectButton.addEventListener("click", createProject);

// adding event listener to 'cross button' of projects
const crss = document.querySelector(".project-cross-btn");
crss.addEventListener("click", removeProject);

// creating empty local storage for project
localStorage.setItem("Projects",JSON.stringify([]));