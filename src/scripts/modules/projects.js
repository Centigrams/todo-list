import { Project } from './factories/projects-factory.js';

const projectsHandler = (function () {
  const projectsContainer = document.querySelector('[data-projects]');
  const newProjectInputField = document.querySelector('[data-add-new-projects-input]');
  const newProjectInputForm = document.querySelector('[data-add-new-projects-form]');
  // Namespace local storage key to avoid conflicting with other websites.
  const localStorageProjectsArrayKey = 'todo.projects';

  let projectsArray = JSON.parse(localStorage.getItem(localStorageProjectsArrayKey)) || [];

  const setDefaultProject = () => {
    const sidePanelProject = document.querySelectorAll('.project');
    const allProjects = document.querySelector('[data-project-id="all"]');
    sidePanelProject.forEach((project) => {
      if (!project.classList.contains('active-project')) {
        allProjects.classList.add('active-project');
      };
    });
    displaySelectedProject();
  };

  const renderProjects = () => {
    projectsArray.forEach(project => {
      const listElement = document.createElement('li');
      listElement.dataset.projectId = project.id;
      listElement.classList.add('project');
      listElement.innerText = project.name;
      projectsContainer.appendChild(listElement);
    });
    // Automatically highlight "All" in side panel if there are no active projects.
    setDefaultProject();
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
   */
  const highLightProject = (selectedProject) => {
    const sidePanelProjectButtons = document.querySelectorAll('.project');
    sidePanelProjectButtons.forEach((projectButton) => projectButton.classList.remove('active-project'));
    selectedProject.classList.add('active-project');
  };

  const displaySelectedProject = () => {
    const projectTitleHeader = document.getElementById('project-title');
    let activeProject = document.querySelector('.active-project');
    projectTitleHeader.textContent = activeProject.textContent;
  };

  // Combine the two functions, initialize both at once in sidePanel's event listener. 
  const selectProject = (selectedProject) => {
    highLightProject(selectedProject);
    displaySelectedProject();
  }; 

  return {
    render,
    addNewProject,
    selectProject,
  }
}());

export { projectsHandler };
