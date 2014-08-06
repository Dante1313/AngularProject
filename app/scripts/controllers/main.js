'use strict';

/**
 * @ngdoc function
 * @name angularProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularProjectApp
 */
angular.module('angularProjectApp')
  .controller('MainCtrl',['$scope','$filter', function ($scope,$filter) {
    $scope.posts = posts;    
  }]);

var posts = [
    {
        author: "Some gay",
        date: "21.07.2014",
        image: "https://d1ffx7ull4987f.cloudfront.net/images/courses/hero/113/javascript-best-practices-a4f4b84c34c4e6cf6c86816137b0b8aa.jpg",
        title: "Some article about JS",
        text: "Very inreresting text about JS"
    },
    {
        author: "Some other gay",
        date: "28.07.2014",
        image: "https://d1ffx7ull4987f.cloudfront.net/images/courses/hero/100/javascript-road-trip-part-1-8963f3dd4a9c0d0f634da6b950d79f45.png",
        title: "Some other article about JS",
        text: "Other very inreresting text about JS"
    }
];
