import { projectsHandler } from "./projects.js";
import { todosHandler } from "./todos.js";
import { projectEditMode, todoEditMode } from "./edit-mode.js";

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
    projectsContainer.addEventListener('click', e => {
      const deleteButton = e.target.dataset.project;
      const listElement = e.target.parentNode.parentNode.id
      if (deleteButton === listElement) {
        projectEditMode.deleteProject(e.target);
      }
    });

    const newTodoInputForm = document.querySelector('[data-new-todo-input-form]');
    newTodoInputForm.addEventListener('submit', e => {
      e.preventDefault();
      todosHandler.addNewTodo();
    });

    const todosContainer = document.querySelector('[data-todos]');
    todosContainer.addEventListener('click', e => {
      const deleteButton = e.target.dataset.todoDeleteButtonId;
      const todoDiv = e.target.parentNode.parentNode.parentNode.id;
      if (deleteButton === todoDiv) {
        todoEditMode.deleteTodo(e.target);
      }
    });

    todosContainer.addEventListener('click', e => {
      const importantStar = e.target.dataset.todoImportantId;
      const todoDiv = e.target.parentNode.parentNode.parentNode.id;
      if (importantStar === todoDiv) {
        todoEditMode.toggleImportantStatus(e.target);
      }
    });
  };

  return {
    initiateEventListeners,
  }
}());

export { eventListeners };
