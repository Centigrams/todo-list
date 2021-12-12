import NotImportant from '/src/images/not-important.png';
import Important from '/src/images/important.png'
import { format, parse, isToday, isTomorrow, isYesterday } from "date-fns";

/**
 * To reduce boilerplate code on todos.js and edit-mode.js, 
 * functions here will be implemeneted for dynamic elements.
 */
const todosHelper = (function () {
  const initializeImportantStar = (todoImportant, starElement) => {
    if (todoImportant === false) {
      starElement.src = NotImportant;
    } else {
      starElement.src = Important;
    }
  };

  const initializeCheckbox = (todoCompleted, checkboxElement) => {
    if (todoCompleted) {
      checkboxElement.checked = true;
    } else {
      checkboxElement.checked = false;
    }
  };

  const initializeDescriptionStrikeThrough = (todoCompleted, taskDescription) => {
    if (todoCompleted) {
      taskDescription.classList.add('completed-task');
    } else {
      taskDescription.classList.remove('completed-task');
    }
  };

  const initializeDate = (dueDateElement, todoDate) => {
    if (todoDate === '') {
      dueDateElement.textContent = 'No due date';
    } else {
      dueDateElement.textContent = todoDate;
    }
  };

  const saveTodoCheckDate = (dueDate, todo) => {
    if (dueDate.value === '') {
      todo.date = '';
    } else {
      const dateString = dueDate.value;
      const parsedDate = parse(dateString, 'yyyy-MM-dd', new Date());
      const dateResult = format(parsedDate, "MM/dd/yyyy");
      todo.date = dateResult;
    }
  };

  // Does not modify todo.date, only the element used to display the date
  const initializeDateCheck = (dueDateElement) => {
    const dateString = dueDateElement.textContent;
    const parsedDate = parse(dateString, 'MM/dd/yyyy', new Date());
    if (isToday(parsedDate)) {
      dueDateElement.textContent = 'Today';
    } else if (isTomorrow(parsedDate)) {
      dueDateElement.textContent = 'Tomorrow';
    } else if (isYesterday(parsedDate)) {
      dueDateElement.textContent = 'Yesterday';
    }
  };

  const initializeScrollWheel = () => {
    const todoListDiv = document.querySelector('#todo-list');
    const todosContainer = document.querySelector('[data-todos]');
    const todosContainerAsArray = [...todosContainer.children];
    if (todosContainerAsArray.length < 15) {
      todoListDiv.setAttribute('class', 'todo-list-with-less-15-todos');
    } else {
      todoListDiv.classList.remove('todo-list-with-less-15-todos');
    }
  };
  
  return {
    initializeImportantStar,
    initializeCheckbox,
    initializeDescriptionStrikeThrough,
    initializeDate,
    saveTodoCheckDate,
    initializeDateCheck,
    initializeScrollWheel,
  }
}());

export { todosHelper };