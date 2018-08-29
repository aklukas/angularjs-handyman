import template from './projectDetail.html';
import controller from './projectDetail.controller';
import './projectDetail.scss';

let projectDetailComponent = {
  bindings: {
    projectForm: '=',
    form: '=',
    saveProject: '&',
    resetForm: '&'
  },
  template,
  controller
};

export default projectDetailComponent;
