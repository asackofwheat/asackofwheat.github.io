var Homepage = angular.module('Homepage', ['ui.router']);

Homepage.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("index");

  $stateProvider.state('index', {
    url: '',
    templateUrl: 'templates/index.html'
  })
  .state('projects', {
    url: '/projects',
    views: {
      '': {
        templateUrl: 'templates/projects.html'
      }
    }
  })
  .state('about', {
    url: '/about',
    templateUrl: '/templates/about.html'
  })
  .state('maybe', {
    url: '/maybe',
    templateUrl: '/templates/maybe.html',
    controller: 'MaybeCtrl'
  })

}]);