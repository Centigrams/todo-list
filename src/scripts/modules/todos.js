import { Todo } from "./factories/todos-factory";
import { projectsHandler } from "./projects";

const todosHandler = (function () {
  const todosContainer = document.querySelector('[data-todos]');
  const newTodoInputField = document.querySelector('[data-new-todo-input-field]');
  const newTodoInputForm = document.querySelector('[data-new-todo-input-form]');
  const allTodos = document.querySelector('#all');
  const scheduledTodos = document.querySelector('#scheduled');
  const importantTodos = document.querySelector('#important');

  const createTodos = (todoDescription) => {
    //TODO: Add "Important tag"
    // <div class="todo">
    //   <div class="left-container">
    //     <input class="checkbox" type="checkbox"></input>
    //     <p class ="task">Walk the dog.</p>
    //   </div>
    //   <div class="right-container">
    //     <p class="task-date">12/12/2004</p>
    //     <div class="edit-delete-container">
    //       <button class="task-edit">Edit</button>
    //       <button class="task-delete">Delete</button>
    //     </div>
    //   </div>
    // </div>
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo');
    todosContainer.appendChild(todoDiv);

    const leftContainerDiv = document.createElement('div')
    leftContainerDiv.classList.add('left-container');
    todoDiv.appendChild(leftContainerDiv);

    const checkBox = document.createElement('input')
    checkBox.classList.add('checkbox');
    checkBox.setAttribute('type', 'checkbox');
    leftContainerDiv.appendChild(checkBox);

    const taskDescription = document.createElement('p');
    taskDescription.classList.add('task');
    taskDescription.textContent = todoDescription;
    leftContainerDiv.appendChild(taskDescription);

    const rightContainerDiv = document.createElement('div')
    rightContainerDiv.classList.add('right-container');
    todoDiv.appendChild(rightContainerDiv);

    const dueDate = document.createElement('p');
    dueDate.classList.add('task-date');
    dueDate.textContent = 'No due date';
    rightContainerDiv.appendChild(dueDate);

    const editDeleteContainerDiv = document.createElement('div');
    editDeleteContainerDiv.classList.add('edit-delete-container')
    rightContainerDiv.appendChild(editDeleteContainerDiv);

    const editButton = document.createElement('button');
    editButton.classList.add('task-edit');
    editButton.textContent = 'Edit';
    editDeleteContainerDiv.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('task-delete');
    deleteButton.textContent = 'Delete';
    editDeleteContainerDiv.appendChild(deleteButton);
  };

  const renderAllTodos = () => {
    projectsHandler.projectsArray.forEach(project => {
      project.tasks.forEach(task => {
        createTodos(task.description);
      });
    });
  };

  const renderScheduledTodos = () => {
    console.log("Scheduled")
  };

  const renderImportantTodos = () => {
    console.log("Important")
  };

  const renderTodosInSelectedProject = (selectedProject) => {
    projectsHandler.projectsArray.forEach(project => {
      if (selectedProject.id === project.id) {
        project.tasks.forEach(task => {
          createTodos(task.description);
        });
      }
    });
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
  };

  return {
    render,
    addNewTodo,
  }
}());

export { todosHandler };
