import '../src/index.css';
import { createDefaultProject } from './projectCreateAndRemove';


// creating a localStorage key named "ProjectsStorageArray" for storing names of all projects
const ProjectsStorageArray = "ProjectsStorageArray";

// creating empty local storage for project
localStorage.setItem(ProjectsStorageArray, JSON.stringify([]));

// creating and adding a default project "My Project" as first value to key
createDefaultProject("My Project");
