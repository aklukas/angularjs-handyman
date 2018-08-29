import ProjectDetailModule from './projectDetail';
import ProjectDetailController from './projectDetail.controller';
import ProjectDetailComponent from './projectDetail.component';
import ProjectDetailTemplate from './projectDetail.html';

describe('ProjectDetail', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ProjectDetailModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ProjectDetailController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(ProjectDetailTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = ProjectDetailComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ProjectDetailTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ProjectDetailController);
    });
  });
});
