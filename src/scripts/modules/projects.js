import { Project } from './projects-factory.js';

const projectsHandler = (function () {
  const projectsContainer = document.querySelector('[data-projects]');
  const newProjectInputField = document.querySelector('[data-add-new-projects-input]');
  const newProjectInputForm = document.querySelector('[data-add-new-projects-form]');

  let projectsArray = [];
  
  const renderProjects = () => {
    projectsArray.forEach(project => {
      const listElement = document.createElement('li');
      listElement.dataset.projectId = project.id;
      listElement.classList.add('project');
      listElement.innerText = project.name;
      projectsContainer.appendChild(listElement);
    });
  };

  const refreshProjectsList = () => {
    while (projectsContainer.firstChild) {
      projectsContainer.removeChild(projectsContainer.firstChild);
    }
  };

  const render = () => {
    refreshProjectsList();
    renderProjects();
  };

  const addNewProject = () => {
    let inputValue = newProjectInputField.value;
    if (inputValue === '' || inputValue === null) return;
    const newProject = Project(inputValue);
    newProjectInputForm.reset();
    projectsArray.push(newProject);
    render();
  };

  return {
    render,
    addNewProject,
  }
}());

export { projectsHandler };