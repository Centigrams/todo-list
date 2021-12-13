import { Todo } from "./factories/todos-factory";
import { projectsHandler } from "./projects";
import { todosHelper } from "./todos-helper";
import DeleteButton from '/src/images/delete-button.png';
import EditButton from '/src/images/edit-button.png';

const todosHandler = (function () {
  const todosContainer = document.querySelector('[data-todos]');
  const newTodoInputField = document.querySelector('[data-new-todo-input-field]');
  const newTodoInputForm = document.querySelector('[data-new-todo-input-form]');
  const allTodos = document.querySelector('#all');
  const scheduledTodos = document.querySelector('#scheduled');
  const importantTodos = document.querySelector('#important');

  const createTodos = (todoCompleted, todoDescription, todoId, todoImportant, todoDate) => {
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo');
    todoDiv.setAttribute('id', todoId);
    todosContainer.appendChild(todoDiv);

    const leftContainerDiv = document.createElement('div')
    leftContainerDiv.classList.add('left-container');
    todoDiv.appendChild(leftContainerDiv);

    const checkBox = document.createElement('input')
    checkBox.classList.add('checkbox');
    checkBox.setAttribute('data-checkbox-id', todoId);
    checkBox.setAttribute('type', 'checkbox');
    leftContainerDiv.appendChild(checkBox);
    todosHelper.initializeCheckbox(todoCompleted, checkBox);

    const taskDescription = document.createElement('p');
    taskDescription.classList.add('task');
    taskDescription.textContent = todoDescription;
    leftContainerDiv.appendChild(taskDescription);
    todosHelper.initializeDescriptionStrikeThrough(todoCompleted, taskDescription);

    const rightContainerDiv = document.createElement('div')
    rightContainerDiv.classList.add('right-container');
    todoDiv.appendChild(rightContainerDiv);
    
    const dueDate = document.createElement('p');
    dueDate.classList.add('task-date');
    todosHelper.initializeDate(dueDate, todoDate);
    todosHelper.initializeDateCheck(dueDate);
    rightContainerDiv.appendChild(dueDate);

    const editDeleteContainerDiv = document.createElement('div');
    editDeleteContainerDiv.classList.add('edit-delete-container')
    rightContainerDiv.appendChild(editDeleteContainerDiv);

    const importantStar = new Image();
    importantStar.classList.add('task-important-star');
    importantStar.setAttribute('data-todo-important', todoImportant);
    importantStar.setAttribute('data-todo-important-id', todoId);
    todosHelper.initializeImportantStar(todoImportant, importantStar);
    editDeleteContainerDiv.appendChild(importantStar);

    const editButton = new Image();
    editButton.classList.add('task-edit');
    editButton.setAttribute('data-todo-edit-button-id', todoId);
    editButton.src = EditButton;
    editDeleteContainerDiv.appendChild(editButton);

    const deleteButton = new Image();
    deleteButton.classList.add('task-delete');
    deleteButton.setAttribute('data-todo-delete-button-id', todoId);
    deleteButton.src = DeleteButton;
    editDeleteContainerDiv.appendChild(deleteButton);
  };
  
  /**
   * There are three main steps before the todos are displayed:
   * 
   * 1. Empty the todosDisplayed list.
   * 
   * 2. Add the todo in the todosDisplayed list depending on the project selected.
   * 
   * 3. Sort the todos.
   * 
   * 4. Display each todos in the todosDisplayed list.
   * 
   * This implementation is more flexible than directly creating the todo from
   * the "project" objects since it allows the todos to be sorted.
   */
  let todosDisplayed = [];

  const clearTodosDisplayed = () => {
    todosDisplayed = [];
  };

  const sortTodosByOrderCreated = () => {
    todosDisplayed.sort((a,b) => a.id - b.id);
  };
  
  const sortTodosByImportant = () => {
    todosDisplayed.sort((a,b) => {
      return (a.important === b.important) ? 0 : a.important ? -1 : 1;
    });
  };

  const sortTodosByCompletion = () => {
    todosDisplayed.sort((a,b) => {
      return (a.completed === b.completed) ? 0 : b.completed ? -1 : 1;
    });
  };

  const sortTodos = () => {
    sortTodosByOrderCreated();
    sortTodosByImportant();
    sortTodosByCompletion();
  };

  const displayTodos = () => {
    sortTodos();
    todosDisplayed.forEach(todo => {
      createTodos(todo.completed, todo.description, todo.id, todo.important, todo.date);
    });
  };
  
  const renderAllTodos = () => {
    clearTodosDisplayed();
    projectsHandler.projectsArray.forEach(project => {
      project.tasks.forEach(todo => {
        todosDisplayed.push(todo);
      });
    });
    displayTodos();
  };

  const renderScheduledTodos = () => {
    clearTodosDisplayed();
    projectsHandler.projectsArray.forEach(projects => {
      projects.tasks.forEach(todo => {
        if (todo.date !== '') {
          todosDisplayed.push(todo);
        }
      });
    });
    displayTodos();
  };

  const renderImportantTodos = () => {
    clearTodosDisplayed();
    projectsHandler.projectsArray.forEach(project => {
      project.tasks.forEach(todo => {
        if (todo.important) {
          todosDisplayed.push(todo);
          console.log(true)
        }
      });
    });
    displayTodos();
  };

  const renderTodosInSelectedProject = (selectedProject) => {
    clearTodosDisplayed();
    projectsHandler.projectsArray.forEach(project => {
      if (selectedProject.id === project.id) {
        project.tasks.forEach(todo => {
          todosDisplayed.push(todo);
        });
      }
    });
    displayTodos();;
  };

  const renderTodos = () => {
    let activeProject = document.querySelector('.active-project');
    // If All is selected display all todos for each project
    if (allTodos.id === activeProject.id) {
      renderAllTodos();
    } else if (scheduledTodos.id === activeProject.id) {
      renderScheduledTodos();
    } else if (importantTodos.id === activeProject.id) {
      renderImportantTodos();
    } else {
      renderTodosInSelectedProject(activeProject);
    }
  };

  const pushNewTodoInProject = (newTodoInput) => {
    let activeProject = document.querySelector('.active-project');
    projectsHandler.projectsArray.forEach(project => {
      if (project.id === activeProject.id) {
        project.tasks.push(newTodoInput);
      }
    });
  };

  const addNewTodo = () => {
    let inputValue = newTodoInputField.value;
    if (inputValue === null || inputValue === '') return;
    const newTodo = Todo(inputValue);
    newTodoInputForm.reset();
    pushNewTodoInProject(newTodo);
    render();
    projectsHandler.persistToLocalStorage();
  };

  const refreshTodoList = () => {
    while (todosContainer.firstChild) {
      todosContainer.removeChild(todosContainer.firstChild);
    }
  };

  const render = () => {
    refreshTodoList();
    renderTodos();
    todosHelper.initializeScrollWheel();
  };

  return {
    render,
    addNewTodo,
  }
}());

export { todosHandler };
