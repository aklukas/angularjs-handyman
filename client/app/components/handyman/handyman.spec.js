import HandymanModule from './handyman';
import HandymanController from './handyman.controller';
import HandymanComponent from './handyman.component';
import HandymanTemplate from './handyman.html';

describe('Handyman', () => {
  let $rootScope, makeController;

  beforeEach(window.module(HandymanModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new HandymanController();
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
      expect(HandymanTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = HandymanComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(HandymanTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(HandymanController);
    });
  });
});
