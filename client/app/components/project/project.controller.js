class ProjectController {
  projects = [];

  constructor(handymanService) {
    'ngInject';
    this.handymanService = handymanService;
  }

  // noinspection JSUnusedGlobalSymbols
  $onInit() {
    this.getProjects();
    this.initForm();
  }

  getProjects() {
    this.handymanService.getItems()
      .then(res => this.projects = res)
      .catch(error => console.log('error', error));
  }

  selectedProject(project) {
    this.projectForm = Object.assign({}, project);
  }

  saveProject(form) {
    if(this.form.$valid) {
      if (form.id) {
        this.updateProject(form);
      } else {
        this.newProject(form);
      }
    }
  }

  newProject(project) {
    this.handymanService.createItem(project)
      .then(() => this.getProjects())
      .catch(error => console.log('error', error))
      .finally(() => this.resetForm());
  }

  updateProject(project) {
    this.handymanService.updateItem(project)
      .then(() => this.getProjects())
      .catch(error => console.log('error', error))
      .finally(() => this.resetForm());
  }

  deleteProject(id) {
    this.handymanService.deleteItem(id)
      .then(() => this.getProjects())
      .finally(() => this.resetForm());
  }

  initForm() {
    this.projectForm = {
      id: null,
      requester: '',
      assignee: '',
      project: '',
      description: ''
    };
    this.form = {};
  }

  resetForm() {
    this.projectForm = {
      id: null,
      requester: '',
      assignee: '',
      project: '',
      description: ''
    };
    this.form.$setUntouched();
  }
}

export default ProjectController;
