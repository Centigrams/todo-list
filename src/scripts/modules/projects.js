import { Project } from './factories/projects-factory.js';

const projectsHandler = (function () {
  const projectsContainer = document.querySelector('[data-projects]');
  const newProjectInputField = document.querySelector('[data-add-new-projects-input]');
  const newProjectInputForm = document.querySelector('[data-add-new-projects-form]');
  // Namespace local storage key to avoid conflicting with other websites.
  const localStorageProjectsArrayKey = 'todo.projects';
  const localStorageSelectedProjectKey = 'todo.selectedProject';
  let projectsArray = JSON.parse(localStorage.getItem(localStorageProjectsArrayKey)) || [];
  let selectedProject = localStorage.getItem(localStorageSelectedProjectKey);

  // This will retain selected project in local storage
  const initalizeSelectedProject = () => {
    const allProjectsInSidePanel = document.querySelectorAll('.project');
    allProjectsInSidePanel.forEach((project) => {
      if (project.id === selectedProject) {
        project.classList.add('active-project');
        //TODO: Idea, get project, then display selected project to header.
      }
    });
  };
  // Only used to display project name in the project header.
  //TODO: Fix issue where stored selected project's text doesn't show up on refresh.
  const displaySelectedProject = () => {
    const projectTitleHeader = document.getElementById('project-title');
    let activeProject = document.querySelector('.active-project');
    projectTitleHeader.textContent = activeProject.textContent;
  };

  const renderProjects = () => {
    projectsArray.forEach(project => {
      const listElement = document.createElement('li');
      listElement.setAttribute('id', project.id);
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
    localStorage.setItem(localStorageSelectedProjectKey, selectedProject);
  };

  const render = () => {
    refreshProjectsList();
    renderProjects();
    initalizeSelectedProject();
  };

  const persistToLocalStorage = () => {
    saveToLocalStorageAndRender();
    render();
  };

  // Function will only be called in event listeners.
  const addNewProject = () => {
    let inputValue = newProjectInputField.value;
    if (inputValue === '' || inputValue === null) return;
    const newProject = Project(inputValue);
    newProjectInputForm.reset();
    projectsArray.push(newProject);
    persistToLocalStorage();
  };

  /**
   * @param  {string} selectedProject - Refers to event listener's selected list at {@link eventListeners.sidePanel}
   * Highlight the selected project: remove previous active project style then add to current selected project
   */
  const highLightProject = (selectedProjectTarget) => {
    const sidePanelProjectButtons = document.querySelectorAll('.project');
    sidePanelProjectButtons.forEach((projectButton) => projectButton.classList.remove('active-project'));
    selectedProjectTarget.classList.add('active-project');
  };

  // Combine the two functions, initialize both at once in sidePanel's event listener. 
  const selectProject = (selectedProjectTarget) => {
    highLightProject(selectedProjectTarget);
    selectedProject = selectedProjectTarget.id;
    displaySelectedProject();
  };

  return {
    render,
    addNewProject,
    selectProject,
    selectedProject,
    persistToLocalStorage,
  }
}());

export { projectsHandler };
