import { projectsHandler } from "./projects.js";
import { projectEditMode } from "./edit-mode.js";

const eventListeners = (function () {
  const initiateEventListeners = () => {
    const newProjectInputForm = document.querySelector('[data-add-new-projects-form]');
    newProjectInputForm.addEventListener('submit', e => {
      e.preventDefault();
      projectsHandler.addNewProject();
    });

    const sidePanel = document.getElementById('side-panel');
    sidePanel.addEventListener('click', e => {
      if (e.target.tagName.toLowerCase() === 'li') {
        projectsHandler.selectProject(e.target);
        projectsHandler.persistToLocalStorage();
      }
    });

    const projectsContainer = document.querySelector('[data-projects]');
    projectsContainer.addEventListener('click', e=> {
      const deleteButton = e.target.dataset.project;
      const listElement = e.target.parentNode.parentNode.id
      if (deleteButton === listElement) {
        projectEditMode.deleteProject(e.target);
      }
    });
  };
  return {
    initiateEventListeners,
  }
}());

export { eventListeners };
