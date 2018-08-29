import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Handyman from './handyman/handyman'
import Project from './project/project'

let componentModule = angular.module('app.components', [
  Home,
  About,
  Handyman,
  Project
])

.name;

export default componentModule;
