class ProjectDetailController {
  constructor() {}

  setValidation(field) {
    return {'has-error': field.$touched && field.$error.required};
  }
}

export default ProjectDetailController;
