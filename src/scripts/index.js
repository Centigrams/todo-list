import '/src/style.css'
import { projectsHandler } from './modules/projects.js';
import { eventListeners } from './modules/event-listeners.js';

projectsHandler.render();
eventListeners.initiateEventListeners();
