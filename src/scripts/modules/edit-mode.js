import { projectsHandler } from "./projects";
import { todosHelper } from "./todos-helper";

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

const todoEditMode = (function () {
  const deleteTodo = (todoClicked) => {
    /**
     * Check if a project contains the specific todo which matches 
     * the deleted todo's id. Get the index of that todo within the 
     * project that contains it and use the index to remove the todo.
     * ---
     * This solution fixes the issue where the deleted
     * task is not removed in all, important, or scheduled. If it does however,
     * it deletes the wrong task because it uses the wrong index for splicing. 
     */
    const todoDeleted = todoClicked.parentNode.parentNode.parentNode;
    projectsHandler.projectsArray.forEach(project => {
      const checkIfProjectExists = project.tasks.some(todo => todoDeleted.id === todo.id);
      if (checkIfProjectExists) {
        let index = project.tasks.findIndex(todo => todo.id === todoDeleted.id);
        project.tasks.splice(index, 1);
      };
    });
    projectsHandler.persistToLocalStorage();
  };

  const toggleImportantStatus = (todoClicked) => {
    const todoMarkedAsImportant = todoClicked.parentNode.parentNode.parentNode;
    projectsHandler.projectsArray.forEach(project => {
      project.tasks.forEach(todo => {
        if (todo.id === todoMarkedAsImportant.id) {
          if (todo.important) {
            todo.important = false;
            projectsHandler.persistToLocalStorage();
          } else {
            todo.important = true;
            projectsHandler.persistToLocalStorage();
          }
        }
      });
    });
  };

  const toggleTodoCheckbox = (todoClicked) => {
    const todoCompleted = todoClicked.parentNode.parentNode;
    projectsHandler.projectsArray.forEach(project => {
      project.tasks.forEach(todo => {
        if (todo.id === todoCompleted.id) {
          if (todo.completed) {
            todo.completed = false;
            projectsHandler.persistToLocalStorage();
          } else {
            todo.completed = true;
            projectsHandler.persistToLocalStorage();
          }
        }
      });
    });
  };

  const clearDiv = (todoSelected) => {
    todoSelected.innerHTML = "";
  };

  const initiateTodoEditMode = (todoSelected, todoDescription, todoDate) => {
    todoSelected.setAttribute('class', 'todo-edited');

    const leftContainerDiv = document.createElement('div');
    leftContainerDiv.classList.add('left-container-edit-mode');
    todoSelected.appendChild(leftContainerDiv);

    const todoDescriptionInputField = document.createElement('input');
    todoDescriptionInputField.setAttribute('class', 'edit-description-input-field');
    todoDescriptionInputField.setAttribute('maxlength', 85);
    leftContainerDiv.appendChild(todoDescriptionInputField);
    todoDescriptionInputField.value = todoDescription;
    todoDescriptionInputField.focus();
    todoDescriptionInputField.select();

    const rightContainerDiv = document.createElement('div');
    rightContainerDiv.setAttribute('class', 'right-container-edit-mode');
    todoSelected.appendChild(rightContainerDiv);

    const dateInput = document.createElement('input');
    dateInput.classList.add('date-input');
    dateInput.setAttribute('type', 'date');
    dateInput.value = todoDate;
    rightContainerDiv.appendChild(dateInput);


    const saveButton = document.createElement('button');
    saveButton.setAttribute('class', 'save-button');
    saveButton.textContent = 'Save';
    rightContainerDiv.appendChild(saveButton);

    const cancelButton = document.createElement('button');
    cancelButton.setAttribute('class', 'cancel-button');
    cancelButton.textContent = 'Cancel';
    rightContainerDiv.appendChild(cancelButton);
  };

  const editTodo = (todoClicked) => {
    const todoEdited = todoClicked.parentNode.parentNode.parentNode;
    projectsHandler.projectsArray.forEach(project => {
      project.tasks.forEach(todo => {
        if (todo.id === todoEdited.id) {
          const todoDescription = todo.description;
          const todoDate = todo.date;
          clearDiv(todoEdited);
          initiateTodoEditMode(
            todoEdited,
            todoDescription,
            todoDate
          );
        }
      });
    });
  };

  const saveTodo = (todoClicked) => {
    const todoDescription = document.querySelector('.edit-description-input-field');
    const dueDate = document.querySelector('.date-input');
    const todoSaved = todoClicked.parentNode.parentNode;
    projectsHandler.projectsArray.forEach(project => {
      project.tasks.forEach(todo => {
        if (todo.id === todoSaved.id) {
          todo.description = todoDescription.value;
          todosHelper.saveTodoCheckDate(dueDate, todo);
          projectsHandler.persistToLocalStorage();
        }
      });
    });
  };

  return {
    deleteTodo,
    toggleImportantStatus,
    toggleTodoCheckbox,
    editTodo,
    saveTodo,
  }
}());

export { projectEditMode, todoEditMode };
