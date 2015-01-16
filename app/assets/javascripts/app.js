angular.module('flapperNews', [])
.controller('MainCtrl', [
'$scope',
'posts',
function($scope,posts){
  $scope.posts = posts.posts;
  
}]);
angular.module('flapperNews', [])
.controller('PostsCtrl', [
'$scope',
'$stateParams',
'posts',
function($scope, $stateParams, posts){

}]);
angular.module('flapperNews', [])
.factory('posts', [function(){
  var o = {
    posts: []
  };
  return o;
}])
angular.module('flapperNews', ['ui.router', 'templates','Devise'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('posts', {
    url: '/posts/{id}',
    templateUrl: 'posts/_posts.html',
    controller: 'PostsCtrl'
  });
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home/_home.html',
      controller: 'MainCtrl'
    });
  $stateProvider
   .state('login', {
      url: '/login',
      templateUrl: 'auth/_login.html',
      controller: 'AuthCtrl'
    })
  $stateProvider  
    .state('register', {
      url: '/register',
      templateUrl: 'auth/_register.html',
      controller: 'AuthCtrl'
    });
  $urlRouterProvider.otherwise('home');
}])
