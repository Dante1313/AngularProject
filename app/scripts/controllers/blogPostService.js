'use strict';

angular.module('angularProjectApp')
    .factory('blogPostService',function($resource){
        var Post = $resource('http://54.72.3.96:3000/posts/:_id',{},{
            update: {
                method: 'PUT'
            }
        });
        return Post;
    });