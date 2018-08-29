import angular from 'angular';
import uiRouter from 'angular-ui-router';
import handymanComponent from './handyman.component';
import handymanService from "../shared/handyman.service";

let handymanModule = angular.module('handyman', [
  uiRouter,
  handymanService
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('handyman', {
        url: '/handyman',
        component: 'handyman'
      });
  })
.component('handyman', handymanComponent)

.name;

export default handymanModule;
