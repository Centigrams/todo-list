import NotImportant from '/src/images/not-important.png';
import Important from '/src/images/important.png'
import { format, parse } from "date-fns";

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
  }

  return {
    initializeImportantStar,
    initializeCheckbox,
    initializeDescriptionStrikeThrough,
    initializeDate,
    saveTodoCheckDate,
  }
}());

export { todosHelper };