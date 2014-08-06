'use strict';

angular.module('angularProjectApp')
  .directive('blogPost',function () {
      return {
        restrict: 'E',
        templateUrl: '../views/blogPostDirective.html' 
      }    
  });