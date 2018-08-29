import template from './projectList.html';
import controller from './projectList.controller';
import './projectList.scss';

let projectListComponent = {
  bindings: {
    projects: '<',
    selectedProject: '&',
    deleteProject: '&'
  },
  template,
  controller
};

export default projectListComponent;
