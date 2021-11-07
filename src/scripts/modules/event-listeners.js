import { projectsHandler } from "./projects.js";

const eventListeners = (function() {
  const initiateEventListeners = () => {
    const newProjectInputForm = document.querySelector('[data-add-new-projects-form]');
    newProjectInputForm.addEventListener('submit', e => {
        e.preventDefault();
        projectsHandler.addNewProject();
    });
  };

  return {
    initiateEventListeners,
  }
}());

export { eventListeners };