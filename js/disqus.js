// creates the angular app
var myApp = angular.module('myApp', []);

myApp.controller('myCtrl', function($scope, $http) {
  $scope.posts = {};

  // Create a $http.get with the link "https://disqus.com/api/3.0/forums/listPosts.json"
  // Within, have the following parameters:
  // access_token: This is the secret key
  // api_key: This is the public key
  // forum: This is the site name "youtatest1"
  // order: this is the order in which your comments show up in the thread. Choose "asc" to show oldest at the top
  
  //Once the http get is successful, insert the json response into a angular scope variable called "posts"
  
