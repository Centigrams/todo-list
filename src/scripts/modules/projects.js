import { Project } from './factories/projects-factory.js';

const projectsHandler = (function () {
  const projectsContainer = document.querySelector('[data-projects]');
  const newProjectInputField = document.querySelector('[data-add-new-projects-input]');
  const newProjectInputForm = document.querySelector('[data-add-new-projects-form]');
  // Namespace local storage key to avoid conflicting with other websites.
  const localStorageProjectsArrayKey = 'todo.projects';

  let projectsArray =  JSON.parse(localStorage.getItem(localStorageProjectsArrayKey)) || [];

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

  const saveToLocalStorageAndRender = () => {
    localStorage.setItem(localStorageProjectsArrayKey, JSON.stringify(projectsArray));
  };

  const render = () => {
    refreshProjectsList();
    renderProjects();
  };

  const persistToLocalStorage = () => {
    saveToLocalStorageAndRender();
    render();
  };

  const highLightProject = (selectedProject) => {
    const sidePanelProjectButtons = document.querySelectorAll('.project');
    sidePanelProjectButtons.forEach((projectButton) => projectButton.classList.remove('active-project'));
    selectedProject.classList.add('active-project');
  };

  const addNewProject = () => {
    let inputValue = newProjectInputField.value;
    if (inputValue === '' || inputValue === null) return;
    const newProject = Project(inputValue);
    newProjectInputForm.reset();
    projectsArray.push(newProject);
    persistToLocalStorage();
  };

  return {
    render,
    addNewProject,
    highLightProject,
  }
}());

export { projectsHandler };
