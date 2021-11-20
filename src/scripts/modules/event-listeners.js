import { projectsHandler } from "./projects.js";

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
  };
  return {
    initiateEventListeners,
  }
}());

export { eventListeners };
