import { Project } from './factories/projects-factory.js';
import { todosHandler } from './todos.js';
import DeleteButton from '/src/images/delete-button.png';

const projectsHandler = (function () {
  const projectsContainer = document.querySelector('[data-projects]');
  const newProjectInputField = document.querySelector('[data-add-new-projects-input]');
  const newProjectInputForm = document.querySelector('[data-add-new-projects-form]');
  // Namespace local storage key to avoid conflicting with other websites.
  const localStorageProjectsArrayKey = 'todo.projects';
  const localStorageSelectedProjectKey = 'todo.selectedProject';
  let projectsArray = JSON.parse(localStorage.getItem(localStorageProjectsArrayKey)) || [];
  let selectedProject = localStorage.getItem(localStorageSelectedProjectKey);

  // Only used to display project name in the project header.
  const displaySelectedProject = () => {
    const projectTitleHeader = document.getElementById('project-title');
    let activeProject = document.querySelector('.active-project');
    projectTitleHeader.textContent = activeProject.textContent;
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

  const saveSelectedProjectToLocalStorage = () => {
    localStorage.setItem(localStorageSelectedProjectKey, selectedProject);
  };

  const setAllProjectAsDefault = () => {
    const allProject = document.getElementById('all');
    selectProject(allProject);
    saveSelectedProjectToLocalStorage();
  };

  const initalizeSelectedProject = () => {
    /**
     * Higlight the selected project (refer to local storage) 
     * and display the selected project to the project header.
     */
    const allProjectsInSidePanel = document.querySelectorAll('.project');
    allProjectsInSidePanel.forEach((project) => {
      if (project.id === selectedProject) {
        project.classList.add('active-project');
      } else if (selectedProject === null) {
        setAllProjectAsDefault();
      }
    });
    displaySelectedProject();
  };

  // Create project elements in side panel excluding All, Scheduled, and Important
  const renderProjects = () => {
    projectsArray.forEach(project => {
      const listElement = document.createElement('li');
      listElement.setAttribute('id', project.id);
      listElement.classList.add('project');
      listElement.innerText = project.name;

      const deleteButtonContainer = document.createElement('div');
      deleteButtonContainer.classList.add('delete-button-container');

      const deleteButton = new Image();
      deleteButton.classList.add("project-delete-button");
      deleteButton.setAttribute('data-project', project.id);
      deleteButton.src = DeleteButton;

      listElement.appendChild(deleteButtonContainer);
      deleteButtonContainer.appendChild(deleteButton);
      projectsContainer.appendChild(listElement);
    });
  };

  const refreshProjectsList = () => {
    while (projectsContainer.firstChild) {
      projectsContainer.removeChild(projectsContainer.firstChild);
    }
  };

  const saveProjectsArrayToLocalStorage = () => {
    localStorage.setItem(localStorageProjectsArrayKey, JSON.stringify(projectsArray));
  };

  const saveToLocalStorageAndRender = () => {
    saveProjectsArrayToLocalStorage();
    saveSelectedProjectToLocalStorage();
  };

  const render = () => {
    refreshProjectsList();
    renderProjects();
    initalizeSelectedProject();
    todosHandler.render();
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

  return {
    render,
    addNewProject,
    selectProject,
    persistToLocalStorage,
    projectsArray,
    setAllProjectAsDefault,
  }
}());

export { projectsHandler };
