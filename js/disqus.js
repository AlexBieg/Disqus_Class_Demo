// Enter Access Token
var ACCESS_TOKEN =  

// Enter API Key
var API_KEY = // Enter API Key here

// create angular app
var myApp = angular.module('myApp', []);



myApp.controller('myCtrl', function($scope, $http) {
  $scope.name = "stuff";
  $scope.posts = {};

  $http.get('https://disqus.com/api/3.0/forums/listPosts.json', {
    params: {
      access_token: ACCESS_TOKEN,
      api_key: API_KEY,
      forum: "youtatest1",
      order: "asc" 
    } 
  })

  .success(function(response) {
    var data = response.response;
    $scope.posts = data;
  });
});
