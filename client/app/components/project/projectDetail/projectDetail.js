import angular from 'angular';
import uiRouter from 'angular-ui-router';
import projectDetailComponent from './projectDetail.component';

let projectDetailModule = angular.module('projectDetail', [
  uiRouter
])

.component('projectDetail', projectDetailComponent)

.name;

export default projectDetailModule;
