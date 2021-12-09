import NotImportant from '/src/images/not-important.png';
import Important from '/src/images/important.png'

/**
 * To reduce boilerplate code on todos.js and edit-mode.js, 
 * functions here will be implemeneted for dynamic elements.
 */
const todosHelper = (function() {
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

  return {
    initializeImportantStar,
    initializeCheckbox,
    initializeDescriptionStrikeThrough,
  }
}());

export { todosHelper };