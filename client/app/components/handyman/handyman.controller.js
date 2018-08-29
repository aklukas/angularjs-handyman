class HandymanController {
  projects = [];

  constructor(handymanService) {
    'ngInject';
    this.handymanService = handymanService;
  }

  // noinspection JSUnusedGlobalSymbols
  $onInit() {
    this.getHandymen();
  }

  getHandymen() {
    this.handymanService.getItems()
      .then(res => this.projects = res)
      .catch(error => console.log('error', error));
  }

}

export default HandymanController;
