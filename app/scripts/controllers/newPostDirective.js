'use strict';

angular.module('angularProjectApp')
  .directive('newPost',['$filter',function ($filter) {
      return {
          restrict: 'E',
          templateUrl: '../views/newPostDirective.html',
          controller: function($scope) {
            $scope.isShowPopup = false;  
            $scope.showPopup = function() {       
                $scope.isShowPopup = true;
            };
            $scope.hidePopup = function() {
                $scope.isShowPopup = false;
            };  
            $scope.newPost = {};
            $scope.addNewPost = function(isValid){
                
                if (isValid) {
                    $scope.newPost.date = $scope.getCurrentDate();
                    $scope.posts.push($scope.newPost);
                    $scope.newPost = {};
                    $scope.hidePopup(); 
                }

            };

            $scope.getCurrentDate = function(){
                var date = new Date();
                return $filter('date')(date, 'dd.MM.yyyy'); 
            };
          }
      }    
  }]);