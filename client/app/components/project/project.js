import angular from 'angular';
import uiRouter from 'angular-ui-router';
import projectComponent from './project.component';
import projectList from './projectList/projectList';
import projectDetail from './projectDetail/projectDetail';
import handymanService from '../shared/handyman.service';

let projectModule = angular.module('project', [
  uiRouter,
  projectList,
  projectDetail,
  handymanService
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('project', {
        url: '/project',
        component: 'project'
      });
  })

  .component('project', projectComponent)

  .name;

export default projectModule;
