import { projectsHandler } from "./projects";

const projectEditMode = (function () {
  // Avoids returning to "All" if the project isn't deleted
  const checkIfSelectedProjectIsDeleted = (project) => {
    if (project.parentNode.parentNode.classList.contains('active-project')) {
      projectsHandler.setAllProjectAsDefault();
    }
  };

  const deleteProject = (project) => {
    const projectContainer = document.querySelector('[data-projects]')
    // Convert the children of the projectContainer into an array using the spread [...] operator then get the index of the selected list
    const index = [...projectContainer.children].indexOf(project.parentNode.parentNode);
    projectsHandler.projectsArray.splice(index, 1);
    checkIfSelectedProjectIsDeleted(project);
    projectsHandler.persistToLocalStorage();
  };

  return {
    deleteProject,
  }
}());

const todoEditMode = (function() {
  const deleteTodo = (todo) => {
    const todoContainer = document.querySelector('[data-todos]');
    const todoDeleted = todo.parentNode.parentNode.parentNode;
    const index = [...todoContainer.children].indexOf(todoDeleted);
    projectsHandler.projectsArray.map(project => {
      project.tasks.map(todo => {
        if (todo.id === todoDeleted.id) {
          project.tasks.splice(index, 1);
          projectsHandler.persistToLocalStorage();
        }
      });
    })
  };

  return {
    deleteTodo,
  }
}());

export { projectEditMode, todoEditMode };
