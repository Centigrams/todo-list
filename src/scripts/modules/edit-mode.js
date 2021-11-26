import { projectsHandler } from "./projects";

const projectEditMode = (function () {

  const deleteProject = (project) => {
    const projectContainer = document.querySelector('[data-projects]')
    // Convert the children of the projectContainer into an array using the spread [...] operator then get the index of the selected list
    const index = [...projectContainer.children].indexOf(project.parentNode.parentNode);
    projectsHandler.projectsArray.splice(index, 1);
    projectsHandler.setAllProjectAsDefault();
    projectsHandler.persistToLocalStorage();
  };

  return {
    deleteProject,
  }
}());

export { projectEditMode };
