import { projectsHandler } from "./projects";
import NotImportant from '/src/images/not-important.png';
import Important from '/src/images/important.png'

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
  const deleteTodo = (todoClicked) => {
    const todoContainer = document.querySelector('[data-todos]');
    const todoDeleted = todoClicked.parentNode.parentNode.parentNode;
    const index = [...todoContainer.children].indexOf(todoDeleted);
    projectsHandler.projectsArray.forEach(project => {
      project.tasks.forEach(todo => {
        if (todo.id === todoDeleted.id) {
          project.tasks.splice(index, 1);
          projectsHandler.persistToLocalStorage();
        }
      });
    })
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

  const initiateTodoEditMode = (
    todoSelected, 
    todoCompleted, 
    todoDescription, 
    todoId, 
    todoImportant, 
    todoDate
    ) => {
    //TODO: Function which replaces div content for edit mode
    //* After creating todo edit mode: get modified values when save is clicked, do nothing when canceled  
    //TODO: Create new class similar to original todo class but for edit mode

    todoSelected.setAttribute('class', 'todo-edited');
    //TODO: Checkbox, Input field, Date input, Important Star, Save Button, Cancel Button

    const leftContainerDiv = document.createElement('div');
    leftContainerDiv.setAttribute('class', 'left-container');
    todoSelected.appendChild(leftContainerDiv);

    const todoCheckbox = document.createElement('input');
    todoCheckbox.classList.add('checkbox');
    todoCheckbox.setAttribute('data-checkbox-id', todoId);
    todoCheckbox.setAttribute('type', 'checkbox');
    leftContainerDiv.appendChild(todoCheckbox);

    const todoDescriptionInputField = document.createElement('input');
    todoDescriptionInputField.setAttribute('class', 'edit-description-input-field');
    todoDescriptionInputField.setAttribute('maxlength', 85);
    leftContainerDiv.appendChild(todoDescriptionInputField);
    
    const rightContainerDiv = document.createElement('div');
    rightContainerDiv.setAttribute('class', 'right-container');
    todoSelected.appendChild(rightContainerDiv);

    const dateInput = document.createElement('input');
    dateInput.classList.add('date-input');
    dateInput.setAttribute('type', 'date');
    rightContainerDiv.appendChild(dateInput);

    const importantStar = new Image();
    importantStar.classList.add('task-important-star');
    importantStar.setAttribute('data-todo-important', todoImportant);
    importantStar.setAttribute('data-todo-important-id', todoId);
    if (todoImportant === false) {
      importantStar.src = NotImportant; 
    } else {
      importantStar.src = Important;
    }
    rightContainerDiv.appendChild(importantStar);

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
          const todoCompleted = todo.completed;
          const todoDescription = todo.description;
          const todoId = todo.id;
          const todoImportant = todo.important;
          const todoDate = todo.date;
          clearDiv(todoEdited);
          initiateTodoEditMode(
            todoEdited, 
            todoCompleted, 
            todoDescription, 
            todoId, 
            todoImportant, 
            todoDate
          );
        }
      });
    });
  };

  return {
    deleteTodo,
    toggleImportantStatus,
    toggleTodoCheckbox,
    editTodo,
  }
}());

export { projectEditMode, todoEditMode };
