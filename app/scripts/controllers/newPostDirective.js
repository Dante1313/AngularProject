'use strict';

angular.module('angularProjectApp')
  .directive('newPost',['$filter','blogPostService',function ($filter,blogPostService) {
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
                $scope.newPost = {};
            };  
            $scope.newPost = {};
            $scope.addNewPost = function(isValid){
                
                if (isValid) {
                    if($scope.newPost._id) {
                        blogPostService.update({_id: $scope.post._id},$scope.post,function(){
                            $scope.newPost = {};
                            $scope.hidePopup();
                            $scope.posts = blogPostService.query();
                        });  
                    } else {
                        $scope.newPost.date = $scope.getCurrentDate();
                        blogPostService.save($scope.newPost,function(){
                            $scope.newPost = {};
                            $scope.hidePopup();
                            $scope.posts = blogPostService.query();
                        });  
                    }
                      
                }
            };
              
            $scope.editPost = function(post){
  
            };

            $scope.getCurrentDate = function(){
                var date = new Date();
                return $filter('date')(date, 'dd.MM.yyyy'); 
            };
          }
      }    
  }]);